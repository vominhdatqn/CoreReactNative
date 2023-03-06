import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from 'stores'
import {createActionSet} from 'utils/actionsHelper'

type UserType = {
  name: string
  email: string
  phone: string
}

interface UserState {
  user: UserType
}
// Define the initial state using that type
const initialState: UserState = {
  user: {
    name: '',
    email: '',
    phone: '',
  },
}
// const UserInfo = createActionSet('@User/GET_USER_INFO');

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getUserInfo: (state, {payload}: PayloadAction<UserType>) => {
      state.user = payload
    },
  },
})

export const {getUserInfo} = userSlice.actions

export type {UserType}

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.user
