import React, {useContext, useCallback, useMemo, useState} from 'react'
import {useColorScheme} from 'react-native'
import {useFlipper} from '@react-navigation/devtools'
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native'
import {ColorsLight} from './ColorsLight'
import {ColorsDark} from './ColorsDark'
import {ThemeColor} from '../../shares/GlobalStyles/types'

export type ThemeType = 'dark' | 'light'

export type AppTheme = {
  dark: boolean
  colors: ThemeColor
}
export type Theme = AppTheme

const lightTheme: Theme = {
  dark: ColorsLight.dark,
  colors: {
    ...ColorsLight.colors,
  },
}

const darkTheme: Theme = {
  dark: ColorsDark.dark,
  colors: {
    ...ColorsDark.colors,
  },
}

export interface ThemeContextValue {
  theme: Theme
  themeType: ThemeType
  isDarkTheme: boolean
  toggleThemeType: () => void
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>
}
export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  themeType: 'light',
  isDarkTheme: false,
  setThemeType: () => {},
  toggleThemeType: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export interface ThemeContextProviderProps {
  children: React.ReactNode
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)
  const colorScheme = useColorScheme()
  const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light')

  const toggleThemeType = useCallback(() => {
    setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const isDarkTheme = useMemo(() => themeType === 'dark', [themeType])

  const theme = useMemo(() => (isDarkTheme ? darkTheme : lightTheme), [isDarkTheme])

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeContext.Provider
        value={{
          theme,
          themeType,
          isDarkTheme,
          setThemeType,
          toggleThemeType,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  )
}
