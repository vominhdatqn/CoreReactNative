import React, {useMemo} from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'
import {ButtonIconProps} from './IconButton.props'
import {useTheme} from 'contextAPI/ThemeContext'
import {enhance} from 'utils/handleStyles'
import {Typo, Block} from 'shares'
import {stylesView} from '../../presets'

const IconButton: React.FC<ButtonIconProps> = ({
  preset = 'default',
  textPreset,
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
  icon,
  ...restProps
}) => {
  const {theme} = useTheme()

  // style
  const viewStyle = useMemo(
    () =>
      enhance<ViewStyle>([
        {
          backgroundColor: buttonColorTheme ? theme.colors?.[buttonColorTheme] : buttonColor,
          padding,
        },
        preset && stylesView(theme)?.[preset],
        styleOverride as ViewStyle,
        {width},
      ]),
    [buttonColor, buttonColorTheme, preset, styleOverride, theme.colors, disabled, width],
  )

  const content = useMemo(
    () =>
      children || (
        <Block row alignCenter>
          {icon || null}
          <Typo
            tx={tx}
            text={text}
            style={textStyleOverride}
            preset={textPreset}
            color={textColor}
            colorTheme={textColorTheme}
          />
        </Block>
      ),
    [children, tx, text, textStyleOverride, textPreset, textColor, textColorTheme],
  )

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[viewStyle, {opacity: disabled ? 0.5 : 1}]}
      disabled={disabled}
      {...restProps}>
      {content}
    </TouchableOpacity>
  )
}

export default IconButton
