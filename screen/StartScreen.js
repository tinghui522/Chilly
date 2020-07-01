import React, {Component, Fragment} from "react";
import Swiper from 'react-native-swiper'
import {Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView,Modal,Button,backgroundColor} from 'react-native';
import { getCurrentFrame } from "expo/build/AR";

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
      <Fragment>
            <View>
              <Modal  visible={this.state.modalVisible} >
                    
                    
                           
              <ImageBackground style={styles.picStyle} source={require('../assets/start_bg.png')} /> 
                              <TouchableOpacity  onPress={() => {this.setState({modalVisible:false})}}> 
                              <Image style={{ width: 150, height: 50 ,marginLeft:132,marginTop:-230}}
                                      source={require('../assets/start_btn.png')}
                              />
                            </TouchableOpacity> 
                            
                            
              </Modal>
            </View>
            
           </Fragment>
    )
  }
}

const styles = StyleSheet.create({
   
    picStyle:{
      width:414,
      height:896,
    },
    startbtn:{
      width:150,
      height:70,
      marginBottom:130
    }


  });

  export default Start;