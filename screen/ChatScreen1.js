import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,ImageBackground,SafeAreaView,Navigator} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const image = { uri: "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg.png?raw=true" };


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 



const ChatScreen1 = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex:1}}>
      
      <View>   
        <View style={styles.container2}>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text>
           
        </View>
        </View>
        
        
        <ScrollView style={{backgroundColor:"#719FB7",flex:1}}>
        <View >
        <ImageBackground style={styles.qabackgroundStyle}
              source={{
                uri:
                  "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg1.png?raw=true"
              }}
            />
            <ImageBackground style={styles.qabackgroundStyle}
              source={{
                uri:
                  "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg1.png?raw=true"
              }}
            />
           
            <View>
                <Image
                    style={styles.questiontiteStyle}
                    source={{
                      uri:
                        "https://github.com/tinghui522/Chilly/blob/master/assets/question_tite.png?raw=true"
                    }}
                  />
        
          <TouchableOpacity  onPress={() => navigation.navigate('QuestionBoard')}> 
                <View style={styles.storybox}>
                <Image
                    style={styles.question2Style}
                    source={{
                        uri:
                        "https://github.com/tinghui522/Chilly/blob/master/assets/Q1.png?raw=true"
                    }}
                    />


                </View>
            </TouchableOpacity> 
              <TouchableOpacity onPress = {() =>alert('敬請期待')}>
                <ImageBackground
                   style={styles.question2Style}
                   source={{
                     uri:
                       "https://github.com/tinghui522/Chilly/blob/master/assets/Q2.png?raw=true"
                   }}
                >
                  <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>alert('敬請期待')}>
                <ImageBackground
                   style={styles.question3Style}
                   source={{
                     uri:
                       "https://github.com/tinghui522/Chilly/blob/master/assets/Q3.png?raw=true"
                   }}
                >
                  <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>alert('敬請期待')}>
                <ImageBackground
                   style={styles.question3Style}
                   source={{
                     uri:
                       "https://github.com/tinghui522/Chilly/blob/master/assets/Q4.png?raw=true"
                   }}
                >
                  <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>alert('尚未有人回覆這則問題')}>
                <ImageBackground
                   style={styles.question3Style}
                   source={{
                     uri:
                       "https://github.com/tinghui522/Chilly/blob/master/assets/Q5.png?raw=true"
                   }}
                >
                  <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
           
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  storybox:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:60,
    marginBottom:60,
    width:null,
    height:null
  },
  container1: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container0: { flex: 1},
  
  container2: {
    backgroundColor: '#3D4A7E',
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
    width:418,
    height:720,
    marginTop:0
  },
  questiontiteStyle:{
    width:350,
    height:176,
    marginLeft:33,
    marginTop:-1420
  },
  question2Style:{
    width:360,
    height:250,
    marginLeft:25,
    marginTop:-50
  },
  question3Style:{
    width:360,
    height:250,
    marginLeft:25,
    marginTop:20,
    marginBottom:-20
  },
});

export default ChatScreen1;