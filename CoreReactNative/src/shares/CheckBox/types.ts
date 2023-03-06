import React from 'react'
import {ViewProps, StyleProp, ViewStyle, TextStyle} from 'react-native'
import {TypoPresetNames} from 'shares/Typo/preset'

export interface CheckBoxProps extends ViewProps {
  /**
   * If true, the component is checked
   * @default false
   */
  checked?: boolean
  /**
   * Specify whether the Checkbox is in an indeterminate state.
   * @default false
   */
  indeterminate?: boolean
  /**
   * If true, the component is outline
   * @default true
   */
  outline?: boolean
  /**
   * The callback function that is triggered when the state changes
   * @default undefined
   */
  onChange?: (nextChecked: boolean) => void
  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * The label of component
   * @default undefined
   */
  label?: string | React.ReactElement<{}>
  /**
   * The color of component
   * @default undefined
   */
  color?: string
  /**
   * The defaultColor of component
   * @default undefined
   */
  defaultColor?: string
  /**
   * The type of component
   * @default square
   */
  typeCheck?: 'square' | 'circle'
  /**
   * Overwrite style for boxStyle
   * @default undefined
   */
  boxStyle?: StyleProp<ViewStyle>
  /**
   * Overwrite style for containerStyle
   * @default undefined
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * The size of icon component
   * @default undefined
   */
  sizeIcon?: number
  /**
   * The size of component
   * @default undefined
   */
  size?: number
  /**
   * Overwrite style for labelStyle
   * @default undefined
   */
  labelStyle?: StyleProp<TextStyle>

  /**
   * Preset for text
   * @default default
   */
  labelPreset?: TypoPresetNames

  /**
   * color for label
   * @default default
   */
  labelColor?: string
}
