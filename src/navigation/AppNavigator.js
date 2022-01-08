import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';

const AppNavigator = createStackNavigator({
    News: NewsListScreen,
    NewsItem: NewsItemScreen
});

export default createAppContainer(AppNavigator);