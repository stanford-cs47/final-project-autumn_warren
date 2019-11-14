import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import buddies from '../Data/PeopleList';
import Profile from '../Components/Profile';

export default class BuddyProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const name = params.name;
    return {
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}>{name}</Text>
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
    const username = params.username;
    this.setState({user: username});
    this.loadUserContent(username);
  }
  findBuddy(username) {
    for(i = 0; i < buddies.length; i++) {
      var buddy = buddies[i];
      if(buddy.username === username) {
        return buddy;
      }
    }
  } 
  loadUserContent = async (username) => {
    this.setState({loading: true});
    await this.sleep(500); 
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
