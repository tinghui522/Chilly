import React, { Component,Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,Navigation,SafeAreaView, ImageBackground} from 'react-native';

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 


const GalleryScreen = ({ navigation }) => {
  
    return (
      
      <SafeAreaView>
        
      <View style={{ backgroundColor: '#41627D' }}>   
         <View style={styles.container2}>
            {/* <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text> */}
            
        </View> 
      </View>
     
      <View>
      <ImageBackground style={styles.gallerybg}
          source={require('../assets/gallerybg.gif')}
          
        />
            <TouchableOpacity  onPress={() => navigation.navigate('Penguin')}> 
                <Image style={{ width: 26, height: 51 ,marginLeft:155,marginTop:-350}}
                        source={require('../assets/penguin.png')}
                />
              </TouchableOpacity> 
              <TouchableOpacity  onPress={() => navigation.navigate('Seal')}> 
                <Image style={{ width: 121, height: 69 ,marginLeft:220,marginTop:-300}}
                        source={require('../assets/seal.png')}
                />
              </TouchableOpacity> 
              <TouchableOpacity  onPress={() => navigation.navigate('Sea Gull')}> 
                <Image style={{ width: 67, height: 57 ,marginLeft:320,marginTop:-360}}
                        source={require('../assets/gull.png')}
                />
              </TouchableOpacity> 
              <TouchableOpacity  onPress={() => navigation.navigate('Killer Whale')}> 
                <Image style={{ width: 235, height: 184 ,marginLeft:170,marginTop:-180}}
                        source={require('../assets/shale.png')}
                />
              </TouchableOpacity> 
              <TouchableOpacity  onPress={() => navigation.navigate('Cute Scene')}> 
                <Image style={{ width: 133, height: 102,marginLeft:20,marginTop:-540}}
                        source={require('../assets/photo.png')}
                />
              </TouchableOpacity> 
              <TouchableOpacity  onPress={() => navigation.navigate('Aurora')}> 
                <Image style={{ width: 50, height: 50,marginLeft:340,marginTop:-760}}
                        source={require('../assets/stars.png')}
                />
              </TouchableOpacity> 
           

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

export default GalleryScreen;