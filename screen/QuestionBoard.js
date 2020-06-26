import React from "react";
import { ScrollView } from 'react-native';
import {Image} from 'react-native-elements';

// Make a component
const QuestionBoard = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 0}}>
            <Image style={{ width:null,height:896 }}
              source={require('../assets/splash.jpg')}
        />
        </ScrollView>
    );
}

export default QuestionBoard;