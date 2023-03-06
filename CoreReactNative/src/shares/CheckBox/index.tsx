import React, {useState, useEffect, useRef, useImperativeHandle, useContext, useMemo} from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated'
import {isString, isUndefined} from 'lodash'

import {useInterpolate, useInterpolateColor} from 'hooks/useAnimated'
import {useSharedTransition} from 'animated'
import {useTheme} from 'contextAPI/ThemeContext'
import {SpacingDefault} from 'themes/spacing'
import {Typo, Icon, Block} from 'shares'
import colors from 'themes/colors'
import {enhance} from 'utils/handleStyles'
import {CheckBoxProps} from './types'
import {defaultHitSlop} from 'utils'

// default values
const BORDER_RADIUS_CIRCLE = 16 / 2
const CHECKBOX_WIDTH = 16
const CHECKBOX_HEIGHT = 16
const OPACITY_DISABLED = 0.6

const CheckBox: React.ForwardRefRenderFunction<View, CheckBoxProps> = (
  {
    checked: checkedProp,
    indeterminate = false,
    disabled,
    onChange,
    typeCheck = 'square',
    color: colorProp,
    defaultColor: defaultColorProp,
    containerStyle,
    boxStyle,
    label,
    size: sizeProp,
    labelStyle,
    outline,
    labelPreset = 'body12',
    labelColor,
    ...restProps
  },
  ref,
) => {
  // refs
  const checkBoxRef = useRef<View>(null)

  // states
  const [checked, setChecked] = useState(!!checkedProp)

  // provide refs
  useImperativeHandle(ref, () => checkBoxRef.current!)

  // hooks
  const {theme} = useTheme()

  // animations
  const isPressed = useSharedValue(checked)
  const progress = useSharedTransition(checked)

  const scale = useInterpolate(progress, [0, 0.5, 1], [0, 0.7, 1])
  const opacity = useInterpolate(progress, [0, 0.3, 1], [0, 0.8, 1])

  const defaultColor = defaultColorProp ? defaultColorProp : theme.colors?.divider2

  const size = useMemo(() => (sizeProp ? sizeProp : CHECKBOX_WIDTH), [sizeProp])

  const boxCheckStyle = useMemo(
    () => (typeCheck === 'square' ? boxStyle : enhance([boxStyle, styles.checkBoxCircle])),
    [typeCheck, boxStyle],
  )

  const iconCheck = useMemo(() => (indeterminate ? 'minus' : 'ic_check_square'), [indeterminate])

  const memorizedWrapperStyle = useMemo(() => {
    return {
      height: size,
      width: size,
    }
  }, [size])

  // When colorProp and effects are disabled, check rerender.
  const color = useMemo(() => {
    if (disabled) return colors.grey2

    return colorProp || colors.primaryBuySuccessColorDarkDefault
  }, [colorProp, disabled])

  const borderColor = useInterpolateColor(progress, [0, 1], [defaultColor, color])
  const backgroundColor = useInterpolateColor(progress, [0, 1], [colors.transparent, color])

  const checkAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }))

  const wrapperAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: borderColor.value,
      backgroundColor: !outline ? backgroundColor.value : colors.transparent,
    }
  }, [color])

  const handleChangeValue = () => {
    if (disabled) return

    // handle animation when onPress on Pressable
    isPressed.value = !checked

    // controlled
    if (!isUndefined(checkedProp)) {
      return onChange?.(!checked)
    }

    // uncontrolled
    setChecked(preChecked => !preChecked)
  }

  // effects
  useEffect(() => setChecked(!!checkedProp), [checkedProp])

  return (
    <Block row alignCenter>
      <Pressable
        hitSlop={defaultHitSlop}
        ref={checkBoxRef}
        onPress={handleChangeValue}
        style={[styles.container, containerStyle]}
        {...restProps}>
        <Animated.View
          style={[
            styles.wrapper,
            styles.center,
            boxCheckStyle,
            disabled && styles.checkBoxDisabled,
            memorizedWrapperStyle,
            wrapperAnimatedStyle,
          ]}>
          <Animated.View style={[styles.center, checkAnimatedStyle]}>
            {checked && (
              <Icon
                size={sizeProp ? size / 2 : SpacingDefault.small}
                icon={iconCheck}
                color={outline ? color : colors.white}
              />
            )}
          </Animated.View>
        </Animated.View>
      </Pressable>
      {isString(label) && (
        <Typo style={[styles.checkBoxLabel, labelStyle]} text={label} preset={labelPreset} color={labelColor} />
      )}
      {React.isValidElement(label) && label}
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: CHECKBOX_WIDTH,
    height: CHECKBOX_HEIGHT,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey2,
  },
  checkBoxCircle: {
    borderRadius: BORDER_RADIUS_CIRCLE,
  },
  checkBoxLabel: {
    marginLeft: SpacingDefault.small,
  },
  checkBoxDisabled: {
    borderColor: colors.grey2,
    opacity: OPACITY_DISABLED,
  },
})

export default React.forwardRef<View, CheckBoxProps>(CheckBox)
