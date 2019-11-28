import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, SafeAreaView,ActivityIndicator, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors, Images } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import EventsData from '../Data/EventsDataList';
import EventDetails from '../Components/EventsPage/EventDetails'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import { CheckBox, Button, Divider } from 'react-native-elements';


export default class SingleEventScreen extends React.Component {
  state = {
    content: {},
    loading: true,
    eventId: "",
    visible: false,
    requestSent: false,
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
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
  requestSentFunction = () => {
    this.setState({visible: false}) 
    this.setState({requestSent: true}) 
    this.props.navigation.setParams({getButtonText: "JOINED" });
  }
  componentDidMount() {
    if(!this.props.navigation) return;
    const params = this.props.navigation.state.params || {};
    this.props.navigation.setParams({ connectpopup: this._connectpopup })
    this.props.navigation.setParams({ getButtonText: "JOIN EVENT" });

    const eventId = params.eventId;
    this.setState({eventId: eventId});
    this.loadEventContent(eventId);
  }

  findEvent(eventId) {
    return EventsData.events[eventId];
  } 
  loadEventContent = async (eventId) => {
    this.setState({loading: true});
    await this.sleep(500); 
    const result = this.findEvent(eventId);
    this.setState({content: result});
    this.setState({loading: false});
  }
   render() {
    return (
      <View style={styles.container}>
        {this.getEventContent()}
        <Modal
              visible={this.state.visible}
              height = {.15}
              footer ={
                <ModalFooter>
                  <ModalButton
                    text="Cancel"
                    textStyle={styles.button}
                    onPress={() => {this.setState({visible: false})} } />
                  <ModalButton
                    text="OK"
                    textStyle={styles.button}
                    onPress={() => {this.requestSentFunction()} } />
                </ModalFooter>
              }>
              <ModalContent style = {styles.content}>
                  <Text style = {styles.popup}>Send Friend Request?</Text>
              </ModalContent>
          </Modal>
      </View>
    );
  }
  getEventContent = () => {
    const { content, loading } = this.state;
    if (loading) {
      return (
        <ActivityIndicator />
      );
    } else {
    return (
      <EventDetails content={content}/>
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
    fontSize: 20,
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