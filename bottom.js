import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,AsyncStorage  } from 'react-native';
import { SplashScreen } from 'expo';

import HomeScreen from './screen/HomeScreen';
import GalleryScreen from './screen/GalleryScreen';
import IcgmrScreen from "./screen/IcgmrScreen";
import ChatScreen from "./screen/ChatScreen";
import CHAPTER01 from "./story/Story1";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PERSISTENCE_KEY = "NAVIGATION_STATE";

const JournalStack = ({}) => {
  return (
      
      <Stack.Navigator>
        <Stack.Screen name="  "component={JournalScreen}  
        options={{
          headerStyle:{
            height:0,
          }
        }} />
        <Stack.Screen name="CHAPTER 01"component={CHAPTER01} /> 
      </Stack.Navigator>
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

            if (route.name === 'Home') {
              iconPath = focused
              ? require('./assets/btn_penguin.png'):
              require('./assets/btn_home.png');
            } else if (route.name === 'Gallery') {
              iconPath = focused
              ? require('./assets/btn_book.png'):
              require('./assets/btn_gallery.png');
            } else if (route.name == 'Icgmr') {
              iconPath = focused
              ? require('./assets/btn_snowman.png'):
              require('./assets/btn_icgmr.png');
            } else if (route.name == 'Q and A') {
              iconPath = focused
              ? require('./assets/btn_question.png'):
              require('./assets/btn_qanda.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 43, height: 43}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#13EBAB',
          inactiveTintColor: '#FFFFFF',
          labelStyle: {
            fontSize: 11,
            marginTop: 0,
            padding: 0,
            fontWeight:"bold"
          },
          style:{height:120,backgroundColor:"#41627D"}
          
        }}
        
      >
        <Tab.Screen name="Home" component={JournalStack} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Icgmr" component={IcgmrScreen} />
        <Tab.Screen name="Q qnd A" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

}

export default App;