import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,  Image, Dimensions, ScrollView, ActivityIndicator,} from 'react-native';
import { Metrics, Colors, Images } from '../Themes';
import { GiftedChat, Send, InputToolbar, MessageContainer, SystemMessage, Bubble, CustomView } from 'react-native-gifted-chat';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyProfile from '../Data/MyProfile';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ScheduleLocationPicker from '../Components/Scheduling/ScheduleLocationPicker';
import PendingWorkout from '../Components/Scheduling/PendingWorkout';
import CalendarPicker from 'react-native-calendar-picker';
import { Button} from 'react-native-elements';
import Modal, { ModalFooter, ModalButton, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
var {height, width} = Dimensions.get('window');
import PeopleData from '../Data/PeopleList';
import 'localstorage-polyfill';


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
  componentWillMount() {
    localStorage.setItem("Selected-Workout-Full", "Select a Time");
    localStorage.setItem("ScheduleLocation", "Any");
    //localStorage.setItem("Visibility", false)
    const params = this.props.navigation.state.params || {};
    console.log(params);
    /*this.setState({buddy: MyProfile.buddies[params.username]
    })
    this.setState({
      messages: [
        {
          _id: 1,
          text:  MyProfile.buddies[params.username].message,
          createdAt: new Date(Date.UTC(2019, 10, 11, 22, 20, 0)),
          user: {
            _id: 2,
            name: MyProfile.buddies[params.username].name,
            avatar: Images[params.username]
          },
        }, 
        {
          _id: 3,
          text:  "hey",
          createdAt: new Date(),
          system: true
        }
          //this.state.messages.push(currentMessage)
        //}
      ],
    });*/
    this.setState({buddy: PeopleData.people[params.username]});
    this.setState({messages: this.getMessages()});
    //localStorage.setItem("Schedule-Request", false);
    //this.setState({workoutSent: false})
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
  state = {
    messages: [],
    buddy: {},
    visibleSchedule: false,
    visibleCalendar: false,
    visibleHours: false,
    selectedStartDate: (localStorage.getItem("Sart-Date") || null),
    selectedEndDate: (localStorage.getItem("End-Date" )|| null),
    numDays: 0,
    selectedTime: null,
    selectedDate: null,
    selectedWorkout: (localStorage.getItem("Selected-Workout-Full") || "Select a Time"),
    startNum: 0,
    workoutSent: (localStorage.getItem("Schedule-Request") || false),
    systemMessage: {},
    pending: true,
  };
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
    <TouchableOpacity style = {styles.calendarView}>
      <View style = {styles.calendarButton}>
  <Image style = {styles.calendarIcon}
            source = {Images.scheduleworkout}/>
            </View>
  </TouchableOpacity>
  );
}
renderSend(sendProps) {
  return(
    <Send {...sendProps}>
     <View containerStyle={{marginRight: 10, marginBottom: 5, borderWidth: 0}}>
          <MaterialIcons name = "send"
              size = {20}
              color= {Colors.orange}/>
      </View>
    </Send>
  );
}
renderToolbar(props) {
  return <InputToolbar {...props} 
  containerStyle={styles.inputToolbar} />
}
onDateChange = (date, type)=> {
  if (type === 'END_DATE') {
    localStorage.setItem("End-Date", date);
    console.log("end" + date.date())
    this.setState({numDays: (date.date() - this.state.startNum + 1)})
    this.setState({
      selectedEndDate: date,
    });
  } else {
    localStorage.setItem("Start-Date", date);
    localStorage.setItem("End-Date", null);
    console.log("start" + date.date())
    this.setState({
      selectedStartDate: date,
      selectedEndDate: null,
      startNum: date.date(),
      numDays: 1,
    });
  }
}
selectDate=()=>{
  this.setState({visibleSchedule: false})
  //localStorage.setItem("Visibility", false)
  this.setState({visibleCalendar: true})
}
goBack=()=>{
  this.setState({visibleSchedule: true})
  //localStorage.setItem("Visibility", true)
  this.setState({visibleCalendar: false})
}
onDateRequested = (selected) => {
   console.log("Requested: " + selected.time);
 }
selectTime (){
  console.log(this.state.numDays)
  this.setState({visibleSchedule: false})
  //localStorage.setItem("Visibility", false)
  this.setState({visibleCalendar: false})
  if(this.state.selectedEndDate === null) {
    this.setState({numDays: 0});
  }
  this.props.navigation.navigate('Scheduling', {start: this.state.selectedStartDate, 
    end: this.state.selectedEndDate, days: this.state.numDays, time: this.state.selectedTime,
    confirm: this.returnToConfirm, back: this.backButton
  })
}
cancel = ()=>{
  this.setState({visibleSchedule: false})
    this.setState({
      selectedStartDate: null,
      selectedEndDate: null,
      selectedWorkout: "Select a Time",
    });
    localStorage.setItem("Selected-Workout-Full", "Select a Time");
    localStorage.setItem("Start-Date", null);
    localStorage.setItem("End-Date", null);
    localStorage.setItem("ScheduleLocation", "Any");
}
getDate=(date)=> {
  switch(date) {
    case 0: return "Sunday"
      case 1: return "Monday"
      case 2: return "Tuesday"
      case 3: return "Wednesday"
      case 4: return "Thursday"
      case 5: return "Friday"
      case 6: return "Saturday"
  }
}
returnToConfirm=(visible, start, end, date)=> { 
     //console.log("date: " + date.day())
    this.setState({visibleSchedule: visible});
    var dateString = this.getDate(date.day());
    dateString = dateString + ", " + (date.month() + 1) + "/" + date.date();
    //console.log(dateString)
    this.setState({selectedWorkout: dateString + ", " + start + " to " + end})
    localStorage.setItem("Selected-Workout-Day", dateString)
    localStorage.setItem("Selected-Workout-Time", start + " to " + end)
    localStorage.setItem("Selected-Workout-Full", dateString + ", " + start + " to " + end)
    //console.log(localStorage.getItem("Selected-Workout"))
}
componentDidMount() {
  
}
backButton=(visible)=>  {
  this.setState({visibleCalendar: visible});
}
sendWorkout=()=>{
this.setState({visibleSchedule: false})
localStorage.setItem("Schedule-Request", true)
this.setState({workoutSent: true})
//this.setState({pending: false})

/*suggestWorkout = {
  _id: 3,
  text: 
  ("You suggested a workout" + "\n" + "\n" +
    localStorage.getItem("Selected-Workout-Day") + "\n" 
  + localStorage.getItem("Selected-Workout-Time") + "\n" + "\n"
  + "At: " + localStorage.getItem("ScheduleLocation")),
  createdAt: new Date(),
  system: true,
}
this.setState(previousState => ({
  messages: GiftedChat.append(previousState.messages, suggestWorkout),
}))*/

}
renderSystemMessage(props) {
  //if(this.state.workoutSent) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
          height: 125,
          width: 250,
          borderRadius: 20,
          flexDirection: 'column',
          borderColor: '#ffc8ab',
          borderWidth: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: '#FAD4C0',
        }}
        wrapperStyle= {{    
          justifyContent: 'center',
          alignContent: 'center'
        }}
        textStyle={{
          fontSize: 16,
          color: 'black',
          lineHeight: 22,
          fontWeight: '500',   
        }}
      />
    );
}
renderCustomView(props) {
return(
<CustomView {...props}
containerStyle = {{}}
/>
);
}
  render() {
    const minDate = new Date();
    const { selectedStartDate } = this.state;
    console.log(selectedStartDate)
    return (
        <View style = {styles.container}>    
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
            extraData = {this.state}
            renderSend = {this.renderSend}
            bottomOffset={300}
            listViewProps={{marginBottom: 20}}
            renderInputToolbar = {this.renderToolbar}
            //renderSystemMessage = {this.renderSystemMessage}
           // renderCustomView = {this.renderCustomView}
           // renderBubble = {this.renderBubble}
          />
          <View style = {this.state.workoutSent? styles.workoutSent: styles.none}>
              <View style = {{flex: 1, flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                  <Text style ={{fontSize: 16, color: Colors.heading, fontWeight: 'bold', lineHeight: 25,}}>{localStorage.getItem("Selected-Workout-Day")}</Text>
                  <Text style ={{fontSize: 16, color: Colors.heading, lineHeight: 25,}}>{localStorage.getItem("Selected-Workout-Time")}</Text>
                  <View style = {{flex: 1, flexDirection: 'row'}}>
                    <Text style ={{fontSize: 16, color: Colors.heading, fontWeight: 'bold', lineHeight: 25,}}>At: </Text>
                    <Text style ={{fontSize: 16, color: Colors.heading, lineHeight: 25,}}>{localStorage.getItem("ScheduleLocation")} </Text>
                  </View>
                </View>
                <PendingWorkout pending = {this.state.pending}/>
              </View>
            </View>
          <View style = {styles.calendarButton}>
              <TouchableOpacity
                onPress = {() => this.setState({visibleSchedule: true})}>
              <Image style = {styles.calendarIcon}
                  source = {Images.scheduleworkout}/>
              </TouchableOpacity>
              </View>
              <Modal
              visible={this.state.visibleSchedule}
              footer = {
                  <ModalFooter>
                    <ModalButton
                        text= 'Cancel'
                        textStyle={{color: Colors.heading, fontSize: 16}}
                        onPress = {()=> this.cancel()}
                      />
                      <ModalButton
                        text= 'Suggest'
                        textStyle={{color: '#ff9524', fontSize: 18}}
                        onPress = {()=> this.sendWorkout()}
                      />
                  </ModalFooter>
              }>
              <ModalTitle 
                  title = "Suggest a Workout">
              </ModalTitle>
              <ModalContent style = {styles.workoutContent}>     
                <View style = {styles.location}>
                     <ScheduleLocationPicker picker = {this.picker}/>
                </View>
                <View style = {styles.time}>
                  <Button 
                    title = {this.state.selectedWorkout}
                    type = "outline"
                    titleStyle = {styles.buttonText}
                    buttonStyle = {styles.applyButton}
                    onPress = {() =>this.selectDate()}
                    icon = { 
                      <View style = {{flex:1, alignItems: 'flex-end'}}>
                      <MaterialCommunityIcons name = "clock-outline"
                      size = {30}
                      color= {Colors.heading}/>
                </View>
              }
              iconRight = {true}
              iconContainerStyle= {{marginRight: 10, flex:1, backgroundColor: 'black'}}/>
          </View>
        </ModalContent>
      </Modal>
    <Modal
        visible={this.state.visibleCalendar}
        //height = {.45}
        footer = {
        <ModalFooter>
        <ModalButton 
              text = "Back"
              //type = "clear"
              textStyle = {styles.buttonText}
              onPress = {this.goBack}
            />
          <ModalButton 
          text= "Choose a Time"
          //type = "clear"
          textStyle = {styles.buttonText}
          disabled = {(selectedStartDate === null) ? true : false}
          onPress = {()=>this.selectTime()}
        />
        </ModalFooter>
        }>
    <ModalTitle
        title = "Choose Date(s)"/>
    <ModalContent style = {styles.content}>
<View style = {{flex:6,}}>          
<CalendarPicker
          height = {height * .4}
          minDate = {minDate}
          maxDate = {'2019-12-31 12:25:32'}
          customDatesStyles = {[{date: '2019-12-03 12:25:32', 
          style: {backgroundColor: '#FAD4C0'}}, {date: '2019-12-10 12:25:32', 
          style: {backgroundColor: '#FAD4C0'}}, {date: '2019-12-17 12:25:32', 
          style: {backgroundColor: '#FAD4C0'}}, {date: '2019-12-24 12:25:32', 
          style: {backgroundColor: '#FAD4C0'}}, {date: '2019-12-19 12:25:32', 
          style: {backgroundColor: '#FAD4C0'}}]}
          onDateChange={this.onDateChange}
          selectedDayColor = {Colors.orange}
          allowRangeSelection = {true}
          maxRangeDuration = {2}
          selectedEndDate = {this.state.selectedEndDate}
          selectedStartDate = {this.state.selectedStartDate}
              />
              </View> 
              <View style = {{flex: 1, justifyContent: 'center', marginTop: 5, flexDirection: 'row'}}>
                <View style = {{justifyContent: 'center', flex: 1, alignItems: 'flex-end'}}>
                <View style = {{height: 30, width: 30, borderRadius: 15, backgroundColor: '#FAD4C0', borderColor: '#FAD4C0'}}/>
                </View>
                <View style = {{justifyContent: 'center',  padding: 2, flex: 2}}>
                    <Text style = {{fontSize: 15}}>High Schedule Overlap</Text>
                    </View>
              </View>
              </ModalContent>
            </Modal>
</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scheduleContainer: {
    width: width * .9,
    height: height * .8
  },
  time: {
    justifyContent: 'flex-end',
    marginBottom: 20,
flex: 1,
  },
  location: {
flex: 1,
  },
  applyButton: {
    borderColor: Colors.heading,
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },
  nextButton: {
      justifyContent: 'flex-end'
  },
  backButton: {
    justifyContent: 'flex-start'
      },
  inputToolbar: {
    marginLeft: 100,
    marginRight: 15,
    marginBottom: 10,
    borderColor: 'grey',
  },
  workoutContent: {
    height: height * .3,
    width: width * .9,
  },
  content: {
height: height * .4,
width: width * .9,
  },
  buttonText: {
fontSize: 16,
color: Colors.heading,
  },
  header: {
    fontSize: 24,
    color: Colors.orange,
    fontWeight:'600',
    fontFamily: "Gill Sans"
  },
  calendarButton: {
    position: 'absolute',
    //backgroundColor: '#ff8f17',
    backgroundColor: '#ffc98f',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor:'#f7b063',
    borderWidth: 1,    
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: .7,
    shadowRadius: 4.32,
    elevation: 7,
    alignItems: 'center',
    justifyContent:'center',
    bottom: 5,
    left: 20
  },
  calendarIcon: {
    height: 39,
    width: 39,
    aspectRatio: 1,
    tintColor: '#3b3b3b',
    resizeMode: 'contain',
    //backgroundColor: 'white'
   // position: 'absolute'
  },
  calendarView: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    justifyContent:'center',
    marginVertical: 5,
    //alignContent: 'center'
  },
  button: {
    alignSelf: 'flex-end',
    //alignContent: 'center',
    justifyContent: 'center',
    //marginRight: 15,

  },
  next: {
    width:40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.orange,
    alignContent:'center',
    justifyContent: 'center'
  }, 
  workoutSent: {
    height: 80, 
    width: '100%', 
   backgroundColor: 'rgba(52, 52, 52, 0.1)', 
   //opacity: .2,
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: '#ededed',
    borderBottomWidth: .7,
  },
  none: {
    height: 0,
    width: 0
  },
  activityIndicator: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end'
  }
});
  