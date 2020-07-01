import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image , AsyncStorage } from 'react-native';
import { SplashScreen } from 'expo';

import HomeScreen from './screen/HomeScreen';
import GalleryScreen from './screen/GalleryScreen';
import IcgmrScreen from "./screen/IcgmrScreen";
import QuestionBoard from "./screen/QuestionBoard";
import ChatScreen1 from './screen/ChatScreen1';

// import GalleryStack from './screen/GalleryStack';
import PenguinScreen from './screen/PenguinScreen';
import SealScreen from './screen/SealScreen';
import GullScreen from './screen/GullScreen';
import KillerScreen from './screen/KillerScreen';
import CuteScreen from './screen/CuteScreen';
import AuroraScreen from './screen/AuroraScreen';


const Tab = createBottomTabNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";

const Stack = createStackNavigator();
function JournalStack () {
  return (
      
      <Stack.Navigator>
       <Stack.Screen name=" "component={HomeScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
         <Stack.Screen name="Penguin" component={PenguinScreen} />
        <Stack.Screen name="Seal" component={SealScreen} />
        <Stack.Screen name="Sea Gull" component={GullScreen} />
        <Stack.Screen name="Killer Whale" component={KillerScreen} />
      </Stack.Navigator>
  );
}

const StackGallery = createStackNavigator();

function GalleryStack () {
  return(
    <StackGallery.Navigator>
      <StackGallery.Screen name=" "component={GalleryScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
      <StackGallery.Screen name="Penguin" component={PenguinScreen} />
        <StackGallery.Screen name="Seal" component={SealScreen} />
        <StackGallery.Screen name="Sea Gull" component={GullScreen} />
        <StackGallery.Screen name="Killer Whale" component={KillerScreen} />
        <StackGallery.Screen name="Cute Scene" component={CuteScreen} />
        <StackGallery.Screen name="Aurora" component={AuroraScreen} />

    </StackGallery.Navigator>
  );
}

const StackQanda = createStackNavigator();
function ChatStack () {
  return (
      
      <StackQanda.Navigator>
       <StackQanda.Screen name=" "component={ChatScreen1}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />  
        
        <StackQanda.Screen name="QuestionBoard" component={QuestionBoard} /> 
       
      </StackQanda.Navigator>
  );
}




const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
    <NavigationContainer 
        initialState={initialNavigationState}
        onStateChange={(state)=>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === '首頁') {
              iconPath = focused
              ? require('./assets/igloo-96.png'):
              require('./assets/home_2.png');
            } else if (route.name === '圖集') {
              iconPath = focused
              ? require('./assets/btn_book.png'):
              require('./assets/btn_gallery.png');}
            //  else if (route.name == 'Icgmr') {
            //   iconPath = focused
            //   ? require('./assets/btn_snowman.png'):
            //   require('./assets/btn_icgmr.png');
            // } 
            else if (route.name == '討論區') {
              iconPath = focused
              ? require('./assets/btn_question.png'):
              require('./assets/btn_qanda.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 45, height: 45}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#13EBAB',
          inactiveTintColor: '#FFFFFF',
          labelStyle: {
            fontSize: 13,
            marginTop: -3,
            padding: 0,
            fontWeight:"600"
          },
          style:{height:120,backgroundColor:"#3D4A7E"}
          
        }}
        
      >
        <Tab.Screen name="首頁" component={JournalStack} />
        <Tab.Screen name="圖集" component={GalleryStack} />
        {/* <Tab.Screen name="Icgmr" component={IcgmrScreen} /> */}
        <Tab.Screen name="討論區" component={ChatStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

}

export default App;