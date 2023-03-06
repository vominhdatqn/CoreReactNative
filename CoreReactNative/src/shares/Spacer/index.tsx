import React, {memo, useMemo} from 'react'
import {View} from 'react-native'
import equals from 'react-fast-compare'
import {isNumber} from 'lodash'
import {scaleSize} from 'utils'
import {CommonSizes} from 'shares/GlobalStyles/commonSizes'
import {SpacerProps} from './types'

const SpacerComponent: React.FC<SpacerProps> = ({height = 0, width = 0}) => {
  const widthChecker = isNumber(width) ? width : CommonSizes?.[width]
  const heightChecker = isNumber(height) ? height : CommonSizes?.[height]
  // style
  const actualStyle = useMemo(
    () => ({
      width: scaleSize(widthChecker),
      height: heightChecker,
    }),
    [widthChecker, heightChecker],
  )

  return <View style={actualStyle} />
}
export default memo(SpacerComponent, equals)
