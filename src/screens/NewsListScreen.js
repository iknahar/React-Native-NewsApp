import React from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Cards from '../components/Cards';


const NewsListScreen = () => {

    return (
        <View>
            <TouchableOpacity onPress={()=> console.log("press")}>
                <Cards></Cards>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({


});

export default NewsListScreen;