import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import {Colors} from '../Themes'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DiscoverScreen from '../Screens/DiscoverScreen';
import BuddiesScreen from '../Screens/BuddiesScreen';
import EventsScreen from '../Screens/EventsScreen';
import ProfileScreen from '../Screens/MyProfileScreen';
import PeopleProfileScreen from '../Screens/PeopleProfileScreen';
import FilterScreen from '../Screens/FilterScreen';
import MessagingScreen from '../Screens/MessagingScreen';
import SchedulingScreen from '../Screens/SchedulingScreen';
import SingleEventScreen from '../Screens/SingleEventScreen';
import EventFilterScreen from '../Screens/EventFilterScreen';
import * as Font from 'expo-font';

const DiscoverStack = createStackNavigator({
  Discover: {screen: DiscoverScreen},
  Filter: {screen: FilterScreen,
    navigationOptions: () => ({
      headerTintColor: Colors.orange,
    }),
  },
  
  PeopleProfile: {screen: PeopleProfileScreen,
    navigationOptions: () => ({
      headerTintColor: Colors.orange,
    }),      
  },
},
{
  mode: 'modal',
  headerBackTitleVisible: false,
  headerMode: 'float',
  initialRouteName: 'Discover'
})
const BuddiesStack = createStackNavigator({
    Buddies: {screen: BuddiesScreen},
    Messaging: {screen: MessagingScreen,
        navigationOptions: () => ({
          headerTintColor: Colors.orange,
        }), 
      },
      Scheduling: {screen: SchedulingScreen,
          navigationOptions: () => ({
            headerTintColor: Colors.orange,
          }), 
        }
  },
  {
    mode: 'modal',
    headerBackTitleVisible: false,
    headerMode: 'float',
    initialRouteName: 'Buddies'
  })
  const EventsStack = createStackNavigator({
    Events: {screen: EventsScreen},
    EventFilter: {screen: EventFilterScreen,
      navigationOptions: () => ({
        headerTintColor: Colors.orange,
      }),
    },
    SingleEvent: {screen: SingleEventScreen,
      navigationOptions: () => ({
        headerTintColor: Colors.orange,
      }),      
    },
  },
  {
    mode: 'modal',
    headerBackTitleVisible: false,
    headerMode: 'float',
    initialRouteName: 'Events'
  })
  const ProfileStack = createStackNavigator({
    Profile: {screen: ProfileScreen},
  },
  {
    headerMode: 'float',
    initialRouteName: 'Profile'
  })

DiscoverStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Discover',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome5 name="eye"
        size={35}
        color={tintColor} />
    ),
  };
};
BuddiesStack.navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Buddies',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="user-friends"
          size={30}
          color={tintColor} />
      ),
    };
  };
  EventsStack.navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="calendar-star"
          size={37}
          color={tintColor} />
      ),
    };
  };
  ProfileStack.navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="user-circle"
          size={32}
          color={tintColor} />
      ),
    };
  };
const TabNav = createBottomTabNavigator({
  DiscoverScreen: { screen: DiscoverStack },
  BuddiesScreen: { screen: BuddiesStack },
  EventsScreen: { screen: EventsStack },
  ProfileScreen: { screen: ProfileStack },
}, {
  initialRouteName: 'DiscoverScreen',
  tabBarOptions: {
    activeTintColor: Colors.orange,
    showLabel: false,
    justifyContent: 'center'
  },
})

const AppContainer = createAppContainer(TabNav);

export default AppContainer