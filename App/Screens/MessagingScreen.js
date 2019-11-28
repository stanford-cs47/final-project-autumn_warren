import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, } from 'react-native';
import { material } from 'react-native-typography';
import DiscoverList from '../Components/DiscoverPage/DiscoverList'
import { Metrics, Colors, Images } from '../Themes';
import { GiftedChat, Send, Actions } from 'react-native-gifted-chat'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyProfile from '../Data/MyProfile';
import PeopleData from '../Data/PeopleList';
import { MaterialIcons } from '@expo/vector-icons';


export default class MessagingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
   headerTitle: (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}> {PeopleData.people[params.username].name}</Text>
        </SafeAreaView>
      )
    };
  };
  state = {
    messages: [],
    buddy: {},
  }

  componentWillMount() { 
    const params = this.props.navigation.state.params || {};
    this.setState({buddy: PeopleData.people[params.username]});
    this.setState({messages: this.getMessages()});
  }

  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener("willBlur", () => {
        localStorage.setItem(this.props.navigation.state.params.username, JSON.stringify(this.state.messages))
      })
    ];
  }

  getMessages() {
    const params = this.props.navigation.state.params;

    var messagesString = localStorage.getItem(params.username);
    if(messagesString) {
      return JSON.parse(messagesString);
    } else {
      return [
          {
            _id: 1,
            text:  PeopleData.people[params.username].message,
            createdAt: new Date(Date.UTC(2019, 10, 11, 22, 20, 0)),
            user: {
              _id: 2,
              name: PeopleData.people[params.username].name,
              avatar: Images[params.username]
            },
          }, 
        ];
      }
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    
    var msgCopy = [];
    this.state.messages.forEach(element => msgCopy.push(element));
    msgCopy.unshift(messages);

    localStorage.setItem(this.props.navigation.state.params.username, JSON.stringify(msgCopy));
    console.log("Messages: " + this.state.messages);
    console.log(this.state.messages);
    console.log("Message copy: " + msgCopy);
    console.log(msgCopy);

  }



  scheduleWorkout() {
    this.props.navigation.navigate('Scheduling');
  }
  onPressActionButton() {
    return (
    this.props.navigation.navigate('Scheduling')
    );
  }
renderCustomActions(props) {
  return (
    //<Actions {...props}>
    <TouchableOpacity style = {styles.calendarView}>
      <View style = {styles.calendarButton}>
  <Image style = {styles.calendarIcon}
            source = {Images.scheduleworkout}/>
            </View>
  </TouchableOpacity>
  //</Actions>
  );
}
renderSend(sendProps) {
  return(
    <Send {...sendProps}>
     <View style={{marginRight: 10, marginBottom: 5}}>
          <MaterialIcons name = "send"
              size = {20}
              color= {Colors.orange}/>
      </View>
    </Send>
  );
}
  render() {
    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
       // alignTop = {true}
       renderSend = {this.renderSend}
       bottomOffset={300}
        renderActions = {this.renderCustomActions}
        listViewProps={{padding: 25}}
        onPressActionButton = {() =>this.props.navigation.navigate('Scheduling')}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
    fontWeight:'600',
    fontFamily: "Gill Sans"
  },
  calendarButton: {
    backgroundColor: Colors.orange,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor:'#ffd4a6',
    borderWidth: 2,    
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: .4,
    shadowRadius: 2.32,
    elevation: 4,
    alignItems: 'center',
    justifyContent:'center',
  },
  calendarIcon: {
    height: 37,
    width: 37,
    aspectRatio: 1,
    tintColor: Colors.heading,
    resizeMode: 'contain',
  },
  calendarView: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    justifyContent:'center',
    marginVertical: 5,
    //alignContent: 'center'
  },
  clock: {
    alignItems: 'center',
    //justifyContent:'center',
  }
});
  