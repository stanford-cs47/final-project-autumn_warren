import React, { Component } from 'react'
import { StyleSheet, Dimensions} from 'react-native';
import profile from '../../Data/MyProfile';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors, Images } from '../../Themes';
import ActivityList from './ActivityList';
import { Picker, Form, Icon, Header, Left, Button, Body, Right, Title, Item, Input, Text} from 'native-base';

export default class LocationPicker extends React.Component {
    
    state = {
        selected: undefined,
    };
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {
        const { width, height } = Dimensions.get('window')
        return (
            <Picker
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
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your place of fitness"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor={Colors.orange}
                style={{ width: width * .8}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="24 Hour Fitness" value="key0" />
                <Picker.Item label="Farrillaga" value="key1" />
                <Picker.Item label="Nearillaga" value="key2" />
            </Picker>
        );
    }
}