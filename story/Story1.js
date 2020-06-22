import React from "react";
import { ScrollView } from 'react-native';
import {Image} from 'react-native-elements';

// Make a component
const CHAPTER01 = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 0}}>
            <Image style={{ width:null,height:2896 }}
              source={require('../assets/story1.png')}
        />
        </ScrollView>
    );
}

export default CHAPTER01;