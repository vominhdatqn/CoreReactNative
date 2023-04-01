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
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [quantity, setQuantity] = useState(1)
  return (
    <ScrollView style={styles.container}>
      <Typo>{product?.title}</Typo>
      <ImageProduct images={product?.images} />
      <OptionPicker product={product} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Block row>
        <Typo fontWeight="bold" fontSize="FONT_18">
          from ${product.price}
        </Typo>
        <Typo fontSize="FONT_12" fontWeight="normal" style={{textDecorationLine: 'line-through'}}>
          ${product.oldPrice}
        </Typo>
      </Block>
      <Block mVer={10}>
        <Typo lineHeight={20}>{product?.description}</Typo>
      </Block>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <ButtonMin
        text={'Add to cart'}
        onPress={() => handleAddToCart(quantity, selectedOption)}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <ButtonMin
        text={'Buy now'}
        onPress={() => {
          console.log('checkout')
        }}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
})
export default ProductScreen
