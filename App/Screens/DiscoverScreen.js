import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { material } from 'react-native-typography';
import DiscoverList from '../Components/DiscoverPage/DiscoverList'
import { Metrics, Colors, Images } from '../Themes';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import 'localstorage-polyfill'
import test from '../Data/Test.js';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class DiscoverScreen extends React.Component {
  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener("willFocus", () => {
        console.log("WILL FOCUS");
        this.forceUpdate();
      }),
    ];
  }

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
          <Text style={styles.header}> DISCOVER </Text>
        </SafeAreaView>
      )
    };
  };

  onProfileRequested = (username_val) => {
    console.log("Requested: " + username_val);
    this.props.navigation.navigate('PeopleProfile', { username: username_val });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <DiscoverList onProfileRequested = {this.onProfileRequested}/>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
    fontWeight:'bold',
    //fontFamily: "Gill Sans"
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
  