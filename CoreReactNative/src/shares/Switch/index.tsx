import React, {useState, useEffect, useRef, useImperativeHandle, useMemo} from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'

// hooks
import {useInterpolateColor} from 'hooks/useAnimated'
import {useSharedTransition} from 'animated'

// types
import {SwitchProps} from './types'
import {isUndefined} from 'lodash'
import {useTheme} from 'contextAPI/ThemeContext'
import {SpacingDefault} from 'themes/spacing'
import colors from 'themes/colors'
import {defaultHitSlop} from 'utils'

// default values
const SWITCH_WIDTH = 24
const BORDER_RADIUS_CONTAINER = SWITCH_WIDTH
const OPACITY_DISABLED = 0.6
const SWITCH_BACKGROUND_DEFAULT = '#ECEFF2'

const Switch: React.ForwardRefRenderFunction<View, SwitchProps> = (
  {
    checked: checkedProp,
    disabled,
    size: sizeProp,
    trackColor,
    thumbColor,
    ios_backgroundColor,
    onChange,
    containerStyle,
    ...restProps
  },
  ref,
) => {
  //refs
  const switchRef = useRef<View>(null)

  // states
  const [checked, setChecked] = useState(!!checkedProp)

  // provide ref
  useImperativeHandle(ref, () => switchRef.current!)

  // hooks
  const {theme, isDarkTheme} = useTheme()
  const styles = useStyles()

  // animtions
  const isPressed = useSharedValue(checked)
  const progress = useSharedTransition(checked)

  // memorized
  const memorizedContainerStyle = useMemo(() => {
    return {
      width: sizeProp ? sizeProp * 2 : SWITCH_WIDTH * 2,
      borderRadius: sizeProp ? sizeProp : BORDER_RADIUS_CONTAINER,
    }
  }, [sizeProp])

  const memorizedCircleStyle = useMemo(() => {
    return {
      width: sizeProp ? sizeProp : SWITCH_WIDTH,
      height: sizeProp ? sizeProp : SWITCH_WIDTH,
      borderRadius: sizeProp ? sizeProp / 2 : BORDER_RADIUS_CONTAINER,
    }
  }, [sizeProp])

  const isSize = useMemo(() => (sizeProp ? sizeProp : SWITCH_WIDTH), [sizeProp])

  const unCheckedBackground = useMemo(() => {
    if (ios_backgroundColor) return ios_backgroundColor as string

    if (trackColor?.false) {
      return trackColor?.false as string
    }
    return theme.colors?.bg4
  }, [ios_backgroundColor, trackColor?.false, theme])

  const checkedBackground = useMemo(() => {
    if (trackColor?.true) return trackColor?.true as string

    if (isDarkTheme) {
      return `${colors.base}10`
    }
    return colors.teal
  }, [isDarkTheme, trackColor?.true])

  const backgroundColorContainer = useInterpolateColor(progress, [0, 1], [unCheckedBackground, checkedBackground])

  const backgroundCircle = useInterpolateColor(progress, [0, 1], [colors.white, colors.white])

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

  const translateXCursorAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(checked ? isSize - 1 : 1, {
            duration: 200,
          }),
        },
      ],
    }
  })

  const bgCursorAnim = useAnimatedStyle(() => {
    return {
      backgroundColor: !thumbColor ? backgroundCircle.value : thumbColor,
    }
  })

  const containerAnimated = useAnimatedStyle(() => ({
    backgroundColor: backgroundColorContainer.value,
  }))

  // effects
  useEffect(() => setChecked(!!checkedProp), [checkedProp])

  return (
    <Pressable
      ref={switchRef}
      hitSlop={defaultHitSlop}
      onPress={handleChangeValue}
      style={[disabled && styles.switchDisabled, containerStyle]}
      {...restProps}>
      <Animated.View style={[styles.container, memorizedContainerStyle, containerAnimated]}>
        <Animated.View style={[styles.circle, memorizedCircleStyle, translateXCursorAnim, styles.center]}>
          <Animated.View
            style={[
              {
                height: 8.6,
                width: 8.6,
                borderRadius: SWITCH_WIDTH / 2,
              },
              bgCursorAnim,
            ]}
          />
        </Animated.View>
      </Animated.View>
    </Pressable>
  )
}

const useStyles = () => {
  return StyleSheet.create({
    container: {
      width: SWITCH_WIDTH * 2,
      borderRadius: BORDER_RADIUS_CONTAINER,
    },
    switchDisabled: {
      opacity: OPACITY_DISABLED,
    },
    circle: {
      width: SWITCH_WIDTH / 2,
      height: SWITCH_WIDTH / 2,
      borderRadius: SWITCH_WIDTH / 4,
      paddingVertical: SpacingDefault.tiny,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}

export default React.forwardRef<View, SwitchProps>(Switch)
