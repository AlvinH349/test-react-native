import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './components/Login';

const App = () =>{
  return(
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;