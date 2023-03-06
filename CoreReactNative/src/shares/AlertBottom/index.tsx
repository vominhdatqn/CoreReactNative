import React, {useEffect, useImperativeHandle, useMemo, useState} from 'react'
import {StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import isEqual from 'react-fast-compare'
import {isEmpty, isFunction} from 'lodash'
import {Icon, Block, Typo, Button, Spacer, Modal} from 'shares'
import {useAsyncState} from 'hooks'
import {AlertBottomProps} from './types'
import {SpacingDefault} from 'themes/spacing'
import colors from 'themes/colors'

const AlertBottomComponent = React.forwardRef((props, ref) => {
  // states
  const [opened, setOpened] = useState(false)
  const [args, setArgs] = useAsyncState<AlertBottomProps>({})
  const {
    status,
    showIcon = true,
    title,
    content,
    subContent,
    buttons = [],
    horizontal,
    showButton = true,
    showSpacer = true,
    showChatSupport = true,
    improvisationIcon,
    onCustomXPress,
    onCloseButton,
    textAlighTitle = 'center',
    onPressBack,
    showIconClose = true,
    dismiss = false,
  } = args
  // provide refs
  useImperativeHandle(
    ref,
    () => ({
      onShow: ({
        title,
        content,
        subContent,
        status,
        showIcon,
        buttons,
        showButton,
        showSpacer,
        showChatSupport,
        horizontal,
        improvisationIcon,
        onCustomXPress,
        onCloseButton,
        textAlighTitle,
        onPressBack,
        showIconClose,
        dismiss,
      }: AlertBottomProps) => {
        setArgs(
          {
            title,
            content,
            subContent,
            status,
            showIcon,
            buttons,
            showButton,
            showSpacer,
            showChatSupport,
            horizontal,
            improvisationIcon,
            onCustomXPress,
            onCloseButton,
            textAlighTitle,
            onPressBack,
            showIconClose,
            dismiss,
          },
          () => {
            handleOpenedMode()
          },
        )
      },
      onClose: () => {
        handleClosedMode()
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  // hooks
  const insets = useSafeAreaInsets()

  const handleOpenedMode = () => {
    setOpened(true)
  }

  const handleClosedMode = () => {
    setOpened(false)
  }

  const handleCustom = () => {
    onCustomXPress?.()
    setOpened(false)
  }

  const getIcons = (iconType?: AlertBottomProps['status']) => {
    switch (iconType) {
      case 'success':
        return <Icon icon="ic_success_alert" size={80} />
      case 'fail':
        return <Icon icon="ic_fail_alert" size={80} />
      case 'warning':
        return <Icon icon="ic_warning_alert" size={80} />
      case 'info':
        return <Icon icon="ic_info_alert" size={80} />
      default:
        return
    }
  }

  const _onPressSubContent = () => {
    handleClosedMode()
    subContent?.onPress?.()
  }

  const contentElement = () => {
    if (React.isValidElement(content)) {
      return content
    }

    if (isEmpty(content)) return

    return (
      <Block mHoz={SpacingDefault.medium}>
        <Spacer height="small" />
        <Typo textAlign="center" colorTheme="secondaryText3" preset="body14">
          {content}
          <Typo
            color={colors.teal}
            {...subContent?.options}
            onPress={subContent?.options?.onPress ? _onPressSubContent : undefined}
          />
        </Typo>
      </Block>
    )
  }

  const titleElement = () => {
    if (React.isValidElement(title)) {
      return title
    }

    if (isEmpty(title)) return

    return (
      <Block mHoz={SpacingDefault.normal}>
        <Spacer height="medium" />
        <Typo textAlign={textAlighTitle} colorTheme="txtTabbarNofi" preset="heading">
          {title}
        </Typo>
      </Block>
    )
  }

  const renderIcons = useMemo(() => {
    if (showIcon && status) {
      return (
        <Block center mTop={SpacingDefault.medium}>
          {improvisationIcon ? <Icon icon={improvisationIcon} size={80} /> : getIcons(status)}
        </Block>
      )
    }
    return null
  }, [status, showIcon, improvisationIcon])

  const renderButtons = () => {
    let buttonElement

    if (!buttons?.length || buttons?.length === 1) {
      const {text, type = 'primary', onPress, buttonOptions, onPressOverwrite} = buttons[0] || {}

      const handleClickBtn = () => {
        if (isFunction(onPressOverwrite)) return onPressOverwrite()
        onPress?.()
        handleClosedMode()
      }

      buttonElement = (
        <>
          <Button text={text || 'OK'} preset={type} onPress={handleClickBtn} {...buttonOptions} />
          <Spacer height="normal" />
        </>
      )
    }

    if (buttons?.length === 2) {
      const {
        text: firstTextBtn,
        type: firstTypeBtn = 'primary',
        onPress: firstOnPressBtn,
        buttonOptions: firstButtonOptions,
      } = buttons[0]
      const {
        text: secondTextBtn,
        type: secondTypeBtn = 'disabled',
        onPress: secondOnPressBtn,
        buttonOptions: secondButtonOptions,
      } = buttons[1]

      const handleClickFirstBtn = () => {
        firstOnPressBtn?.()
        handleClosedMode()
      }

      const handleClickSecondBtn = () => {
        secondOnPressBtn?.()
        handleClosedMode()
      }

      buttonElement = (
        <Block row={horizontal}>
          <Block block={horizontal}>
            <Button text={firstTextBtn} preset={firstTypeBtn} onPress={handleClickFirstBtn} {...firstButtonOptions} />
          </Block>
          <Spacer height={!horizontal ? 'small' : 'none'} width={horizontal ? 'small' : 'none'} />
          <Block block={horizontal}>
            <Button
              text={secondTextBtn}
              preset={secondTypeBtn}
              onPress={handleClickSecondBtn}
              textColorTheme={secondTypeBtn === 'disabled' ? 'secondaryText3' : 'txtBtnPrimary'}
              {...secondButtonOptions}
            />
          </Block>
          <Spacer height="small" />
        </Block>
      )
    }
    if (buttons?.length >= 3) {
      buttonElement = buttons.map((button, index) => {
        const {text, type = 'primary', onPress, buttonOptions} = button

        const handleClickBtn = () => {
          onPress?.()
          handleClosedMode()
        }

        return (
          <Block key={index}>
            <Spacer height="small" />
            <Button text={text} preset={type} onPress={handleClickBtn} {...buttonOptions} />
          </Block>
        )
      })
    }

    return (
      <>
        {showButton ? buttonElement : null}
        {/* {showChatSupport && status === 'fail' ? (
          <>
            <Button preset="flat" textColor={colors?.teal} tx="account.chat_support" onPress={handleChatWithSupport} />
            <Spacer height="small" />
          </>
        ) : null} */}
      </>
    )
  }
  const handleChatWithSupport = () => {
    handleClosedMode()
    // const chatSupportTimeout = setTimeout(() => {
    //   ChatSupport.open()
    // }, 500)

    // return () => {
    //   clearTimeout(chatSupportTimeout)
    // }
  }

  const handleCloseButton = () => {
    onCloseButton?.()
    handleClosedMode()
  }

  const handleBackdropPress = () => {
    if (dismiss) return
    handleClosedMode()
  }

  const renderIconBack = () => {
    if (!onPressBack) return null
    return (
      <Button onPress={onPressBack}>
        <Block block>
          <Icon icon="ic_arrow_back" size="medium" colorTheme="primary" />
        </Block>
      </Button>
    )
  }

  const renderIconClose = () => {
    if (!showIconClose) return
    return (
      <Button onPress={onCustomXPress ? handleCustom : handleCloseButton}>
        <Block block justifyContent="flex-end" alignItems="flex-end">
          <Icon icon="ic_close" size="medium" colorTheme="primary" />
        </Block>
      </Button>
    )
  }

  const renderHeader = () => {
    const spacingTop = onPressBack || showIconClose ? <Spacer height="mediumPlush" /> : null
    return (
      <>
        {spacingTop}
        <Block block row alignCenter pHoz="normal">
          {renderIconBack()}
          {renderIconClose()}
        </Block>
      </>
    )
  }

  // effects
  useEffect(() => setOpened(opened), [opened])

  return (
    <Modal
      backdropOpacity={1}
      animatedInDuration={300}
      animatedOutDuration={300}
      onBackdropPress={handleBackdropPress}
      hasGesture={false}
      animatedIn={'slideInUp'}
      animatedOut={'slideOutDown'}
      style={styles.container}
      isVisible={opened}>
      <Block bgColorTheme="bg5" pBottom={insets.bottom || 16}>
        {renderHeader()}
        <Spacer height="medium" />
        <Block>
          {renderIcons}
          {titleElement()}
          {contentElement()}
        </Block>
        {showSpacer && <Spacer height={SpacingDefault.medium} />}
        <Block mHoz={SpacingDefault.medium}>{renderButtons()}</Block>
        <Spacer height="normal" />
      </Block>
    </Modal>
  )
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
})

type AlertBottomType = {
  onShow: (data: AlertBottomProps) => void
  onClose: () => void
}

export const alertBottomRef = React.createRef<AlertBottomType>()

export default React.memo(() => <AlertBottomComponent ref={alertBottomRef} />, isEqual)

export const alertBottom = ({
  title,
  content,
  onCustomXPress,
  subContent,
  status,
  showIcon,
  buttons,
  showButton,
  showChatSupport,
  horizontal,
  improvisationIcon,
  onCloseButton,
  textAlighTitle,
  onPressBack,
  showIconClose,
  showSpacer,
  dismiss,
}: AlertBottomProps) => {
  alertBottomRef.current?.onShow({
    title,
    status,
    showIcon,
    content,
    subContent,
    buttons,
    showButton,
    showChatSupport,
    horizontal,
    improvisationIcon,
    onCustomXPress,
    onCloseButton,
    textAlighTitle,
    onPressBack,
    showIconClose,
    showSpacer,
    dismiss,
  })
}

export const closeAlertBottomNami = () => {
  alertBottomRef.current?.onClose()
}

export type {AlertBottomProps}
