import React from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Cards = props => {

    return (
        <TouchableOpacity onPress={() => {
                props.navigation.navigate({ routeName:'NewsItem'})
            }
        }>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    {/* <Image style={styles.image} source={ require('../../assets/ScreenShot_20220108152310.png') }/> */}
                    <Image style={styles.image} source={{ uri: 'https://www.who.int/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1024v.jpg?Culture=en&sfvrsn=4dba955c_6' }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Covid cases top 1.17 lakh; infection spreads among doctors</Text>
                    <MaterialIcons name="favorite-border" size={24} color="#72bcd4" />
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>India revised the home quarantine rules for international arrivals as the country’s Covid-19 count surged to more than 1.17 lakh infections on Friday. </Text>
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
        paddingHorizontal: 20
    },
    descriptionText: {
        fontFamily: 'newsreader-light',
        marginTop: 5,
        fontSize: 14,
    }

});

export default Cards;