import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

// Create component
class Main extends Component {
    // LIfecycle method
    componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBYC-78O0IUmhql1fFurXkC0zlrPiVdprU',
      authDomain: 'manager-86b1f.firebaseapp.com',
      databaseURL: 'https://manager-86b1f.firebaseio.com',
      projectId: 'manager-86b1f',
      storageBucket: 'manager-86b1f.appspot.com',
      messagingSenderId: '531247198989'
    };
    firebase.initializeApp(config);
  }

  // Display component in the screen
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

// Export component to use in other class
export default Main;
