import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,ImageBackground,SafeAreaView,Navigator} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import QuestionBoard from './QuestionBoard';


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

export default (props) => {
  let renderScene = (route, nav) => {
    let onBack = () => {
      nav.pop();
    }
    switch (route.id) {
      case 'simple1':
        return <QuestionBoard onBack={onBack}/>;
      case 'simple2':
        return <Page2 onBack={onBack}/>;
      case 'simple3':
        return <Page3 onBack={onBack}/>;
      default:
        return (
          <View style={styles.center}>
            <Image
                    style={styles.question2Style}
                    source={{
                        uri:
                        "https://github.com/tinghui522/Chilly/blob/master/assets/Q1.png?raw=true"
                    }}
                    onPress={() => nav.push({id: 'simple1', })}
                    />
            
          </View>
        )
    }
  }

  let configureScene = (route, routeStack) => {
    switch (route.id) {
      case 'simple1':
        return Navigator.SceneConfigs.VerticalDownSwipeJump
      case 'simple2':
        return Navigator.SceneConfigs.PushFromRight;
      case 'simple3':
        return Navigator.SceneConfigs.FloatFromBottom;
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  }

  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{}}
      configureScene={configureScene}
      renderScene={renderScene}
    />
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
    marginTop:-50
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
    height:700,
    marginTop:50
  },
  questiontiteStyle:{
    width:350,
    height:176,
    marginLeft:33,
    marginTop:0
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

export default ChatScreen;