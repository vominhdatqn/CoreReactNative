import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {MainStackScreen} from './MainStack';

const RootRoutes = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => console.log('New state is', state)}>
      <MainStackScreen />
    </NavigationContainer>
  );
};
export default RootRoutes;
