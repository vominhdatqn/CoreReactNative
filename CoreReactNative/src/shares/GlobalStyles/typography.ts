import {Platform} from 'react-native'
import {FontFamily as FontType} from './types'

export const FontDefault: FontType = {
  PrimaryRegular: Platform.select({
    ios: 'SF Pro Text Regular',
    android: 'Manrope-Regular',
  }) as string,
  PrimaryBold: Platform.select({
    ios: 'SF Pro Text Bold',
    android: 'Manrope-Bold',
  }) as string,
  PrimarySemibold: Platform.select({
    ios: 'SF Pro Text Semibold',
    android: 'Manrope-SemiBold',
  }) as string,
}

export type FontFamily = keyof typeof FontDefault
