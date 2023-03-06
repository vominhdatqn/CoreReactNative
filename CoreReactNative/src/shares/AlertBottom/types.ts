import React from 'react'

import {IconTypes} from '../../assets/images'
import {ButtonPresetNames} from '../../shares/Button/presets'
import {ButtonProps} from '../../shares/Button/types'
import {TypoProps, TextAlign} from '../../shares/Typo/types'

type StringAndElementType = string | React.ReactElement

interface AlertButtonProps {
  text?: string
  type?: ButtonPresetNames
  onPress?: () => void
  buttonOptions?: ButtonProps
  onPressOverwrite?: () => void
  loading?: boolean
}

interface SubContentProps {
  text?: StringAndElementType
  options?: TypoProps
  onPress?: () => void
  children?: any
}

interface AlertBottomProps {
  title?: StringAndElementType
  content?: StringAndElementType
  subContent?: SubContentProps
  textAlighTitle?: TextAlign
  status?: 'success' | 'warning' | 'fail' | 'info' | React.ReactElement
  showIcon?: boolean
  buttons?: AlertButtonProps[]
  showButton?: boolean
  showChatSupport?: boolean
  horizontal?: boolean
  loading?: boolean
  showIconClose?: boolean
  noNeedSupport?: boolean
  dismiss?: boolean
  improvisationIcon?: IconTypes
  onCustomXPress?: () => void
  onCloseButton?: () => void
  onPressBack?: () => void
  showSpacer?: boolean
}

export type {AlertBottomProps, AlertButtonProps, SubContentProps}
