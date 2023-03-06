import {IconTypes} from 'assets/images'
import {StyleProp} from 'react-native'
import {ImageStyle, ResizeMode, Source} from 'react-native-fast-image'
import {CommonSizesProps} from 'shares/GlobalStyles/types'

export interface ImageBaseProps {
  /**
   * the URL of Image
   * @default undefined
   */
  source: number | Source | IconTypes

  /**
   * resize mode of Image
   * @default undefined
   */
  resizeMode?: ResizeMode

  /**
   * Tint color of icon
   * @default undefined
   */
  color?: string

  /**
   * width of Image
   * @default undefined
   */
  width?: keyof CommonSizesProps | number
  /**
   * both width and height of Image
   * @default undefined
   */

  height?: keyof CommonSizesProps | number
  /**
   * height of Image
   * @default undefined
   */

  size?: keyof CommonSizesProps | number
  /**
   * borderRadius
   * @default undefined
   */
  borderRadius?: keyof CommonSizesProps | number

  /**
   * borderWidth
   * @default undefined
   */
  borderWidth?: number

  /**
   * borderColor
   * @default undefined
   */
  borderColor?: string

  /**
   * TintColor
   *
   * If supplied, changes the color of all the non-transparent pixels to the given color.
   */
  tintColor?: number | string

  /**
   * style
   * @default undefined
   */
  style?: StyleProp<ImageStyle>
}
