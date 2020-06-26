import React, {Component} from "react";
import Swiper from 'react-native-swiper'
import {Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView,Modal,Button,backgroundColor} from 'react-native';
import { getCurrentFrame } from "expo/build/AR";
const image = { uri: "https://github.com/tinghui522/Chilly/blob/master/assets/start_img1.png?raw=true" };

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
                    
                    <Onboarding bottomBarHeight={false}  bottomBarHighlight={ false } showSkip={false} showNext={false}
                      pages={[
                        {
                          image: <Image style={styles.picStyle} source={require('../assets/start_img1.png')} />,
                        },
                      ]}
                    />
                       <TouchableOpacity  onPress={() => {this.setState({modalVisible:false})}}> 
                        <Image style={{ width: 150, height: 50 ,marginLeft:132,marginBottom:85}}
                                source={require('../assets/bottom1.png')}
                        />
                      </TouchableOpacity>  
                      
              </Modal>
            </View>
    )
  }
}



   
const styles = StyleSheet.create({
   
    picStyle:{
      width:414,
      height:896
    }


  });

  export default Start;