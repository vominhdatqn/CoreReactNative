import React from 'react'
import {MainStackScreen} from 'routes/MainStack'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const InnerApp = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainStackScreen />
    </GestureHandlerRootView>
  )
}

export default InnerApp
