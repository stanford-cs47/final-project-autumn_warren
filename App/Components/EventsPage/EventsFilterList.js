import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, SectionList, Text} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import ProfileData from '../../Data/MyProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ToggleList from '../FilterPage/ToggleList';
import ToggleItem from '../FilterPage/ToggleItem';
import { Slider } from 'react-native';
import { Button } from 'native-base';
import TimeBubbles from '../EventsPage/timeBubbles';
import SearchBar from '../SearchBar';

// import Slider from '@react-native-community/slider';
// import LocationPicker from './LocationPicker';


export default class EventsFilterList extends React.Component  {
    state = {
        personalityChecked: false,
        experienceChecked: false,   
    };

    render() {
      return (
            <ScrollView style = {styles.container}>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>
                        Location </Text>
                        <Slider
                            style={{width: 400, height: 40}}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor={Colors.orange}
                            maximumTrackTintColor="000000"
                        />
                        <View style = {styles.filter}>
                            <Text style = {styles.info}>
                            Only show events within this distance</Text>
                        </View>    
                </View>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>
                        Time</Text>
                        <Text style = {styles.info}>
                        Only show events with selected times</Text>
                        <View style = {styles.timeRow}>
                            <TimeBubbles badgeText ={"TODAY"}></TimeBubbles>
                            <TimeBubbles badgeText ={"TOMORROW"}></TimeBubbles>
                            <TimeBubbles badgeText ={"THIS WEEK"}></TimeBubbles>
                        </View>
                        <View style = {styles.timeRow}>
                            <TimeBubbles badgeText ={"THIS WEEKEND"}></TimeBubbles>
                            <TimeBubbles badgeText ={"NEXT WEEK"}></TimeBubbles>
                        </View>
                </View>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>
                        Activities</Text>           
                    <View style = {styles.search}>
                        <SearchBar loadResults = {this.props.loadResults}/>
                    </View>
                    <View style = {styles.timeRow}>
                        <Text style = {styles.info}>
                         Only show events for the selected activities</Text>
                            <ToggleItem 
                            item = {""}/>
                    </View>
                </View>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>Buddies</Text>
                    <View style = {styles.timeRow}>
                        <Text style = {styles.info}>
                            Only show events my buddies have joined   </Text>
                            <ToggleItem 
                            item = {""}/>
                    </View>
                    
                </View>
            </ScrollView>
      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filter: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20,
    },
    search: {
        padding: 20,
       alignItems: 'center'
    },
    timeRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    header: {
        color: Colors.heading,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 20,
    },
    info: {
        color: Colors.heading,
        fontSize: 15,
        marginBottom: 15,
        fontWeight: '300'
    },
    icon: {
      height: 50,
      width: 50,
    },
    activities: {
      flexDirection: 'row',
    }, 
    checkbox: {
        backgroundColor: null,
        borderWidth: 0,
    },
    checkboxText: {
        fontSize: 20,
        color: Colors.heading,
        alignSelf: 'center',
    },
    experience: {
        justifyContent: 'flex-end',
    },
    borderLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});