import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const MainStack = createNativeStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
