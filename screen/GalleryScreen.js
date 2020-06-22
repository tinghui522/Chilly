import React, { Component,Fragment } from "react";
import {
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Platform,
  API,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Navigation
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class GalleryScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
        source={{
          uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_home.png?raw=true"
        }}
          style = {{width:45 ,height:45,marginBottom:10,marginTop:20,tintColor:tintColor}}
          />
    )
  }

  state={
    toggle:false,
    tlist1:false
  }

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  _list1Press(){
    const newState = !this.state.tlist1;
    this.setState({tlist1:newState})
  }

  render() {
    const {toggle,tlist1} = this.state;
    
    const buttonBg = toggle?"#FC6068":"rgba(0,0,0,0)";
    const textcolor = toggle?"white":"#FC6068";
    const listcolor = tlist1?"#f0f0f0":"#f8f8f8";
    
    return (
      <Fragment>
      
      <View style={{ backgroundColor: '#41627D' }}>   
        <View style={styles.container2}>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",marginLeft:178,marginTop:55}}>Chilly</Text>
            
        </View>
        </View>
     
      <ScrollView style={styles.contentStyle}>
        
        <View style={[styles.listStyle,{backgroundColor:listcolor}]}>
        <View style={styles.titleStyle}>
        <TouchableOpacity >
        <Image
          style={styles.arrowStyle}
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/arrow.png?raw=true"
          }}
        />
        </TouchableOpacity>
        <Image
          style={styles.penguinStyle}
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/Group%2014.png?raw=true"
          }}
        />
      </View>

    <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.bigimgStyle}
          source={{
            uri:
              "https://github.com/tinghui522/APPmidterm/blob/master/img/big_img.png?raw=true"
          }}
        />
        <Text style={styles.textStyle1}>Penguins belong to the penguin family Penguinidae and are a kind of flightless birds. 
                                        Mainly living in the southern hemisphere, it is known that there are 19 species of penguins in the world, 
                                        and two are extinct. Most distribution in the Antarctic region, of which the penguins of the genus Humboldt penguin, 
                                        Magellanic penguins and African Penguin distributed in the lower latitudes temperate regions, 
                                        as for the distribution of Galapagos penguin is even more close to the equator; 
                                        live entirely in the polar only the emperor penguin and Adelie penguins two kinds.</Text>
        <View style={styles.imgback1Style}>
          <Image
                style={styles.image1Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/penguin1.png?raw=true"
                }}
              />
        </View>
        <View style={styles.imgback2Style}>
          <Image
                style={styles.image2Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/penguin2.png?raw=true"
                }}
              />
        </View>
        <View style={styles.imgback3Style}>
          <Image
                style={styles.image3Style}
                source={{
                  uri:
                    "https://github.com/tinghui522/APPmidterm/blob/master/img/video.png?raw=true"
                }}
              />
        </View>
      </View>
      
        </View>
        <View style={styles.cardContainer1Style}>

        </View>
        </View>
       
      </ScrollView>
    </Fragment>  

    )
  }

}

export default GalleryScreen;

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
  },
  headerStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: '#00b49f' 
  },
  arrowStyle:{
    width:30,
    height:30,
    marginTop:20,
    marginLeft:20,
  },
  penguinStyle:{
    width:150,
    height:50,
    marginTop:-40,
    marginLeft:290,
  },
  cardContainerStyle:{
    width:414,
    height:1000,
    marginTop:120,
    backgroundColor:"#B9D5F2",
    borderRadius:40
  },
  bigimgStyle:{
    width:340,
    height:240,
    justifyContent:"center",
    alignContent:"center",
    marginLeft:37,
    marginTop:-100
  },
  textStyle1:{
    width:320,
    fontSize:18,
    marginLeft:47,
    marginTop:30
  },
  imgback1Style:{
    width:149,
    height:137,
    marginLeft:40,
    backgroundColor:"#207AD9",
    marginTop:40,
    borderRadius:30
  },
  image1Style:{
    width:149,
    height:137,
    marginLeft:-10,
    marginTop:-5,
  },
  imgback2Style:{
    width:140,
    height:140,
    marginLeft:230,
    backgroundColor:"#207AD9",
    marginTop:-140,
    borderRadius:30
  },
  image2Style:{
    width:140,
    height:140,
    marginLeft:-10,
    marginTop:-5,
  },
  imgback3Style:{
    width:313,
    height:162,
    marginLeft:43,
    backgroundColor:"#207AD9",
    marginTop:50,
    borderRadius:30
  },
  image3Style:{
    width:313,
    height:162,
    marginLeft:-10,
    marginTop:-5,
  },
  cardContainer1Style:{
    width:414,
    height:30,
    marginTop:-30,
    backgroundColor:"#B9D5F2",
   
  },
});