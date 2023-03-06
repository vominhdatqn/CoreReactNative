/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {SetStateAction, useCallback, useEffect, useRef, useState} from 'react'
import {BackHandler, Keyboard, Platform} from 'react-native'

function useAsyncState<T>(
  initialValue: T,
): [T, (newValue: SetStateAction<T>, callback?: (newState: T) => void) => void] {
  const [state, setState] = useState(initialValue)
  const _callback = useRef<(newState: T) => void>()

  const _setState = (newValue: SetStateAction<T>, callback?: (newState: T) => void) => {
    if (callback) {
      _callback.current = callback
    }
    setState(newValue)
  }

  useEffect(() => {
    if (typeof _callback.current === 'function') {
      _callback.current(state)
      _callback.current = undefined
    }
  }, [state])
  return [state, _setState]
}

function useIsKeyboardShown() {
  const [isKeyboardShown, setIsKeyboardShown] = React.useState(false)

  React.useEffect(() => {
    const handleKeyboardShow = () => setIsKeyboardShown(true)
    const handleKeyboardHide = () => setIsKeyboardShown(false)

    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', handleKeyboardShow)
      Keyboard.addListener('keyboardWillHide', handleKeyboardHide)
    } else {
      Keyboard.addListener('keyboardDidShow', handleKeyboardShow)
      Keyboard.addListener('keyboardDidHide', handleKeyboardHide)
    }

    return () => {
      if (Platform.OS === 'ios') {
        ;(Keyboard as any).removeListener('keyboardWillShow', handleKeyboardShow)
        ;(Keyboard as any).removeListener('keyboardWillHide', handleKeyboardHide)
      } else {
        ;(Keyboard as any).removeListener('keyboardDidShow', handleKeyboardShow)
        ;(Keyboard as any).removeListener('keyboardDidHide', handleKeyboardHide)
      }
    }
  }, [])

  return isKeyboardShown
}

function usePrevious<T = any>(value: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function useDismissKeyboard(isHide: boolean) {
  useEffect(() => {
    if (isHide) {
      Keyboard.dismiss()
    }
  }, [isHide])
}

function useDisableBackHandler(disabled: boolean, callback?: () => void) {
  // function
  const onBackPress = useCallback(() => {
    callback?.()
    return true
  }, [callback])

  useEffect(() => {
    if (disabled) {
      BackHandler.addEventListener('hardwareBackPress', onBackPress)
    } else {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  }, [disabled, onBackPress])
}

export {useAsyncState, useIsKeyboardShown, usePrevious, useDismissKeyboard, useDisableBackHandler}
