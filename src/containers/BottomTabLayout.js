import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import TicketScreen from './TicketScreen';
import HomeSvg from '../assets/svgs/HomeSvg';
import BottomTicketSvg from '../assets/svgs/BottomTicketSvg';
import GameSvg from '../assets/svgs/GameSvg';
import GameScreen from './GameScreen';
import PersonScreen from './PersonScreen';
import SettingScreen from './SettingScreen';
import SettingSvg from '../assets/svgs/SettingSvg';
import PersonSvg from '../assets/svgs/PersonSvg';

const Tab = createBottomTabNavigator();
const BottomTabLayout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            height: 50,
            // paddingHorizontal: 5,
            // paddingTop: 0,
            // borderTopWidth: 0,
            backgroundColor: 'white',
            position: 'absolute',
            overflow: 'hidden',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <HomeSvg color={'#7555CF'} />
              ) : (
                <HomeSvg color={'#475464'} />
              ),
          }}
        />
        <Tab.Screen
          name="Ticket"
          component={TicketScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <BottomTicketSvg color={'#7555CF'} />
              ) : (
                <BottomTicketSvg color={'#475464'} />
              ),
          }}
        />
        <Tab.Screen
          name="Game"
          component={GameScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <GameSvg color={'#7555CF'} />
              ) : (
                <GameSvg color={'#475464'} />
              ),
          }}
        />
        <Tab.Screen
          name="Person"
          component={PersonScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <PersonSvg color={'#7555CF'} />
              ) : (
                <PersonSvg color={'#475464'} />
              ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <SettingSvg color={'#7555CF'} />
              ) : (
                <SettingSvg color={'#475464'} />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomTabLayout;
