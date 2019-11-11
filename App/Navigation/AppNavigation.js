import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DiscoverScreen from '../Screens/DiscoverScreen'
import BuddiesScreen from '../Screens/BuddiesScreen'
import EventsScreen from '../Screens/EventsScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import BuddyProfileScreen from '../Screens/BuddyProfileScreen'

const DiscoverStack = createStackNavigator({
  Discover: {screen: DiscoverScreen},
  BuddyProfile: {screen: BuddyProfileScreen},
},
{
  headerMode: 'float',
  initialRouteName: 'Discover'
})
const BuddiesStack = createStackNavigator({
    Buddies: {screen: BuddiesScreen},
  },
  {
    headerMode: 'float',
    initialRouteName: 'Buddies'
  })
  const EventsStack = createStackNavigator({
    Events: {screen: EventsScreen},
  },
  {
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
// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  DiscoverScreen: { screen: DiscoverStack },
  BuddiesScreen: { screen: BuddiesStack },
  EventsScreen: { screen: EventsStack },
  ProfileScreen: { screen: ProfileStack },
  //BookmarkScreen:   { screen: BookmarkStack },
}, {
  // Default config for all screens
  initialRouteName: 'DiscoverScreen',
  tabBarOptions: {
    activeTintColor: Colors.orange,
    showLabel: false,
    justifyContent: 'center'
  },
})

const AppContainer = createAppContainer(TabNav);

export default AppContainer