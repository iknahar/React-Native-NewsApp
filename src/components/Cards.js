import React from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch , useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

const Cards = props => {


    const dispatch = useDispatch();

    const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));

    return (
        <TouchableOpacity onPress={() => {
                props.navigation.navigate({ routeName:'NewsItem'})
            }
        }>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    {/* <Image style={styles.image} source={ require('../../assets/ScreenShot_20220108152310.png') }/> */}
                    <Image style={styles.image} source={{ uri: props.image }} />
                </View>
                {/* //.length > 25 ? props.title.splice(0, 25) : props.title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title.length >25 ? props.title.slice(0,25)+'...': props.title}</Text>
                    <MaterialIcons
                        name={ isFav ? 'favorite': 'favorite-border'}
                        size={24} color="#72bcd4"
                        onPress={() => {
                            dispatch(newsAction.toggleFav(props.url))
                        }}
                    
                    />
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{props.description.length >150 ? props.description.slice(0,150)+'...': props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: '#72bcd4',
        shadowOpacity: .65,
        shadowOffset: { width: 15, height: 10 },
        shadowRadius: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 25,
        height: 300,
        margin: 20,
    },
    imageContainer: {
        width: '100%',
        height: '52%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
        // resizeMode: 'contain',
        resizeMode: 'cover',


    },

    titleContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // justifyContent:'center'
    },
    title: {
        fontFamily: 'newsreader-semibold',
        fontWeight: 'bold',
        marginTop: 4,
        fontSize: 16,
    },
    description: {
        paddingHorizontal: 20,
        overflow:'hidden'
    },
    descriptionText: {
        fontFamily: 'newsreader-light',
        marginTop: 5,
        fontSize: 14,
    }

});

export default Cards;