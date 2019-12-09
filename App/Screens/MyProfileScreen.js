import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, SafeAreaView,ActivityIndicator, Image , Alert} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors, Images } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import profile from '../Data/MyProfile';
import MyProfile from '../Components/MyProfile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default class MyProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
     return {
      headerRight: (
        <TouchableOpacity style = {{marginRight: 15}}
          onPress = {navigation.getParam('alertPopup')}>
            <MaterialCommunityIcons
                name = "settings-outline"
                size = {30}
                color = {Colors.orange}/>
        </TouchableOpacity>
      ),
    headerTitle: (
         <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
           <Text style={styles.header}> MY PROFILE </Text>
         </SafeAreaView>
       ),
     };
   };
  state = {
    content: {},
    loading: true,
    user: "",
    visible: false,
    requestSent: false,
  }
  _alertPopup = () => {
    Alert.alert("Coming Soon!", "Feature not implemented in this app prototype.")
  }
  requestSentFunction = () => {
    this.setState({visible: false}) 
    this.setState({requestSent: true}) 
    this.props.navigation.setParams({getButtonText: "Pending" });
  }
  componentDidMount() {
    if(!this.props.navigation) return;
    const params = this.props.navigation.state.params || {};
    this.props.navigation.setParams({ alertPopup: this._alertPopup })

    const username = profile.profile.username;
    this.setState({user: username});
    this.loadUserContent(username);
  }

  loadUserContent = async (username) => {
    this.setState({loading: true});
    await this.sleep(500); 
    this.setState({content: profile.profile});
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
    return (
      <MyProfile content={content}/>
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
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
    fontWeight: 'bold'
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