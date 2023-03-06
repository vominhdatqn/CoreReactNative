// import React, {useEffect, useLayoutEffect, useCallback, useState} from 'react'
// import {View, Text} from 'react-native'
// import {useTheme} from '../../contextAPI/ThemeContext'
// import {useAppDispatch} from '../../stores'
// import {getUserInfo, UserType} from '../../stores/slices/userSlice'
// // import {Modal} from '../../shares/Modal'
// import {alertBottom} from 'shares/AlertBottom'
// // import {showSnack} from '../../shares/SnackBar'
// import {showSnack} from 'shares/SnackBar'
// import {Typo, Block, Button, Switch, CheckBox, Icon, Divider} from 'shares'
// import PullToRefresh from 'demo/PullToRefresh'
// import DeleteChat from 'demo/ChatDelete'
// import {useTranslation} from 'react-i18next'
// import Demosc from 'demo/Demosc'

// const Home = () => {
//   const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme()
//   const [checked, setChecked] = useState(false)
//   const dispatch = useAppDispatch()
//   const {t, i18n} = useTranslation()

//   useEffect(() => {
//     const data: UserType = {
//       name: 'dat',
//       phone: '123123',
//       email: 'vominhdat',
//     }
//     dispatch(getUserInfo(data))
//   }, [])
//   const switchLocaleToEn = useCallback(() => {
//     return i18n?.changeLanguage(i18n?.language === 'en' ? 'vn' : 'en')
//   }, [i18n])

//   return (
//     <>
//       <Block block bgColor="pink" justifyCenter>
//         <Typo color="red" tx="common:confirm" onPress={switchLocaleToEn}></Typo>
//         <CheckBox checked={checked} onChange={setChecked} />
//         <Switch checked={checked} onChange={setChecked} />
//         <Button preset="primary" tx="common:confirm" onPress={toggleThemeType}></Button>
//         <Button
//           preset="primary"
//           tx="common:confirm"
//           onPress={() => {
//             alertBottom({
//               title: 'Blabla',
//               status: 'fail',
//             })
//             showSnack({
//               msg: 'huhuhuhuhuh',
//             })
//           }}
//         />
//         <Icon icon="ic_close" size="big" />
//       </Block>

//       <Demosc />
//       {/* <DeleteChat />  */}
//       {/* <PullToRefresh /> */}
//     </>
//   )
// }

// export default Home
