import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';


import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';
import FavoritesScreen from '../screens/FavouriteScreen';

const StackNavigator = createStackNavigator({

    News: {
        screen: NewsListScreen
    },
    NewsItem: {
        screen: NewsItemScreen,
        navigationOptions: {
            headerTitle:'News Description'
        }
    }
});




// const DrawerNavigator = createDrawerNavigator();



// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default createAppContainer(StackNavigator);