import images from 'assets/images'
import {isString} from 'lodash'
import React, {memo, useMemo} from 'react'
import equals from 'react-fast-compare'
import {StyleProp} from 'react-native'
import FastImage, {ImageStyle} from 'react-native-fast-image'
import {CommonSizes} from 'shares/GlobalStyles/commonSizes'
import {scaleSize} from 'utils'
import {enhance} from 'utils/handleStyles'
import {ImageBaseProps} from './types'

const ImageComponent = (props: ImageBaseProps) => {
  const {
    source,
    resizeMode = FastImage.resizeMode.contain,
    height = 0,
    width = 0,
    size = CommonSizes.large,
    borderWidth,
    borderRadius = CommonSizes.none,
    borderColor,
    color,

    style: imageRestyle,
  } = props

  const sizeChecker = typeof size === 'number' ? size : CommonSizes[size]
  const widthChecker = typeof width === 'number' ? width : CommonSizes[width]
  const heightChecker = typeof height === 'number' ? height : CommonSizes[height]
  const borderRadiusChecker = typeof borderRadius === 'number' ? borderRadius : CommonSizes[borderRadius]

  const _style = useMemo<StyleProp<ImageStyle>>(
    () =>
      enhance([
        {
          width: scaleSize(widthChecker || sizeChecker),
          height: heightChecker || sizeChecker,
          borderWidth,
          borderRadius: borderRadiusChecker,
          borderColor,
        },
      ]),
    [sizeChecker, borderWidth, borderRadiusChecker, borderColor, heightChecker, widthChecker],
  )

  return (
    <FastImage
      {...props}
      source={isString(source) ? images?.[source] : source}
      resizeMode={resizeMode}
      style={[_style, imageRestyle]}
      tintColor={color}
    />
  )
}

export default memo(ImageComponent, equals)
