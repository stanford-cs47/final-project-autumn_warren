import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Metrics, Colors, Images } from '../../Themes';
import SwitchToggle from 'react-native-switch-toggle'
import profile from '../../Data/MyProfile';
import EventData from '../../Data/EventsDataList';
import PeopleList from '../../Data/PeopleList';

export default class EventPeopleListItem extends React.Component {
    state = {
        attendies: EventData
    }
    render () {
        console.log("Hello Kaughlin: ", PeopleList.people[this.props.person].name);
        return (
            <View style = {styles.container}>
                <View stle = {this.person}>
                    <Image style = {styles.peopleImage} source = {Images[this.props.person]}/> 
                    <Text style = {styles.text}>{PeopleList.people[this.props.person].name}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginRight: 10,
    },
    person: {
        flexDirection: 'column',
    },
    peopleImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginTop: 20,
    },
    notMatch: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#7a7a7a',
        justifyContent: 'center'
    },
    match: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#86bf96',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        alignSelf: 'center',
        fontFamily: "Gill Sans"
    },
  });