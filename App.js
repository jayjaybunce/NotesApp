import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PageHeader from './Components/PageHeader/PageHeader'
import SignUpForm from './Components/SignUpForm/SignUpForm'
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

class App extends React.Component{
  state = {
    signup: {
      passwordOne: '',
      paswordTwo: '',
    }
  }
  render(){
    return (
      <View>
        <PageHeader 
          title='Create your acccount!' 
          description="Please create an account to use Notes. Without an account, we can't let you proceed"

          />
        <SignUpForm/>
      </View>
    )
  }
  
  
}


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
