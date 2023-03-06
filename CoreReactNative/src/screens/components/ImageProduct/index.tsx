import {StyleSheet, Text, View, FlatList, useWindowDimensions} from 'react-native'
import React, {useState, useCallback} from 'react'
import {Block, Image} from 'shares'

const ImageProduct = ({images}: {images: String[]}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const windowWidth = useWindowDimensions().width
  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0)
    }
    console.log(viewableItems)
  }, [])
  return (
    <Block>
      <FlatList
        data={images}
        renderItem={({item}) => <Image source={{uri: item}} style={[styles.image, {width: windowWidth - 40}]} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <Block row justifyContent="center">
        {images.map((image, index) => (
          <Block
            style={[
              styles.node,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}></Block>
        ))}
      </Block>
    </Block>
  )
}

export default ImageProduct

const styles = StyleSheet.create({
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  node: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
})
