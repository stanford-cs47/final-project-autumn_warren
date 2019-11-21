import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, SectionList, Text} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import profile from '../../Data/MyProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ToggleList from './ToggleList';
import ToggleItem from './ToggleItem';
import LocationPicker from './LocationPicker';


export default class FilterList extends React.Component  {
    state = {
        personalityChecked: false,
        experienceChecked: false,
        
    };
    render() {
    console.log(this.state.experienceFilter)
      return (
            <ScrollView style = {styles.container}>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>
                        Fitness Places </Text>
                    <Text style = {styles.info}>
                        Match me with buddies at this fitness place:</Text>
                    <LocationPicker picker = {this.picker}/>
                </View>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>
                        Activities</Text>
                    <Text style = {styles.info}>
                        Show buddies who share these activities:</Text>
                    <ToggleList activities = {profile.activities}/>
                </View>
                <View style = {styles.filter}>
                    <Text style = {styles.header}>Experience</Text>
                    <Text style = {styles.info}>
                        Show buddies who share my experience level:</Text>
                    <ToggleItem 
                    item = {profile.experience}/>
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
    }
});
