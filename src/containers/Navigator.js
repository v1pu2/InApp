import React, {useState} from 'react';
import BottomTabLayout from './BottomTabLayout';
import {SplashScreen} from './SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import EventDetailScreen from './EventDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
const Navigator = () => {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);

  const Stack = createStackNavigator();

  const HomeStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={BottomTabLayout}
            options={{title: 'Home Page'}}
          />
          <Stack.Screen
            name="Details"
            component={EventDetailScreen}
            options={{title: 'Details Page'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return !visible ? <SplashScreen /> : <HomeStack />;
};

export default Navigator;
