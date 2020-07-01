import React, { createContext, useState, useEffect } from "react";
import { Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,AsyncStorage,View,ScrollView,ImageBackground,SafeAreaView,Navigator } from 'react-native';
import {Image} from 'react-native-elements';
const COUNTER_KEY = "IS_HEART_PRESS";
import heartImage from "../assets/like_on.png"
import heartImageUnfill from "../assets/like_off.png"

// Make a component
const QuestionBoard = ({ navigation }) => {

    const initHeat = async () => {
        try {
            let result = await AsyncStorage.getItem(COUNTER_KEY);
            result = JSON.parse(result);
            if (result != null) {
                setValue(result);
            }
            else{
                setValue(heart);
            }
        }
        catch (error) {
            console.warn(error);
        }
    };

    const [heart, setHeart] = useState(false); /*宣告useState*/

    initHeat();

    function renderImage() { /*判斷用哪張圖片渲染*/
        let imgSrc = ''
        if (heart) {
            imgSrc = heartImage;
        }
        else {
            imgSrc = heartImageUnfill;
        }
        return (
            <Image
            style={styles.likeoff}
            source={imgSrc}
        />
        );
    }


    setValue = async (b) => {
        try {
            await AsyncStorage.setItem(COUNTER_KEY, JSON.stringify(b)); /*設定新內容*/
        } 
        catch (error) {
        }
        finally {
            setHeart(b);
        }
    };

    const plusOneFn = () => { /*給button用的函式*/
        setValue(!heart);
    }

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{paddingTop: 10}}>
            <View >
              <ImageBackground 
              style={styles.qq}
              source={require('../assets/QQ.png')}
                />  
            </View>
           {/* <Image
                style={styles.likeoff1}
                source={require('../assets/like_on.png')}
                />  */}
            
             <View style={{flex:1}}>
            <ImageBackground
            style={styles.qaa}
            source={require('../assets/A1.png')}
            />
            <Text style={styles.p1text1}>Usagyuuuuun     答：</Text> 
            <Text style={styles.p1text2}>2020.01.20</Text>
            <Text style={styles.p1text3}>在你找南極的北極熊前，我覺得你應該先找你的腦子。</Text>
            </View>
            <View>
            <TouchableOpacity
                onPress={plusOneFn}
            >
                {renderImage()}
            </TouchableOpacity>
            
            {/* <Image
            style={styles.settingbtn}
            source={require('../assets/setting.png')}
            /> */}
            </View>
            <View style={{flex:1}}>
            <ImageBackground
            style={styles.qaa1}
            source={require('../assets/A3.png')}
            />
            <Text style={styles.p2text1}>Soobin     答：</Text> 
            <Text style={styles.p2text2}>2020.01.21</Text>
            <Text style={styles.p2text3}>北極熊好可愛哦哦哦~~~ 奇優搭!!</Text>
            </View> 
            <View>
            <TouchableOpacity onPress = {() => <Image
                    style={styles.likeon}
                    source={require('../assets/like_on.png')}
                    />}>
                    <Image
                    style={styles.likeoff}
                    source={require('../assets/like_off.png')}
                    />
                </TouchableOpacity>
               
            {/* <Image
            style={styles.settingbtn}
            source={require('../assets/setting.png')}
            /> */}
            </View>

                
        </ScrollView>
        </SafeAreaView>
           );
}

const styles = StyleSheet.create({
    qq:{
        width:414,
        height:276,
    },
    likeoff1:{
        width:40,
        height:40,
        marginTop:-30,
        marginLeft:250,
    },
    qaa:{
        width:414,
        height:216,
        marginTop:5
    },
    
    p1text1:{
        marginTop:-180,
        marginLeft:100,
        fontSize:18,
        color:"#707070",
        fontWeight:"bold",
        width:200,
        height:25
    },
    p1text2:{
        marginTop:3,
        marginLeft:100,
        fontSize:12,
        color:"#707070",
        width:200,
        height:15
        
    },
    p1text3:{
        marginTop:10,
        marginLeft:100,
        fontSize:16,
        color:"#707070",
        width:240,
        height:40
    },
    settingbtn:{
        width:7,
        height:28,
        marginTop:-1,
        marginLeft:360
    },
    likeon:{
        width:40,
        height:40,
        marginTop:10,
        marginLeft:350,
    },
    likeoff:{
        width:40,
        height:40,
        marginTop:10,
        marginLeft:350,
    },
    unlikeoff:{
        width:40,
        height:40,
        marginTop:60,
        marginLeft:300,
    },
    qaa1:{
        width:414,
        height:216,
        marginTop:25
    },
    p2text1:{
        marginTop:-180,
        marginLeft:100,
        fontSize:18,
        color:"#707070",
        fontWeight:"bold",
        width:200,
        height:25
    },
    p2text2:{
        marginTop:3,
        marginLeft:100,
        fontSize:12,
        color:"#707070",
        width:200,
        height:15
    },
    p2text3:{
        marginTop:10,
        marginLeft:100,
        fontSize:16,
        color:"#707070",
        width:200,
        height:40
    },
    
  });
export default QuestionBoard;