/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useCallback, useEffect, useState} from 'react'
import {Dimensions, Text, TouchableOpacity} from 'react-native'
import Animated, {Easing, useAnimatedStyle, useSharedValue} from 'react-native-reanimated'
import {sharedTiming, useSharedTransition} from 'animated'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {hasNotch} from 'react-native-device-info'
import {useTheme} from 'contextAPI/ThemeContext'
import {SpacingDefault} from 'themes/spacing'
import {Typo, Icon, Block, Spacer} from 'shares'

import {BG_DEFAULT, BG_ERROR, BG_INFO, BG_SUCCESS, BG_WARN, DURATION_ANIMATED} from './Constants'
import {useStyles} from './Styles'
import {SnackBarItemProps, TypeMessage} from './types'

const {height} = Dimensions.get('window')
const POSITION = 140
const VIEW_HEIGHT = 48
const TAB_HEIGHT = 50

const getColor = (typeMessage: TypeMessage, borderLeftColor: Omit<SnackBarItemProps, 'item' | 'onPop'>): string => {
  const {
    borderLeftColorError,
    borderLeftColorInfo,
    borderLeftColorSuccess,
    borderLeftColorWarn,
    borderLeftColorDefault,
  } = borderLeftColor
  switch (typeMessage) {
    case 'success':
      return borderLeftColorSuccess ? borderLeftColorSuccess : BG_SUCCESS
    case 'info':
      return borderLeftColorInfo ? borderLeftColorInfo : BG_INFO
    case 'warn':
      return borderLeftColorWarn ? borderLeftColorWarn : BG_WARN
    case 'error':
      return borderLeftColorError ? borderLeftColorError : BG_ERROR
    default:
      return borderLeftColorDefault ? borderLeftColorDefault : BG_DEFAULT
  }
}

const typeChecker = ['warn', 'default']

export const SnackBarItem = memo(
  ({
    item,
    onPop,
    borderLeftColorError,
    borderLeftColorInfo,
    borderLeftColorSuccess,
    borderLeftColorWarn,
  }: SnackBarItemProps) => {
    //style
    const {theme, isDarkTheme} = useTheme()
    const styles = useStyles(theme)
    const insets = useSafeAreaInsets()

    // state
    const [isShow, setIsShow] = useState<boolean>(true)

    let initPosition = -POSITION
    let showUpPosition = hasNotch() ? 0 : 10
    if (item.position === 'bottom') {
      initPosition = height
      showUpPosition = item.isIncludedBottomHeight
        ? height - VIEW_HEIGHT - TAB_HEIGHT - insets.bottom - (insets.top * 3) / 2
        : height - POSITION + 50 - insets.bottom - SpacingDefault.normal
    }

    // reanimated
    const opacity = useSharedTransition(isShow, {
      duration: DURATION_ANIMATED,
    })
    const translateY = useSharedValue(initPosition)

    // function
    const _onClose = useCallback(() => {
      setIsShow(false)
    }, [])

    // effect
    useEffect(() => {
      const id = setTimeout(() => {
        setIsShow(false)
      }, item.interval + DURATION_ANIMATED)

      return () => {
        clearTimeout(id)
      }
    }, [item.interval])

    useEffect(() => {
      if (isShow) {
        translateY.value = sharedTiming(showUpPosition, {
          duration: DURATION_ANIMATED,
          easing: Easing.inOut(Easing.ease),
        })
      } else {
        translateY.value = sharedTiming(initPosition, {
          duration: DURATION_ANIMATED,
          easing: Easing.inOut(Easing.ease),
        })
      }
    }, [isShow])

    useEffect(() => {
      // @ts-ignore
      let id: NodeJS.Timeout | null = null
      if (!isShow) {
        id = setTimeout(() => {
          onPop(item)
        }, DURATION_ANIMATED)
      }
      return () => {
        if (id) {
          clearTimeout(id)
        }
      }
    }, [isShow, item, onPop])

    // animated style
    const itemBarAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{translateY: translateY.value}],
      opacity: opacity.value,
    }))

    // render
    if (typeChecker.includes(item.type)) {
      const getIconByType = () => {
        switch (item.type) {
          case 'default':
            return !item.icon
              ? isDarkTheme
                ? 'ic_categories_check_circle_toast'
                : 'ic_categories_check_circle'
              : item.icon
          case 'warn':
            return !item.icon ? 'ic_warning_alert' : item.icon
          default:
            return
        }
      }
      const renderIcon = () => {
        if (React.isValidElement(item.icon)) {
          return item.icon
        }

        return (
          <Icon
            //@ts-ignore
            icon={getIconByType()}
            size="medium"
            colorTheme="icSecondary"
          />
        )
      }

      return (
        <Animated.View style={[styles.defaultView, itemBarAnimatedStyle]}>
          <Block block row mHoz={SpacingDefault.small} alignCenter>
            {renderIcon()}
            <Spacer width={SpacingDefault.small} />
            <Typo flex colorTheme="primaryText" preset="body14" color={theme.colors?.icSecondary}>
              {item.msg}
            </Typo>
          </Block>
        </Animated.View>
      )
    }

    return (
      <Animated.View
        style={[
          styles.defaultView,
          itemBarAnimatedStyle,
          styles.itemBar,
          {
            borderLeftColor: getColor(item.type, {
              borderLeftColorError,
              borderLeftColorInfo,
              borderLeftColorSuccess,
              borderLeftColorWarn,
            } as any),
          },
        ]}>
        <Typo colorTheme="primaryText" preset="body14" flex>
          {item.msg}
        </Typo>
        <Animated.View>
          <TouchableOpacity onPress={_onClose}>
            <Text>X</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    )
  },
  () => true,
)
