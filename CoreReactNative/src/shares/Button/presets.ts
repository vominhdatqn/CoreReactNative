import {StyleSheet} from 'react-native'
import {Theme} from 'contextAPI/ThemeContext'
import {SpacingDefault} from 'themes/spacing'

export type ButtonPresetProps = {
  default: any
  primary: any
  secondary: any
  pressed: any
  disabled: any
  flat: any
}

export const stylesView = (theme: Omit<Theme, 'dark'>): ButtonPresetProps =>
  StyleSheet.create({
    default: {
      backgroundColor: theme.colors?.btnBuyLight,
      alignItems: 'center',
      justifyContent: 'center',
      height: SpacingDefault.bigger,
      borderRadius: 6,
    },
    pressed: {
      backgroundColor: theme.colors?.btnBuy,
      alignItems: 'center',
      justifyContent: 'center',
      height: SpacingDefault.bigger,
      borderRadius: 6,
    },
    disabled: {
      backgroundColor: theme.colors?.btnDisabled,
      alignItems: 'center',
      justifyContent: 'center',
      height: SpacingDefault.bigger,
      borderRadius: 6,
    },
    primary: {
      backgroundColor: theme.colors?.bgBtnPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      height: SpacingDefault.bigger,
      borderRadius: 6,
    },
    secondary: {
      backgroundColor: theme.colors?.bgBtnSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      height: SpacingDefault.bigger,
      borderRadius: 6,
    },
    flat: {
      alignItems: 'center',
      justifyContent: 'center',
      height: SpacingDefault.bigger,
    },
  })

export type ButtonPresetNames = keyof ButtonPresetProps
