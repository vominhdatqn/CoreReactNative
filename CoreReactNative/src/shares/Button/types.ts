import React from 'react'
import {ViewStyle, TextStyle, TouchableOpacityProps, StyleProp} from 'react-native'

import {ButtonPresetNames} from './presets'
import {ThemeColor} from 'shares/GlobalStyles/types'
import {TypoPresetNames} from 'shares/Typo/preset'

export interface Insets {
  top?: number | undefined
  left?: number | undefined
  bottom?: number | undefined
  right?: number | undefined
}

export interface ButtonBaseProps extends TouchableOpacityProps {
  /**
   * Set flex to 1
   * @default undefined
   */
  block?: boolean

  /**
   * Set items to center
   * @default undefined
   */
  center?: boolean

  /**
   * isDebounce is use debounce onPress
   * @default undefined
   */
  isDebounce?: boolean

  /**
   * onPress click event
   * @default undefined
   */
  onPress?: () => void

  /**
   * Text which is looked up via i18n.
   * @default undefined
   */
  tx?: string

  /**
   * Using text instead i18n
   * @default undefined
   */
  text?: string
  /**
   * Display icon
   * @default undefined
   */
  icon?: React.ReactElement

  /**
   * disabled highlight when disabled enable
   * @default undefined
   */
  disabled?: boolean

  /**
   * padding
   * @default undefined
   */
  padding?: string | number

  /**
   * Overwrite style for button
   * @default undefined
   */
  style?: StyleProp<ViewStyle>

  /**
   * Overwrite style for text
   * @default undefined
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * Preset for button
   * @default default
   */
  preset?: ButtonPresetNames

  /**
   * Preset for text
   * @default default
   */
  textPreset?: TypoPresetNames
  /**
   * Using color for text
   * @default undefined
   */
  textColor?: string

  /**
   * Overwrite background color with theme for text
   */
  textColorTheme?: keyof ThemeColor

  /**
   * Using color for button background color
   * @default undefined
   */
  buttonColor?: string

  /**
   * Overwrite button background with theme
   * @default undefined
   */
  buttonColorTheme?: keyof ThemeColor

  /**
   * Children for button
   * @default undefined
   */
  children?: React.ReactNode

  /**
   * Actual width
   * @default undefined
   */
  width?: number | string

  /**
   * Actual height
   * @default undefined
   */
  height?: string | number

  /**
   * Loading
   * @default undefined
   */
  loading?: boolean

  /**
   * Loading
   * @default undefined
   */
  loadingColor?: string

  /**
   * Area touch
   * @default undefined
   */
  hitSlop?: Insets | undefined
}

export interface ButtonProps extends ButtonBaseProps {
  type?: 'icon' | 'flat'
}
