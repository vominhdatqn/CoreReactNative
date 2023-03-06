import {StyleSheet} from 'react-native'
import React from 'react'
import {Block, Image, Typo} from 'shares'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {RotationGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture'

interface ProductItemProps {
  item: {
    id: string
    title: string
    image: string
    avgRating: number
    ratings: number
    price: number
    oldPrice?: number
  }
}
const ProductItem = ({item}: ProductItemProps) => {
  return (
    <Block row borderWidth={1} borderColor="#d1d1d1" borderRadius={10} bgColor="#fff" mVer={5}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="contain"
        height={150}
        borderRadius={10}
        style={{flex: 2}}></Image>
      <Block padding={10} width="100%" flex={3}>
        <Typo numberOfLines={3} fontWeight="bold" fontSize="FONT_18">
          {item.title}
        </Typo>
        <Block row alignItems="center" mVer={5}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={{margin: 2}}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Typo>{item.ratings}</Typo>
        </Block>
        <Block row>
          <Typo fontWeight="bold" fontSize="FONT_18">
            from ${item.price}
          </Typo>
          <Typo fontSize="FONT_12" fontWeight="normal" style={{textDecorationLine: 'line-through'}}>
            ${item.oldPrice}
          </Typo>
        </Block>
      </Block>
    </Block>
  )
}

export default ProductItem
