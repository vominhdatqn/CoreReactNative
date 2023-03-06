import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {
  configureStore,
  TypedStartListening,
  TypedAddListener,
  ListenerEffectAPI,
  addListener,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {persistStore} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import {persistReducer} from 'redux-persist'
import {userSlice} from './slices/userSlice'

let middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
})

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middleware.push(createDebugger())
}

const userPersistConfig = {
  key: 'userSlice',
  storage: AsyncStorage,
  whitelist: [],
}

const store = configureStore({
  reducer: {
    [userSlice.name]: persistReducer(userPersistConfig, userSlice.reducer),
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
})

const persistor = persistStore(store)

export {store, persistor}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof store.dispatch

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export type AppAddListener = TypedAddListener<RootState, AppDispatch>

export const addAppListener = addListener as AppAddListener

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
