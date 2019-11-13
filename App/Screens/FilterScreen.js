import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { material } from 'react-native-typography';
import BuddyList from '../Components/BuddyList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FilterScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.header}> Filter</Text>
        </SafeAreaView>
      )
    };
  };
  onProfileRequested = (name_val, username_val) => {
    console.log("Requested: " + name_val + username_val);
    this.props.navigation.navigate('BuddyProfile', { name: name_val, username: username_val });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BuddyList onProfileRequested = {this.onProfileRequested}/>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.orange,
  },
  filter: {
    height: 20,
    width: 20,
  }
});
  