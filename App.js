/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TextInput, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'
const { width, height } = Dimensions.get('window')
export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }
  componentDidMount() {
    this.loadArticles();
  }
  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    this.setState({loading: false, articles: resultArticles})
  }

  getArticleContent = () =>{
    let contentDisplated = null;
    if(this.state.loading) {
      contentDisplated = <ActivityIndicator
      style = {styles.activityIndicator}
      size = "large" color = "black"/>;
    } else {
      contentDisplated= <News articles = {this.state.articles}/>;
    }
      return (
      <View style = {{flex: 1}}>
        {contentDisplated}
      </View>
      )
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Search searchBar = {this.searchBar}
          loadArticles = {searchText => this.loadArticles(searchText)}/>
          {this.getArticleContent()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
  logo: {
    height: height * .1,
    width: width * .9,
    resizeMode: 'contain',
    marginTop: 10,
  },
  
});
