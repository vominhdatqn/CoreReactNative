import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Button, Typo} from 'shares'

interface ButtonProps {
  text: string
  onPress: () => void
  containerStyles?: object;
}

const ButtonMin = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Button onPress={onPress} style={[styles.button, containerStyles]}>
      <Typo fontSize="FONT_16">{text}</Typo>
    </Button>
  )
}

export default ButtonMin

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
})
