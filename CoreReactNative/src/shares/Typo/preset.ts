import {StyleSheet} from 'react-native'
import {FontDefault} from 'shares/GlobalStyles/typography'
import {FontSizeDefault} from 'themes/fontSize'
import colors from 'themes/colors'
import {Theme} from 'contextAPI/ThemeContext'

type PresetProps = {
  primaryText: any
  primaryText2: any
  secondaryText: any
  secondaryText2: any
  secondaryText3: any
  primaryTextButton: any
  secondaryTextButton: any
  display1: any
  display2: any
  display3: any
  heading: any
  body24: any
  body24B: any
  body20: any
  body20B: any
  body18: any
  body16B: any
  body16: any
  body14B: any
  body14: any
  body12B: any
  body12: any
  body10: any
  body10B: any
  xsmallB: any
  disabled14: any
}

export const TypoPresets = (theme: Theme): PresetProps =>
  StyleSheet.create({
    primaryText: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_14,
      color: theme.colors?.primaryText,
    },
    primaryText2: {
      fontFamily: FontDefault.PrimarySemibold,
      fontWeight: 'bold',
      fontSize: FontSizeDefault.FONT_14,
      color: colors.teal,
    },
    secondaryText: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_14,
      color: theme.colors?.secondaryText,
    },
    secondaryText2: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_14,
      color: theme.colors?.secondaryText2,
    },
    secondaryText3: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_13,
      color: theme.colors?.secondaryText3,
    },
    primaryTextButton: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_14,
      fontWeight: '600',
      color: colors.white,
    },
    secondaryTextButton: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_14,
      color: colors.teal,
    },
    display1: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_44,
      fontWeight: '600',
    },
    display2: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_36,
      fontWeight: '600',
    },
    display3: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_28,
      fontWeight: '600',
    },
    heading: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_20,
      fontWeight: '600',
    },
    body24: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_24,
    },
    body24B: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_24,
      fontWeight: '600',
    },
    body20B: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_20,
    },
    body20: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_20,
    },
    body18: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_18,
    },
    body16B: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_16,
      fontWeight: '600',
    },
    body16: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_16,
    },
    body14B: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_14,
      fontWeight: '600',
    },
    body14: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_14,
    },
    body12B: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_12,
      fontWeight: '600',
    },
    body12: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_12,
    },
    body10: {
      fontFamily: FontDefault.PrimaryRegular,
      fontSize: FontSizeDefault.FONT_10,
    },
    body10B: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_10,
      fontWeight: '600',
    },
    xsmallB: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_10,
      color: theme.colors?.primaryText,
    },
    disabled14: {
      fontFamily: FontDefault.PrimarySemibold,
      fontSize: FontSizeDefault.FONT_14,
      color: theme.colors?.secondaryTextDisabled,
      fontWeight: '600',
    },
  })

export type TypoPresetNames = keyof PresetProps
