import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const BottomTabLayout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: Platform?.OS === 'ios' ? 25 : 15,
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
              <HomeSvg color={colors.color2} />
            ) : (
              <HomeSvg color={colors.color7} />
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
              <BottomTicketSvg color={colors.color2} />
            ) : (
              <BottomTicketSvg color={colors.color7} />
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
              <GameSvg color={colors.color2} />
            ) : (
              <GameSvg color={colors.color7} />
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
              <PersonSvg color={colors.color2} />
            ) : (
              <PersonSvg color={colors.color7} />
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
              <SettingSvg color={colors.color2} />
            ) : (
              <SettingSvg color={colors.color7} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabLayout;
