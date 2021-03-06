import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NetInfo from 'react-native-netinfo'
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
      user: '',
    }
  }
  testApiHit = () =>{
    fetch('http://192.168.0.34:3000/notieapi/api')
    .then(response => {
      return response.json()
    })
    .then(data=>{
      this.setState({user: data.username})
    })
  }
  componentDidMount(){
    this.testApiHit()
  }
  render(){
    return (
      <View>
        
        <PageHeader 
          title='Create your acccount!' 
          description="Please create an account or login to use Notes. "
          
          />
        <SignUpForm
          
        />
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
