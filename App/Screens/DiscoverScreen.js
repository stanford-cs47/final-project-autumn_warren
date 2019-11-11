import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { material } from 'react-native-typography';
import BuddyList from '../Components/BuddyList'
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';

export default class DiscoverScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}> DISCOVER</Text>
        </SafeAreaView>
      )
    };
  };
  onProfileRequested = (name_val, username_val) => {
    console.log("Requested: " + name_val);
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
    fontSize: 24,
    color: Colors.orange,
  }
});
  