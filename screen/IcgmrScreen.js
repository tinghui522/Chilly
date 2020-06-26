import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,SafeAreaView} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

const IcgmrScreen = ({ navigation }) => {
  
    return (
      <SafeAreaView>
      
      <View style={{ backgroundColor: '#41627D' }}>   
        <View style={styles.container2}>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text>
            
        </View>
        </View>
      
      <ScrollView style={styles.contentStyle}>
        
        <View>
        <View style={styles.titleStyle}>
        <View style={styles.cardContainerStyle}>
        <Image
          style={styles.aboutStyle}
          source={{
            uri:
              "https://github.com/tinghui522/APPmidterm/blob/master/img/Group%2015.png?raw=true"
          }}
        />
      
        <View style={styles.folderStyle}>
          <Image
                style={styles.folder1Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/folder_1.png?raw=true"
                }}
              />
          <Image
                style={styles.icgmr1Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/icemr_img1.png?raw=true"
                }}
              />
              <Text style={styles.text1Style}>Antarctic animals are not afraid of people at all, and will stay beside the staff curiously.</Text>
          <Image
            style={styles.folder2Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/folder_2.png?raw=true"
            }}
          />
          <Image
            style={styles.icgmr2Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/icemr_img2.png?raw=true"
            }}
          />
          <Text style={styles.text2Style}>At the end of winter, due to the special position of the sun, beautiful clouds of pearls will appear in the sky.</Text>
          <Image
            style={styles.folder3Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/folder_3.png?raw=true"
            }}
          />
          <Image
            style={styles.icgmr3Style}
            source={{
              uri:
                "https://github.com/tinghui522/APPmidterm/blob/master/img/icemr_img3.png?raw=true"
            }}
          />
          <Text style={styles.text3Style}>The Antarctic has a special geographic location, and people can see shocking special climate phenomena.</Text>
        </View>
        </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
  }


export default IcgmrScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container0: { flex: 1},
  contentStyle: {
    backgroundColor: "#f8f8f8",
    height:"100%",
    width:"100%"

  },
  container2: {
    backgroundColor: '#41627D',
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
  cardContainerStyle:{
    width:414,
    height:925,
    marginTop:30,
    marginLeft:30,
    backgroundColor:"#B9D5F2",
    borderRadius:40
  },
  aboutStyle:{
    width:220,
    height:60,
    marginLeft:-20,
    marginTop:-30,
    borderRadius:10
  },
  folder1Style:{
    width:525,
    height:305,
    marginLeft:-155,
    marginTop:-20,
  },
  icgmr1Style:{
    width:200,
    height:140,
    marginLeft:40,
    marginTop:-180,
  },
  text1Style:{
    width:110,
    height:170,
    fontSize:14,
    fontWeight:"bold",
    marginTop:-135,
    marginLeft:255,
  },
  folder2Style:{
    width:525,
    height:305,
    marginLeft:-155,
    marginTop:-20,
  },
  icgmr2Style:{
    width:200,
    height:140,
    marginLeft:40,
    marginTop:-180,
  },
  text2Style:{
    width:110,
    height:180,
    fontSize:14,
    fontWeight:"bold",
    marginTop:-145,
    marginLeft:250,
  },
  folder3Style:{
    width:600,
    height:305,
    marginLeft:-230,
    marginTop:-20,
  },
  icgmr3Style:{
    width:200,
    height:140,
    marginLeft:40,
    marginTop:-180,
  },
  text3Style:{
    width:110,
    height:180,
    fontSize:14,
    fontWeight:"bold",
    marginTop:-145,
    marginLeft:250,
  }
});