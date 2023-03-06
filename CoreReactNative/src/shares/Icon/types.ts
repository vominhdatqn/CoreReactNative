import {ImageStyle, StyleProp, ViewStyle} from 'react-native'
import {ResizeMode} from 'react-native-fast-image'
import {CommonSizesProps, ThemeColor} from 'shares/GlobalStyles/types'
import {IconTypes} from 'assets/images'
export interface IconProps {
  containerStyle?: ViewStyle

  /**
   * Overwrite background color with theme for text
   */
  colorTheme?: keyof ThemeColor

  /**
   * rotate icon
   */
  rotate?: string

  /**
   * Size of Icon
   * @default 24
   */
  size?: keyof CommonSizesProps | number

  /**
   * Height of Icon
   * @default 24
   */
  height?: keyof CommonSizesProps | number

  /**
   * Width of Icon
   * @default 24
   */
  width?: keyof CommonSizesProps | number

  /**
   * Tint color of icon
   * @default undefined
   */
  color?: string

  /**
   * Allow onPress to icon
   * @default undefined
   */
  onPress?: () => void

  /**
   * Icon type
   * @default undefined
   */
  icon: IconTypes | number

  /**
   * Custom resizeMode
   * @default contain
   */
  resizeMode?: ResizeMode

  /**
   * style icon
   * @default undefined
   */
  iconStyle?: StyleProp<ImageStyle>
}
