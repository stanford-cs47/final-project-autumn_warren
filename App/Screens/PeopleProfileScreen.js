import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import PeopleData from '../Data/PeopleList';
import Profile from '../Components/Profile';

export default class BuddyProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
   // const name = params.name;
    return {
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
         
        </View>
      )
    };
  };
  state = {
    content: {},
    loading: true,
    user: "",
  }
  componentDidMount() {
    if(!this.props.navigation) return;
    const params = this.props.navigation.state.params || {};
    console.log(params);
    const username = params.username;
    console.log("Username1: " + params.username);
    console.log("Username2: " + username);
    this.setState({user: username});
    this.loadUserContent(username);
  }
  findBuddy(username) {
    console.log(PeopleData.people);
    console.log("Username3: " + username);
    console.log(PeopleData.people[username]);
    return PeopleData.people[username];
  } 
  loadUserContent = async (username) => {
    this.setState({loading: true});
    await this.sleep(500); 
    console.log("Username4: " + username);
    const result = this.findBuddy(username);
    console.log(result);
    this.setState({content: result});
    this.setState({loading: false});
  }
  render() {
    return (
      <View style={styles.container}>
        {this.getProfileContent()}
      </View>
    );
  }
  getProfileContent = () => {
    const { content, loading } = this.state;
    if (loading) {
      return (
        <ActivityIndicator />
      );
    } else {
    console.log(content)
    return (
      <Profile content={content}/>
    );
  }
}
sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
  }
});
