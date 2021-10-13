import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import {Provider} from "react-redux"
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler"
import Homenavigation from './app/navigation/Homenavigation';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store ={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior ={Platform.OS=== "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        style={{flex: 1}}>
          <Homenavigation />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
