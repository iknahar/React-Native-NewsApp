import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Cards from './src/components/Cards';
import Header from './src/components/Header';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialIcons } from '@expo/vector-icons'; 
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';


const loadFonts = () => {
  return Font.loadAsync(
    {
      'newsreader': require('./assets/fonts/Newsreader-Regular.ttf'),
      'newsreader-semibold': require('./assets/fonts/Newsreader-SemiBold.ttf'),
      'newsreader-light': require('./assets/fonts/Newsreader-ExtraLight.ttf')
    }
  )
}

// const fetchFonts = () => {
//   return Font.loadAsync({               // <- add return here
//     "nrreg": require("./assets/fonts/Newsreader-Regular.ttf"),
//     "nrbold": require("./assets/fonts/Newsreader-SemiBold.ttf"),
//   });
// };
export default function App() {

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
      </Provider>
    // <View>
  
    //   <Header title="News App" />
    
    //   {/* <Cards></Cards> */}
    //   {/* <Text>Hi</Text> */}
    // </View>
  );
}


