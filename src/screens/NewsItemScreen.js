import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useSelector , useDispatch} from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

const NewsItemScreen = props => {
   
    const articleUrl = props.navigation.getParam('articleUrl');
    const dispatch = useDispatch();
    const article = useSelector(state => state.news.articles.find(article => article.url === articleUrl));
    const isFav = useSelector(state => state.news.favorites.some(article => article.url === articleUrl));
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}> {article.title} </Text>
           </View>
            <View>
                <ImageBackground source={{uri: article.urlToImage}} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.author}> {article.author} </Text>
                        <MaterialIcons
                        name={ isFav ? 'favorite': 'favorite-border'}
                            size={24} color="#72bcd4"
                            onPress={() => {
                                dispatch(newsAction.toggleFav(article.url))
                            }}
                        />
                    </View>
                </ImageBackground>
           </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}> {article.description} </Text>
           </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        margin: 10
    },
    heading: {
        
        marginBottom:10,
    },
    title: {
        fontFamily: 'newsreader-semibold',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'dodgerblue'
    },
    image: {
        width: '100%',
        height: 300,
        justifyContent:'flex-end'
        
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    author: {
        fontFamily: 'newsreader-light',
        color:'white',
        fontSize: 18,
    },
    description: {
        margin:10
    },
    descriptionText: {
        fontFamily: 'newsreader-light',
        fontSize: 16,
        color:'black'
    },
    
});

export default NewsItemScreen;