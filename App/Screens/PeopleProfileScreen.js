import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, SafeAreaView,ActivityIndicator, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import PeopleData from '../Data/PeopleList';
import Profile from '../Components/Profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import { CheckBox, Button, Divider } from 'react-native-elements';


export default class BuddyProfileScreen extends React.Component {
  state = {
    content: {},
    loading: true,
    user: "",
    visible: false,
    requestSent: false,
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    console.log("\n\n\n\n Recalled \n\n\n\n")
    return {
      headerRight: (
        <TouchableOpacity style={styles.filter}
          onPress = {navigation.getParam('connectpopup')}>
          <Text style={styles.filterText}>{navigation.getParam('getButtonText')}</Text>         
        </TouchableOpacity>
      ),
      // headerTitle: (
      //   <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      //     <Text style={styles.header}> </Text>
      //   </SafeAreaView>
      // )
    };
  };
  _connectpopup = () => {
    this.setState({visible: true}) 
  }
  requestSent() {
    console.log("Request sent nigga")
    this.setState({visible: false}) 
    this.setState({requestSent: true}) 
  }
  componentDidMount() {
    if(!this.props.navigation) return;
    const params = this.props.navigation.state.params || {};
    this.props.navigation.setParams({ connectpopup: this._connectpopup })

    // console.log("State request sent: " + this.state.requestSent)
    var topButtonText = this.state.requestSent ? "Pending" : "Connect";
    this.props.navigation.setParams({ getButtonText: topButtonText });
    // console.log(params);
    const username = params.username;
    // console.log("Username1: " + params.username);
    // console.log("Username2: " + username);
    this.setState({user: username});
    this.loadUserContent(username);
  }
  // componentWillReceiveProps() {
  //   // if (this.props.number !== nextProps.number) {
  //   //   this.setState({number: nextProps.number});
  //   // }
  //   console.log("State request sent: " + this.state.requestSent)
  //   var topButtonText = this.state.requestSent ? "Pending" : "Connect";
  //   this.props.navigation.setParams({ getButtonText: topButtonText });
  // }
  findBuddy(username) {
    console.log(PeopleData.people);
    // console.log("Username3: " + username);
    console.log(PeopleData.people[username]);
    return PeopleData.people[username];
  } 
  loadUserContent = async (username) => {
    this.setState({loading: true});
    await this.sleep(500); 
    // console.log("Username4: " + username);
    const result = this.findBuddy(username);
    console.log(result);
    this.setState({content: result});
    this.setState({loading: false});
  }
  render() {
    return (
      <View style={styles.container}>
        {this.getProfileContent()}
        <Modal
              visible={this.state.visible}
              height = {.15}
              footer ={
                <ModalFooter>
                  <ModalButton
                    text="OK"
                    textStyle={styles.button}
                    onPress={() => {this.requestSent()} } />
                </ModalFooter>
              }>
              <ModalContent style = {styles.content}>
                  <Text style = {styles.popup}>Connect Request Sent!</Text>
              </ModalContent>
          </Modal>
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
  },
  filter: {
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 15,
  },
  filterText: {
    fontWeight: '700',
    color: Colors.orange,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    }, 
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 20,
    },
    popup: {
      fontSize: 20,
    },
    button: {
      color: Colors.orange
    }
});
