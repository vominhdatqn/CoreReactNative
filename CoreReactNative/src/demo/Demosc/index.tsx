// import {View, Text} from 'react-native'
import {useTheme} from 'contextAPI/ThemeContext'
import React from 'react'
import {Block, Icon, Spacer, Typo, Divider} from 'shares'
import Icons from 'react-native-vector-icons/FontAwesome'
const Demosc = () => {
  const {theme, toggleThemeType, isDarkTheme} = useTheme()
  return (
    <Block block bgColorTheme="bgPrimary" pHoz={24}>
      <Spacer height={60} />
      <Divider height={1} width={'80%'} color={'blue'} />
      <Block row justifyContent="space-between">
        <Typo
          onPress={
            toggleThemeType
            // console.log('click', isDarkTheme)
          }
          preset="body24B"
          text="Portfolio"
          colorTheme="primary"
        />
        <Icon icon={'ic_categories_check_circle'} />
        <Icons name="rocket" size={30} color="#900" />
      </Block>
      <Spacer height={32} />
      <Block bgColor="red" height={120} borderRadius={10} padding={24}>
        <Block row justifyContent="space-between">
          <Typo text="$2443222" preset="body24B" colorTheme="primary"></Typo>
          <Icon icon={'ic_check_square'} size={'medium'}></Icon>
        </Block>
      </Block>
    </Block>
  )
}

export default Demosc
