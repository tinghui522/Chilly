import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,Navigation,SafeAreaView, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 


const SealScreen = ({ navigation }) => {
  
    return (
      
      <SafeAreaView>
      <View style={{ backgroundColor: '#41627D' }}>   
         <View style={styles.container2}>
            {/* <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text> */}
            
        </View> 
      </View>
     
      <View>
      <ImageBackground style={styles.gallerybg}
          source={{
            uri:
              "https://github.com/tinghui522/Chilly/blob/master/assets/gallerybg.png?raw=true"
          }}
        />
        <Image style={{ width: 384, height: 584 ,marginLeft:15,marginTop:-720}}
                        source={require('../assets/card2.png')}
                />
        </View>
            </SafeAreaView>
            
    )
  }

const styles = StyleSheet.create({
  container2: {
    backgroundColor: '#3D4A7E',
    width:414,
    height:50,
    marginTop:-50
  },
  gallerybg:{
    width:414,
    height:776,
  }
});

export default SealScreen;