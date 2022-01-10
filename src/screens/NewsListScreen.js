import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Cards from '../components/Cards';
import { useSelector, useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

const NewsListScreen = props => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(newsAction.fetchArticles())
    },[dispatch]);


    const articles = useSelector(state => state.news.articles);
    console.log(articles);
  
    return (

        <FlatList
            data={articles}
            keyExtractor={item => item.url}
            renderItem={({ item }) => (
                <Cards
                    navigation={props.navigation}
                    title={item.title}
                    description={item.description}
                    image={item.urlToImage}
                    url={item.url}
                />
            )}
        />
        // <View>
        //     <Cards navigation={props.navigation} />
        // </View>
    );
};

const styles = StyleSheet.create({


});

export default NewsListScreen;