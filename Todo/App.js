import React, { Component } from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import Todoform from './src/Todo/Todoform';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key='root'>
	       <Scene key='Todoform' component={Todoform} title='Todo'/>
        </Scene>
      </Router>
    );
  }
}
