import React, { Compoment }from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableHighlight 
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import BookList from './screens/BookList'
import BookDetail from './screens/BookDetail'

const Navigation = StackNavigator({
  First: {screen:BookList},
  Second:{screen:BookDetail}
});
  
export default Navigation; 