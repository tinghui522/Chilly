import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,SafeAreaView, ImageBackground,navigation} from 'react-native';

import Swiper from 'react-native-swiper';
import Start from "./StartScreen";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

const HomeScreen = ({ navigation }) => {
  
    return (
      <SafeAreaView style={{flex:1}}>
    <Start></Start>

        <View style={styles.container2}>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text>
          
        </View>
      
      
      <ScrollView style={styles.contentStyle}>
        
        <View style={{flex:1}}>
        <Swiper style={styles.wrapper} height={220} horizontal={true} autoplay={ true } showsPagination={false}>
          <View style={styles.slide1} >
            <Image style={{width:350,height:196,justifyContent:"center",alignContent:"center",marginLeft:33,marginTop:20}}
              source={{
                uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/title_image%201.png?raw=true"
              }}
            />
          </View>
          <View style={styles.slide2}> 
            <Image style={{width:350,height:196,justifyContent:"center",alignContent:"center",marginLeft:33,marginTop:20}}
              source={{
                uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/title_image2.png?raw=true"
              }}
            />
          </View>
          <View style={styles.slide3}> 
            <Image style={{width:350,height:196,justifyContent:"center",alignContent:"center",marginLeft:33,marginTop:20}}
              source={{
                uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/title_image3.png?raw=true"
              }}
            />
          </View>
        </Swiper>
          <View style={styles.backStyle}>
          <Image
                style={styles.titlecircleStyle}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/title_circle.png?raw=true"
                }}
              />
              <Text style={styles.titleStyle}>動物介紹</Text>

          <View style={styles.pagebottonStyle}>
          <Image
            style={styles.pagebotton1Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/pade_bottom5.png?raw=true"
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Penguin')}>
          <Image
              style={styles.pagebotton2Style}
              source={{
                uri:
                  "https://github.com/tinghui522/Chilly/blob/master/assets/btn1.png?raw=true"
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Seal')}>
          <Image
            style={styles.pagebotton3Style}
            source={{
              uri:
                "https://github.com/tinghui522/Chilly/blob/master/assets/btn2.png?raw=true"
            }}
          />
          </TouchableOpacity>
          <Image
                style={styles.pagebotton4Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/page_bottom6.png?raw=true"
                }}
              />
          <Image
                style={styles.pagebotton5Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/page_bottom6.png?raw=true"
                }}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Killer Whale')}>
          <Image
                style={styles.pagebotton6Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/Chilly/blob/master/assets/btn3.png?raw=true"
                }}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Sea Gull')}>
          <Image
                style={styles.pagebotton7Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/Chilly/blob/master/assets/btn4.png?raw=true"
                }}
              />
              </TouchableOpacity>
          <Image
                style={styles.pagebotton8Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/pade_bottom5.png?raw=true"
                }}
              />   
          </View>
        </View>
        <View style={{flex:1}}>
            <Image
              style={styles.titlecircle1Style}
              source={{
                uri:
                  "https://github.com/tinghui522/APPmidterm/blob/master/img/title_circle.png?raw=true"
              }}
            />
            <Text style={styles.title1Style}>最新消息</Text>
            <View style={{flex:1}}>
            <TouchableOpacity onPress = {() =>alert('coming soon!')}>
                <ImageBackground
                  style={styles.news1Style}
                  source={{
                    uri:
                      "https://github.com/tinghui522/APPmidterm/blob/master/img/news_1.png?raw=true"
                  }}
                >
                <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>alert('coming soon!')}>
                <ImageBackground
                  style={styles.news2Style}
                  source={{
                    uri:
                      "https://github.com/tinghui522/APPmidterm/blob/master/img/news_2.png?raw=true"
                  }}
                >
                  <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>alert('coming soon!')}>
                <ImageBackground
                  style={styles.news3Style}
                  source={{
                    uri:
                      "https://github.com/tinghui522/APPmidterm/blob/master/img/news_3.png?raw=true"
                  }}
                >
                  <View style={styles.storybox}>
                
                </View>
                </ImageBackground>
                </TouchableOpacity>
            </View>
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
  container0: { flex: 1},
  contentStyle: {
    backgroundColor: "#f8f8f8",
    height:"100%",
    width:"100%"

  },
  container2: {
    backgroundColor: '#3D4A7E',
    width:414,
    height:100,
    marginTop:-50
  },
  headerStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: '#00b49f' 
  },
  textStyle1:{
    width:320,
    fontSize:18,
    marginLeft:47,
    marginTop:30
  },
  titlecircleStyle:{
    width:35,
    height:35,
    marginLeft:30,
    marginTop:30
  },
  titleStyle:{
    fontSize:22,
    fontWeight:"bold",
    color:"#3E7CB1",
    marginLeft:50,
    marginTop:-20
  },
  pagebotton1Style:{
    width:140,
    height:90,
    marginLeft:-110,
    marginTop:30
  },
  pagebotton2Style:{
    width:140,
    height:90,
    marginLeft:40,
    marginTop:-90
  },
  pagebotton3Style:{
    width:140,
    height:90,
    marginLeft:190,
    marginTop:-90
  },
  pagebotton4Style:{
    width:140,
    height:90,
    marginLeft:340,
    marginTop:-90
  },
  pagebotton5Style:{
    width:140,
    height:90,
    marginLeft:-80,
    marginTop:20
  },
  pagebotton6Style:{
    width:140,
    height:90,
    marginLeft:70,
    marginTop:-90
  },
  pagebotton7Style:{
    width:140,
    height:90,
    marginLeft:220,
    marginTop:-90
  },
  pagebotton8Style:{
    width:140,
    height:90,
    marginLeft:370,
    marginTop:-90
  },
  titlecircle1Style:{
    width:35,
    height:35,
    marginLeft:35,
    marginTop:30
  },
  title1Style:{
    fontSize:22,
    fontWeight:"bold",
    color:"#3E7CB1",
    marginLeft:55,
    marginTop:-20
  },
  news1Style:{
    width:350,
    height:196,
    marginLeft:33,
    marginTop:20
  },
  news2Style:{
    width:350,
    height:196,
    marginLeft:33,
    marginTop:30
  },
  news3Style:{
    width:350,
    height:196,
    marginLeft:33,
    marginTop:30,
    marginBottom:20
  },
});

export default HomeScreen;