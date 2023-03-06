import React, {ForwardRefRenderFunction, forwardRef, useMemo} from 'react'
import {View, StyleProp, TextStyle} from 'react-native'
import {BlockProps} from './types'
import {useEvent} from 'hooks/useEvent'
import {enhance, propsToStyle} from 'utils/handleStyles'
import {isNumber} from 'lodash'
import GlobalStyles from '../GlobalStyles'
import {CommonSizes} from '../GlobalStyles/commonSizes'
import {useTheme} from 'contextAPI/ThemeContext'

const Block: ForwardRefRenderFunction<View, BlockProps> = (
  {
    block,
    flex,
    bgColor,
    bgColorTheme,
    width,
    height,
    row,
    center,
    alignItems,
    alignCenter,
    justifyCenter,
    justifyContent,
    selfCenter,
    mTop,
    mBottom,
    mLeft,
    mRight,
    margin,
    mHoz,
    mVer,
    pTop,
    pBottom,
    pRight,
    pLeft,
    padding,
    pHoz,
    pVer,
    top,
    bottom,
    left,
    right,
    position,
    pointerEvents,
    borderColor,
    borderWidth,
    borderRadius,
    borderStyle,
    opacity,
    flexGrow,
    flexWrap,
    shadow,
    shadowConfig,
    zIndex,
    overflow,
    borderBottomWidth,
    borderBottomColor,
    alignSelf,
    display,
    children,
    ...others
  },
  ref,
) => {
  const {theme} = useTheme()
  const styleComponent = useMemo(() => {
    return enhance<StyleProp<TextStyle>>([
      block && GlobalStyles.block,
      row && GlobalStyles.row,
      center && GlobalStyles.center,
      alignCenter && GlobalStyles.alignCenter,
      justifyCenter && GlobalStyles.justifyCenter,
      selfCenter && GlobalStyles.selfCenter,
      width ? {width: width} : null,
      height ? {height: height} : null,
      bgColor ? {backgroundColor: bgColor} : null,
      mTop ? {marginTop: isNumber(mTop) ? mTop : CommonSizes[mTop]} : null,
      mBottom ? {marginBottom: isNumber(mBottom) ? mBottom : CommonSizes[mBottom]} : null,
      mLeft ? {marginLeft: isNumber(mLeft) ? mLeft : CommonSizes[mLeft]} : null,
      mRight ? {marginRight: isNumber(mRight) ? mRight : CommonSizes[mRight]} : null,
      mHoz ? {marginHorizontal: isNumber(mHoz) ? mHoz : CommonSizes[mHoz]} : null,
      mVer ? {marginVertical: isNumber(mVer) ? mVer : CommonSizes[mVer]} : null,
      pHoz ? {paddingHorizontal: isNumber(pHoz) ? pHoz : CommonSizes[pHoz]} : null,
      pVer ? {paddingVertical: pVer} : null,
      opacity ? {opacity} : null,
      bgColorTheme && {
        //@ts-ignore
        backgroundColor: theme.colors?.[bgColorTheme],
      },
      pBottom
        ? {
            paddingBottom: isNumber(pBottom) ? pBottom : CommonSizes[pBottom],
          }
        : null,
      pLeft
        ? {
            paddingLeft: isNumber(pLeft) ? pLeft : CommonSizes[pLeft],
          }
        : null,
      pRight
        ? {
            paddingRight: isNumber(pRight) ? pRight : CommonSizes[pRight],
          }
        : null,
      pTop
        ? {
            paddingTop: isNumber(pTop) ? pTop : CommonSizes[pTop],
          }
        : null,
      padding
        ? {
            padding: isNumber(padding) ? padding : CommonSizes[padding],
          }
        : null,
      borderRadius
        ? {
            borderRadius: isNumber(borderRadius) ? borderRadius : CommonSizes[borderRadius],
          }
        : null,
      bgColorTheme && {
        //@ts-ignore
        backgroundColor: theme.colors?.[bgColorTheme],
      },
      shadow && {...GlobalStyles.shadow, ...shadowConfig},
      propsToStyle([
        {margin},
        {justifyContent},
        {alignItems},
        {flex},
        {position},
        {left},
        {right},
        {bottom},
        {top},
        {zIndex},
        {overflow},
        {opacity},
        {flexWrap},
        {borderBottomWidth},
        {borderBottomColor},
        {flexGrow},
        {alignSelf},
        {display},
        {borderColor},
        {borderStyle},
        {borderWidth},
      ]),
    ])
  }, [
    block,
    flex,
    bgColor,
    bgColorTheme,
    theme,
    width,
    height,
    row,
    center,
    alignItems,
    alignCenter,
    justifyCenter,
    justifyContent,
    selfCenter,
    mTop,
    mBottom,
    mLeft,
    mRight,
    margin,
    mHoz,
    mVer,
    pTop,
    pBottom,
    pRight,
    pLeft,
    padding,
    pHoz,
    pVer,
    top,
    bottom,
    left,
    right,
    position,
    pointerEvents,
    borderColor,
    borderWidth,
    borderRadius,
    borderStyle,
    opacity,
    flexGrow,
    flexWrap,
    shadow,
    shadowConfig,
    theme,
  ])
  return (
    <View ref={ref} style={[styleComponent]} {...others}>
      {children}
    </View>
  )
}

export default forwardRef<View, BlockProps>(Block)
