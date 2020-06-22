import React, { Component,Fragment } from "react";
import {
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Platform,
  API,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class ChatScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
        source={{
          uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_home.png?raw=true"
        }}
          style = {{width:45 ,height:45,marginBottom:10,marginTop:20,tintColor:tintColor}}
          />
    )
  }

  state={
    toggle:false,
    tlist1:false
  }

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  _list1Press(){
    const newState = !this.state.tlist1;
    this.setState({tlist1:newState})
  }

  render() {
    const {toggle,tlist1} = this.state;
    
    const buttonBg = toggle?"#FC6068":"rgba(0,0,0,0)";
    const textcolor = toggle?"white":"#FC6068";
    const listcolor = tlist1?"#f0f0f0":"#f8f8f8";
    return (
      <Fragment>
      
      <View>   
        <View style={styles.container2}>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text>
           
        </View>
        
        </View>
       
          
      <ScrollView style={styles.contentStyle}>
        <View style={styles.container0}>
        <ImageBackground style={styles.qabackgroundStyle}
              source={{
                uri:
                  "https://github.com/tinghui522/APPmidterm/blob/master/img/q&abackground.png?raw=true"
              }}
            />
            <View>
        <Image
            style={styles.questiontiteStyle}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/question_tite.png?raw=true"
            }}
          />
        <Image
          style={styles.question2Style}
          source={{
            uri:
              "https://github.com/tinghui522/APPmidterm/blob/master/img/question1.png?raw=true"
          }}
        />
        <Image
            style={styles.question2Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/question2.png?raw=true"
            }}
          />
        
        <Image
            style={styles.question2Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/question5.png?raw=true"
            }}
          />
        <Image
            style={styles.question2Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/question6.png?raw=true"
            }}
          />
        <Image
            style={styles.question3Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/question7.png?raw=true"
            }}
          />
        </View>
        </View>
      </ScrollView>
     
    </Fragment>  

    )
  }

}

export default ChatScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container0: { flex: 1},
  
  container2: {
    backgroundColor: '#41627D',
    width:414,
    height:100,
    marginTop:0
  },
  contentStyle: {
    /*backgroundColor: "#B9D5F2",*/
    height:"100%",
    width:"100%",
    flex: 1
  },
  headerStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: '#00b49f' 
  },
  qabackgroundStyle:{
    width:414,
    height:1640,
    marginTop:0
  },
  questiontiteStyle:{
    width:350,
    height:176,
    marginLeft:33,
    marginTop:-1630
  },
  question2Style:{
    width:360,
    height:250,
    marginLeft:25,
    marginTop:20
  },
  question3Style:{
    width:360,
    height:250,
    marginLeft:25,
    marginTop:20,
    marginBottom:20
  },
});