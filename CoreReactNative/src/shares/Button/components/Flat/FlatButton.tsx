import React, {useMemo} from 'react'
import {ActivityIndicator, TouchableOpacity, ViewStyle} from 'react-native'
import {debounce} from 'lodash'
import {ButtonFlatProps} from './FlatButton.props'
import {useTheme} from 'contextAPI/ThemeContext'
import {enhance} from 'utils/handleStyles'
import {Typo} from 'shares'
import {ThemeColor} from 'shares/GlobalStyles/types'
import colors from 'themes/colors'
import {stylesView} from '../../presets'
import GlobalStyles from 'shares/GlobalStyles'
import {defaultHitSlop} from 'utils'

const FlatButton: React.FC<ButtonFlatProps> = ({
  preset,
  textPreset = 'primaryTextButton',
  textColor,
  textColorTheme,
  tx,
  text,
  style: styleOverride = {},
  textStyle: textStyleOverride = {},
  children,
  buttonColor,
  buttonColorTheme,
  activeOpacity = 0.5,
  padding = 0,
  disabled = false,
  width,
  height,
  loading,
  hitSlop = defaultHitSlop,
  icon,
  isDebounce = false,
  loadingColor = colors.white,
  onPress,
  block,
  center,
  ...restProps
}) => {
  const {theme} = useTheme()

  // memoized
  const viewStyle = useMemo(
    () =>
      enhance<ViewStyle>([
        block && GlobalStyles.block,
        center && GlobalStyles.center,
        preset && stylesView(theme)?.[preset],
        disabled && {backgroundColor: theme.colors?.btnDisabled},
        buttonColorTheme && {
          backgroundColor: theme.colors?.[buttonColorTheme],
        },
        buttonColor && {backgroundColor: buttonColor},
        {padding},
        {width},
        height && {height: height},
        styleOverride as ViewStyle,
      ]),
    [buttonColor, buttonColorTheme, preset, styleOverride, theme.colors, disabled, width, height, block, center],
  )

  const content = useMemo(() => {
    let _textColorTheme: keyof ThemeColor | undefined = textColorTheme

    if (loading) return <ActivityIndicator size="small" color={loadingColor} />
    if (preset === 'disabled') {
      _textColorTheme = 'secondaryText4'
    }

    const renderFlatButton = () => {
      if (children) return children
      return (
        <Typo
          tx={tx}
          text={text}
          preset={textPreset}
          color={textColor}
          colorTheme={_textColorTheme}
          style={[
            disabled && {
              color: theme.colors?.secondaryTextDisabled,
            },
            textStyleOverride,
          ]}
        />
      )
    }

    return renderFlatButton()
  }, [children, tx, text, textStyleOverride, textPreset, textColor, textColorTheme, preset])

  const _onPress = () => {
    if (isDebounce) return debounce(() => onPress?.(), 300)
    return onPress?.()
  }

  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      activeOpacity={activeOpacity}
      style={[viewStyle]}
      onPress={_onPress}
      disabled={disabled}
      {...restProps}>
      {content}
    </TouchableOpacity>
  )
}

export default FlatButton
