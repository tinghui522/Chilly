import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,ImageBackground,SafeAreaView} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const image = { uri: "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg.png?raw=true" };


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

const ChatScreen1 = ({ navigation }) => {
    return (
      <SafeAreaView>
      
      <View>   
        <View style={styles.container2}>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text>
           
        </View>
        </View>
        
        
        <ScrollView style={{backgroundColor:"#A1C4F2"}}>
        <View >
        <ImageBackground style={styles.qabackgroundStyle}
              source={{
                uri:
                  "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg.png?raw=true"
              }}
            />
            <ImageBackground style={styles.qabackgroundStyle}
              source={{
                uri:
                  "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg.png?raw=true"
              }}
            />
            <ImageBackground style={styles.qabackgroundStyle}
              source={{
                uri:
                  "https://github.com/tinghui522/Chilly/blob/master/assets/qa_bg.png?raw=true"
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
        
        <TouchableOpacity  onPress={() => navigation}> 
                <View style={styles.storybox}>
                <Image
                    style={styles.question2Style}
                    source={{
                        uri:
                        "https://github.com/tinghui522/APPmidterm/blob/master/img/question1.png?raw=true"
                    }}
                    />
                </View>
            </TouchableOpacity> 
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
           
      </SafeAreaView>
    )
  }

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
    width:418,
    height:720,
    marginTop:1
  },
  questiontiteStyle:{
    width:350,
    height:176,
    marginLeft:33,
    marginTop:-2120
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

export default ChatScreen1;