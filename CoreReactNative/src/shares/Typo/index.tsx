/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useMemo} from 'react'
import {StyleProp, Text, TextStyle} from 'react-native'
import {useTranslation} from 'react-i18next'
import equals from 'react-fast-compare'

import {TypoProps} from './types'
import {enhance, propsToStyle} from 'utils/handleStyles'
import {FontSizeDefault} from 'themes/fontSize'
import GlobalStyles from 'shares/GlobalStyles'
import {useTheme} from 'contextAPI/ThemeContext'
import {TypoPresets} from './preset'
import {FontDefault} from 'shares/GlobalStyles/typography'

const TypoComponent: React.FC<TypoProps> = ({
  tx = '',
  txOptions,
  text,
  children,
  flex,
  fontSize,
  fontWeight,
  fontFamily,
  color,
  center,
  textTransform,
  textAlign,
  fontStyle,
  letterSpacing,
  lineHeight,
  colorTheme,
  preset = 'body12',
  style: styleOverride = {},
  bold,
  regular,
  semiBold,
  solid,
  disabled,
  ...rest
}) => {
  // hooks
  const {t} = useTranslation()
  const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme()

  // memoized
  const content = useMemo(() => {
    return text || children || t(tx)
  }, [text, children, tx, t])

  const styleComponent = useMemo(
    () =>
      enhance<StyleProp<TextStyle>>([
        preset && TypoPresets(theme)?.[preset],
        fontSize && {fontSize: FontSizeDefault[fontSize]},
        [
          flex && GlobalStyles.block,
          fontFamily && {fontFamily: FontDefault[fontFamily]},
          colorTheme && {color: theme.colors?.[colorTheme]},
          center && {textAlign: 'center'},
          bold && {fontWeight: 'bold', fontFamily: FontDefault.PrimaryBold},
          semiBold && {fontWeight: '600', fontFamily: FontDefault.PrimarySemibold},
          regular && {fontWeight: '500', fontFamily: FontDefault.PrimaryRegular},
          solid && {fontWeight: '400'},

          propsToStyle([
            {fontWeight},
            disabled ? {opacity: 0.1} : {color},
            {textAlign},
            {textTransform},
            {fontStyle},
            {letterSpacing},
            {lineHeight},
          ]),
          enhance([styleOverride]),
        ] as StyleProp<TextStyle>,
      ]),
    [
      flex,
      preset,
      fontSize,
      fontWeight,
      fontFamily,
      color,
      colorTheme,
      center,
      textAlign,
      textTransform,
      fontStyle,
      letterSpacing,
      lineHeight,
      styleOverride,
      bold,
      semiBold,
      regular,
      solid,
      theme,
    ],
  )

  return (
    <Text allowFontScaling={false} {...rest} style={[styleComponent]}>
      {content}
    </Text>
  )
}

export default memo(TypoComponent, equals)
