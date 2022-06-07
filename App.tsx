import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from './src/pages/HomePage';
import LoginPage from './src/pages/LoginPage';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="HomePage" component={HomePage} />
        <Screen name="LoginPage" component={LoginPage} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
