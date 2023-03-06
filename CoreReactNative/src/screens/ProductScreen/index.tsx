import {Text, View} from 'react-native'
import React, {useState} from 'react'
import product from '../data/product'
import {Block, Typo} from 'shares'
import ProductItem from 'screens/components/ProductItem'
import ButtonMin from 'screens/components/Button'
import Quantity from 'screens/components/Quantity'
import {Picker} from '@react-native-picker/picker'
import ImageProduct from 'screens/components/ImageProduct'
const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState('')
  // console.log(selectedOption)
  const [quantity, setQuantity] = useState(1)
  return (
    <Block padding={10} bgColor="white">
      <Typo>{product.title}</Typo>
      <ImageProduct images={product.images} />
      <Picker selectedValue={selectedOption} onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      <Block row>
        <Typo fontWeight="bold" fontSize="FONT_18">
          from ${product.price}
        </Typo>
        <Typo fontSize="FONT_12" fontWeight="normal" style={{textDecorationLine: 'line-through'}}>
          ${product.oldPrice}
        </Typo>
      </Block>
      <Block mVer={10}>
        <Typo lineHeight={20}>{product.description}</Typo>
      </Block>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <ButtonMin
        text={'Add to cart'}
        onPress={() => {
          console.warn('Add to cart')
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <ButtonMin
        text={'Buy now'}
        onPress={() => {
          console.warn('Buy now')
        }}
      />
    </Block>
  )
}

export default ProductScreen
