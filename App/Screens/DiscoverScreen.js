import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { material } from 'react-native-typography';
import BuddyList from '../Components/DiscoverPage/BuddyList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../Themes/Images';


export default class DiscoverScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity style={styles.filter}
          onPress = {() => navigation.navigate('Filter')}>
        <Image style= {styles.filterButton}
      source = {Images.filter}/>
    </TouchableOpacity>
      ), 
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}> DISCOVER</Text>
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
    fontSize: 24,
    color: Colors.orange,
  },
  filter: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 15,
  },
  filterButton: {
    height: 25,
    width: 25,
    tintColor: Colors.orange,
  },
});
  