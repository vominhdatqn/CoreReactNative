import React, {memo, useMemo, FC} from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'
import equals from 'react-fast-compare'
import {useTheme} from 'contextAPI/ThemeContext'
import colors from 'themes/colors'
import {DividerProps} from './type'
//duong gach ngang --------------
const DividerComponent: FC<DividerProps> = ({
  height = StyleSheet.hairlineWidth,
  width = '100%',
  color = colors.white,
  colorTheme,
}) => {
  const {theme} = useTheme()

  // memoized
  const divider = useMemo<ViewStyle>(
    () => ({
      width,
      height,
      backgroundColor: colorTheme ? theme.colors?.[colorTheme] : color,
    }),
    [color, height, width, theme, colorTheme],
  )

  return <View style={[divider]} />
}

export default memo(DividerComponent, equals)
