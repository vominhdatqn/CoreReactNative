import {View, StyleSheet} from 'react-native'
import React from 'react'
import ProducItem from '../components/ProductItem'
import {Block} from 'shares'
import products from '../data/products'
import {FlatList} from 'react-native'
const HomeScreen = () => {
  return (
    <Block>
      <FlatList
        data={products}
        renderItem={({item}) => <ProducItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  )
}

export default HomeScreen
