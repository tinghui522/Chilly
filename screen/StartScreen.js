import React, {Component} from "react";
import Swiper from 'react-native-swiper'
import {Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView,Modal,Button,backgroundColor} from 'react-native';
import { getCurrentFrame } from "expo/build/AR";
const image = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/startbg.png" };

import Onboarding from 'react-native-onboarding-swiper';

class Start extends Component{
  constructor(){
    super();
    this.state={
      modalVisible:true,
    }
  }
  render(){
    return(
      <View >
        <Modal animationType="slide" visible={this.state.modalVisible} >
            
            

            <Onboarding bottomBarHeight={120}  bottomBarHighlight={ false } showSkip={false} showNext={false}
              pages={[
                {
                  backgroundColor: '#F2E6D8',
                  image: <Image source={require('../assets/start_img.png')} />,
                  title: '終於見到你了，卡巴。',
                  subtitle: '我是聖甲蟲，你的守護神             相信你對於死後一定有很多疑問     接下的旅途可能會很艱辛                  但我保證一定會非常有趣', 
                  titleStyles: {fontSize: 17},
                  subTitleStyles: { height:80,width:249}, 
                  
                  
                },
                    
                ]}
            />
            <TouchableOpacity  onPress={() => {this.setState({modalVisible:false})}}> 
            <Image style={{ width: 50, height: 50 ,marginLeft:350,marginTop:-85}}
                    source={require('../assets/skipbtn.png')}
            />
          </TouchableOpacity>  
               
          </Modal>
        </View>
    )
  }
}



   
const styles = StyleSheet.create({
   
   
    card1:{
      marginTop:60,
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"#BF7866",
    },
    card2:{
      marginTop:55,
      justifyContent:"center",
      alignItems:"center",
    },
    card3:{
      marginTop:26,
      justifyContent:"center",
      alignItems:"center",
    },
    abouttext:{
      fontSize: 16,
      marginTop:15,
      // backgroundColor:"#EAB6A8",
    },


  });

  export default Start;