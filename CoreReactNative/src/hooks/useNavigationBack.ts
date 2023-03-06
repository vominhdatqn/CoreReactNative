import {StackActions, useNavigation} from '@react-navigation/core'
import {useCallback} from 'react'

export const useNavigationBackAction = (count = 1): (() => void) => {
  const navigation = useNavigation()

  const goBack = useCallback(() => {
    const popAction = StackActions.pop(count)
    navigation.dispatch(popAction)
  }, [count, navigation])

  return goBack
}
