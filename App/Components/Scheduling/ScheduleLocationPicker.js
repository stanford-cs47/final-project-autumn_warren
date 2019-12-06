import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text} from 'react-native';
import profile from '../../Data/MyProfile';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ActivityList from '../FilterPage/ToggleList';
import Locations from '../../Data/Locations';
import 'localstorage-polyfill';
//import { Picker, Form, Icon, Header, Left, Button, Body, Right, Title, Item, Input, Text} from 'native-base';

export default class LocationPicker extends React.Component {
    state = {
        selected: (localStorage.getItem("ScheduleLocation" + this.props.buddy) || "Any"),
        text: 'Select a location',
    };
    onSelection(value) {
        localStorage.setItem("ScheduleLocation" + this.props.buddy, value);
        console.log("Hello!!!" + value);
        this.setState({
            selected: value
        });     
    }
    render() {
        return (
          <Dropdown
          label='Select location'
          data={Locations}
          value = {this.state.selected}
          pickerStyle={{borderBottomColor:'transparent',borderWidth: 0}}
          dropdownPosition={-5}
          animationDuration= {100}
          onChangeText={(value) => {
              this.onSelection(value)}}
          itemColor={Colors.heading}
        />
        );
    }
}
const styles = StyleSheet.create({
  container: {
flex: 1,
  },
  text: {
    fontSize: 80,
  },
});