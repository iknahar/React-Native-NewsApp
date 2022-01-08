import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS==='ios' ?'#fff':'#72bcd4',
        padding: 15,
        borderBottomColor: Platform.OS==='ios' ?'#72bcd4':'#ffffff',
        borderBottomWidth:1
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: Platform.OS==='ios' ?'#72bcd4':'#ffffff'
    }

});

export default Header;