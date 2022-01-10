import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Image,  } from 'react-native';
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
        <View>
            <Cards navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({


});

export default NewsListScreen;