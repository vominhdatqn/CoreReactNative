import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import isEqual from 'react-fast-compare'
import {Keyboard} from 'react-native'

import {useDismissKeyboard} from 'hooks'
import {Portal} from '../Portal'

import {ModalProps} from './types'
import {ModalContent} from './modal-content'

const ModalComponent: React.FC<ModalProps> = ({isVisible = false, ...restProps}) => {
  // refs
  const modalContent = useRef<ModalContent>(null)
  // state
  const [visible, setVisible] = useState(isVisible)

  // memoized
  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  // hooks
  useDismissKeyboard(visible)

  // effects
  useEffect(() => {
    if (isVisible) return setVisible(true)
    Keyboard.dismiss()
    modalContent.current?.dismiss()
  }, [isVisible])

  const renderModal = () => {
    if (!visible) return null
    return <ModalContent ref={modalContent} onSetClose={closeModal} {...restProps} />
  }

  return <Portal hostName={'AppModal'}>{renderModal()}</Portal>
}

export default memo(ModalComponent, isEqual)
