import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Cards from '../components/Cards';


const NewsListScreen = props => {
    console.log(props);
    return (
        <View>
            <Cards navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({


});

export default NewsListScreen;