import {StyleSheet} from 'react-native'

export const enhance = <T>(arrStyle: Array<T>) => {
  return StyleSheet.flatten<T>(arrStyle)
}

export const propsToStyle = <T>(arrStyle: Array<T>) => {
  return arrStyle
    .filter(x => x !== undefined && !Object.values(x).some(v => v === undefined))
    .reduce((prev, curr) => {
      return {...prev, ...curr}
    }, {})
}
