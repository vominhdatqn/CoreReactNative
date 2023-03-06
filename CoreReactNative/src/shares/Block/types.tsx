import React from 'react'
import {FlexAlignType, StyleProp, ViewProps, ViewStyle} from 'react-native'
import {CommonSizesProps, ThemeColor} from 'shares/GlobalStyles/types'

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'

type Position = 'absolute' | 'relative'

type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

type OverFlow = 'visible' | 'hidden' | 'scroll'
export interface BlockProps extends ViewProps {
  /**
   * flexWrap
   * @default nowrap
   */
  flexWrap?: FlexWrap

  /**
   * flexGrow
   * @default undefined
   */
  flexGrow?: number | undefined

  /**
   * display
   * @default undefined
   */
  display?: 'none' | 'flex' | undefined

  /**
   * left of distance left
   * @default 0
   */
  left?: number | string

  /**
   * right of distance right
   * @default 0
   */
  right?: number | string

  /**
   * bottom of distance bottom
   * @default 0
   */
  bottom?: number | string

  /**
   * top of distance top
   *  * @default 0
   */
  top?: number | string

  /**
   * zIndex
   * @default 0
   */
  zIndex?: number

  /**
   * Sets the overflow block.
   * @default 0
   */
  overflow?: OverFlow

  /**
   * opacity of block
   * @default 0
   */
  opacity?: number

  /**
   * Width of size block
   * @default 0
   */
  width?: string | number

  /**
   * Height of size block
   * @default 0
   */
  height?: string | number

  /**
   * Children for block
   * @default undefined
   */
  children?: React.ReactNode

  /**
   * Set flex to 1
   * @default undefined
   */
  block?: boolean

  /**
   * Set flex for block
   * @default undefined
   */
  flex?: number

  /**
   * Set block to row
   * @default undefined
   */
  row?: boolean

  /**
   * Set items to center according to column
   * @default undefined
   */
  alignCenter?: boolean

  /**
   * Set items to center according to row
   * @default undefined
   */
  justifyCenter?: boolean

  /**
   * Set items to center
   * @default undefined
   */
  center?: boolean

  /**
   * margin top
   * @default undefined
   */
  mTop?: keyof CommonSizesProps | number

  /**
   * margin bottom
   * @default undefined
   */
  mBottom?: keyof CommonSizesProps | number

  /**
   * margin left
   * @default undefined
   */
  mLeft?: keyof CommonSizesProps | number

  /**
   * margin right
   * @default undefined
   */
  mRight?: keyof CommonSizesProps | number

  /**
   * margin horizontal
   * @default undefined
   */
  mHoz?: keyof CommonSizesProps | number

  /**
   * margin vertical
   * @default undefined
   */
  mVer?: keyof CommonSizesProps | number

  /**
   * padding top
   * @default undefined
   */
  pTop?: keyof CommonSizesProps | number

  /**
   * padding bottom
   * @default undefined
   */
  pBottom?: keyof CommonSizesProps | number

  /**
   * padding left
   * @default undefined
   */
  pLeft?: keyof CommonSizesProps | number

  /**
   * padding right
   * @default undefined
   */
  pRight?: keyof CommonSizesProps | number

  /**
   * padding horizontal
   * @default undefined
   */
  pHoz?: keyof CommonSizesProps | number

  /**
   * padding vertical
   * @default undefined
   */
  pVer?: keyof CommonSizesProps | number

  /**
   * margin
   * @default undefined
   */
  margin?: keyof CommonSizesProps | number

  /**
   * padding
   * @default undefined
   */
  padding?: keyof CommonSizesProps | number

  /**
   * padding
   * @default undefined
   */
  paddingHorizontal?: keyof CommonSizesProps | number

  /**
   * padding
   * @default undefined
   */
  paddingVertical?: keyof CommonSizesProps | number

  /**
   * using background color for block
   * @default undefined
   */
  bgColor?: string

  /**
   * using background color theme for block
   * @default undefined
   */
  bgColorTheme?: keyof ThemeColor

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
   * borderWidth
   * @default undefined
   */
  borderStyle?: 'solid' | 'dotted' | 'dashed'

  /**
   * borderBottomWidth
   * @default undefined
   */
  borderBottomWidth?: number

  /**
   * borderBottomColor
   * @default undefined
   */
  borderBottomColor?: string

  /**
   * borderColor
   * @default undefined
   */
  borderColor?: string

  /**
   * alignItems
   * @default undefined
   */
  alignItems?: AlignItems

  /**
   * alignSelf
   * @default undefined
   */
  alignSelf?: 'auto' | FlexAlignType | undefined

  /**
   * justifyContent
   * @default undefined
   */
  justifyContent?: JustifyContent

  /**
   * Overwrite style for block
   * @default undefined
   */
  styleOverride?: StyleProp<ViewStyle>

  /**
   * set children to center
   * @default undefined
   */
  selfCenter?: boolean

  /**
   * set preset shadow for block
   * @default undefined
   */
  shadow?: boolean

  /**
   * Overwrite shadow style for block
   * @default undefined
   */
  shadowConfig?: object

  /**
   * Config position
   * @default undefined
   */
  position?: Position
}
