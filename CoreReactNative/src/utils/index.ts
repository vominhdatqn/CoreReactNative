import {Dimensions, Platform} from 'react-native'
import {roundToUp} from 'round-to'

const {width, height} = Dimensions.get('window')
export const DEVICE_WIDTH = width
export const DEVICE_HEIGHT = height
const guidelineBaseWidth = 390
const guidelineBaseHeight = 680

const [shortDimension, longDimension] =
  DEVICE_WIDTH < DEVICE_HEIGHT ? [DEVICE_WIDTH, DEVICE_HEIGHT] : [DEVICE_HEIGHT, DEVICE_WIDTH]
const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size
export const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor

// !Only using scaleSize with horizontal properties
export const scaleSize = (size: number) => roundToUp((DEVICE_WIDTH / guidelineBaseWidth) * size, 2)

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const randomUniqueId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const defaultHitSlop = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5,
}
