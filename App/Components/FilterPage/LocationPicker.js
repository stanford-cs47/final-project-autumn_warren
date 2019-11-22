import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text} from 'react-native';
import profile from '../../Data/MyProfile';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ActivityList from './ToggleList';
import Locations from '../../Data/Locations';
import 'localstorage-polyfill';
//import { Picker, Form, Icon, Header, Left, Button, Body, Right, Title, Item, Input, Text} from 'native-base';

export default class LocationPicker extends React.Component {
    state = {
        selected: (localStorage.getItem("Location") || "Any"),
        text: 'Select a location',
    };
    onSelection(value) {
        localStorage.setItem("Location", value);
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
            /*<Picker 
            renderHeader={backAction =>
                <Header style={{ backgroundColor: Colors.orange }}>
                   <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: 'white'}} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: 'white', fontSize: 22}}>Locations</Title>
                  </Body>
                  <Right/>
                </Header>}
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your place of fitness"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor={Colors.orange}
                style={{ width: width * .8}}
                selectedValue={this.state.selected}
                mode = {"popup"}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="24 Hour Fitness" value="key0" />
                <Picker.Item label="Farrillaga" value="key1" />
                <Picker.Item label="Nearillaga" value="key2" />
            </Picker>*/
      /*<View style={{flex: 1}}>
      <View style={{height: 64}} />
      <DropdownMenu
        placeholder = {'select your location'}
        style={{flex: 1}}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
        // arrowImg={}      
        // checkImage={}   
        // optionTextStyle={{color: '#333333'}}
        // titleStyle={{color: '#333333'}} 
        // maxHeight={300} 
        handler={(selection, row) => this.setState({text: data[selection][row]})}
        data={data}
      >

        <View style={{flex: 1}}>
        </View>

      </DropdownMenu>
    </View>*/
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