import {CommonSizesProps} from '../../shares/GlobalStyles/types'

export interface SpacerProps {
  /**
   * Width of size box
   * @default 0
   */
  width?: keyof CommonSizesProps | number

  /**
   * Height of size box
   * @default 0
   */
  height?: keyof CommonSizesProps | number
}
