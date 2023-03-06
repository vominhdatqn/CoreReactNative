import {StyleSheet} from 'react-native'
import {ThemeColor} from 'shares/GlobalStyles/types'

type DividerSizeProps = '100%' | '90%' | '80%' | number | typeof StyleSheet.hairlineWidth

export interface DividerProps {
  /**
   * Background for divider
   * @default #bbb
   */
  color?: string

  /**
   * Height of divider
   * @default 1
   */
  height?: DividerSizeProps

  /**
   * Height of divider
   * @default 1
   */
  width?: DividerSizeProps

  /**
   * using color theme for divider
   * @default undefined
   */
  colorTheme?: keyof ThemeColor
}
