import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/HomeScreen'
import ProductScreen from 'screens/ProductScreen'
const MainStack = createNativeStackNavigator()

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  )
}
