import React from 'react';
import { View, Text } from 'react-native';

import HomeDetail from './contentscreen/HomeDetail'
import MybookDetail from './contentscreen/MybookDetail'

export default class App extends React.Component {

  render() {
    return(
        <View style={{flex:1}}>
          <Image style={{width:414,height:896,justifyContent:"center",alignContent:"center"}}
                    source={{
                      uri: " https://github.com/tinghui522/APPmidterm/blob/master/img/start_img1.png?raw=true"
                    }}
                  />
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.push('MybookDetail')}>
                    <Image style={{width:150,height:50,justifyContent:"center",alignContent:"center",marginLeft:132,marginTop:680}}
                    source={{
                      uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/bottom1.png?raw=true"
                    }}
                  />
                </TouchableOpacity>
            </View>
            
        </View>
    );
  }
}
