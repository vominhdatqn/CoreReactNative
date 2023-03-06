import {IconTypes} from 'assets/images'
import React, {createRef, forwardRef, memo, useCallback, useImperativeHandle, useState} from 'react'
import isEqual from 'react-fast-compare'
import {StyleSheet, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {DURATION_HIDE, INITIAL_SNACKBAR} from './Constants'
import {SnackBarItem} from './SnackBarItem'
import {useStyles} from './Styles'
import {Item, PositionMessage, SnackBarProps, TypeMessage} from './types'
import {useTheme} from '../../contextAPI/ThemeContext'

const SnackBarComponent = forwardRef((props: SnackBarProps, ref) => {
  //style
  const {theme} = useTheme()
  const styles = useStyles(theme)

  useImperativeHandle(
    ref,
    () => ({
      show: ({
        interval = DURATION_HIDE,
        msg,
        type = 'success',
        position = 'top',
        isIncludedBottomHeight = true,
        icon,
      }: {
        msg: string
        interval: number
        type: TypeMessage
        position: PositionMessage
        isIncludedBottomHeight: boolean
        icon?: IconTypes | React.ReactElement
      }) => {
        setData(d =>
          d.concat([
            {
              id: new Date().getTime(),
              msg,
              type,
              interval,
              position,
              isIncludedBottomHeight,
              icon,
            },
          ]),
        )
      },
    }),
    [],
  )

  // state
  const [data, setData] = useState<Item[]>([])
  const inset = useSafeAreaInsets()
  // function
  const _onPop = useCallback((item: Item) => {
    setData(d => d.filter(x => x.id !== item.id))
  }, [])

  const _renderItem = useCallback(
    (item: Item) => {
      //@ts-ignore
      return <SnackBarItem key={item.id} {...{item, onPop: _onPop}} {...props} />
    },
    [_onPop, props],
  )

  // render
  return (
    <View pointerEvents={'box-none'} style={[StyleSheet.absoluteFillObject, styles.container, {marginTop: inset.top}]}>
      {data.map(_renderItem)}
    </View>
  )
})
type SnackBar = {
  show: (data: {
    msg?: string
    interval?: number
    type?: TypeMessage
    position?: PositionMessage
    isIncludedBottomHeight?: boolean
    icon?: IconTypes | React.ReactElement
  }) => void
}
export const snackBarRef = createRef<SnackBar>()

export default memo((props: SnackBarProps) => <SnackBarComponent ref={snackBarRef} {...props} />, isEqual)

export const showSnack = ({
  msg,
  interval = INITIAL_SNACKBAR.DURATION,
  type = 'default',
  position = 'top',
  isIncludedBottomHeight = true,
  icon,
}: {
  msg?: string
  interval?: number
  type?: TypeMessage
  position?: PositionMessage
  isIncludedBottomHeight?: boolean
  icon?: IconTypes | React.ReactElement
}) => {
  snackBarRef.current?.show({msg, interval, type, position, isIncludedBottomHeight, icon})
}
