import React from 'react'
// @ts-ignore
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
// import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {SnackBar, PortalProvider, PortalHost, AlertBottom} from 'shares'
import {store, persistor} from 'stores'
import '../ignoreWarnings'
import './i18n'
import {ThemeContextProvider} from './contextAPI/ThemeContext'
import InnerApp from './InnerApp'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeContextProvider>
            <PortalProvider>
              <SnackBar />
              <AlertBottom />
              <PortalHost name={'AppModal'} />
              <InnerApp />
            </PortalProvider>
          </ThemeContextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
