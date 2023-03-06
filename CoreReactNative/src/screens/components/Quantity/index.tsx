import {View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import {Block, Typo} from 'shares'

const Quantity = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
  }
  const onPlus = () => {
    setQuantity(quantity + 1)
  }
  return (
    <Block row alignItems="center" borderWidth={1} borderColor="#e3e3e3" width={130} justifyContent="space-between">
      <Pressable onPress={onMinus} style={styles.button}>
        <Typo fontSize="FONT_18">-</Typo>
      </Pressable>
      <Typo color="#007eb9">{quantity}</Typo>
      <Pressable onPress={onPlus} style={styles.button}>
        <Typo fontSize="FONT_18">+</Typo>
      </Pressable>
    </Block>
  )
}

const styles = StyleSheet.create({
  button: {width: 35, height: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d1d1d1'},
})
export default Quantity
