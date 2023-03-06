import React, {memo, useMemo} from 'react'
import {StyleProp, TouchableOpacity} from 'react-native'
import FastImage, {ImageStyle} from 'react-native-fast-image'
import equals from 'react-fast-compare'
import {isNumber, isFunction} from 'lodash'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import images from 'assets/images'
import {useTheme} from 'contextAPI/ThemeContext'
import {enhance} from 'utils/handleStyles'
import {CommonSizes} from 'shares/GlobalStyles/commonSizes'

import {IconProps} from './types'

const SIZE = 24

const IconComponent: React.FC<IconProps> = ({
  size = SIZE,
  icon,
  resizeMode = 'contain',
  onPress,
  color: colorP,
  colorTheme,
  containerStyle,
  width = 0,
  height = 0,
  iconStyle,
  rotate = '0deg',
}) => {
  // hooks
  const {theme} = useTheme()

  const sizeChecker = isNumber(size) ? size : CommonSizes[size]
  const heightChecker = isNumber(height) ? height : CommonSizes[height]
  const widthChecker = isNumber(width) ? width : CommonSizes[width]
  const color = !!colorTheme ? theme.colors?.[colorTheme] : colorP

  // memoized
  const source = useMemo(() => (isNumber(icon) ? icon : images?.[icon]), [icon])

  const style = useMemo<StyleProp<ImageStyle>>(
    () =>
      enhance([
        {
          width: widthChecker || sizeChecker,
          height: heightChecker || sizeChecker,
        },
      ]),
    [sizeChecker, widthChecker, heightChecker],
  )

  return (
    <TouchableOpacity disabled={!isFunction(onPress)} onPress={onPress} style={containerStyle}>
      <FastImage
        style={[style, {transform: [{rotate}]}, iconStyle as StyleProp<ImageStyle>]}
        tintColor={color}
        resizeMode={resizeMode}
        source={source}
      />
    </TouchableOpacity>
  )
}
export default memo(IconComponent, equals)
