import  React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Header = props =>{
    return (
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{ props.title }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90 ,
        paddingTop: 32,
        // backgroundColor: '#f7287b',
        backgroundColor: '#0074D9',
        alignItems:'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: 'white',
        fontWeight: '800',
        fontSize: 20
    }
});

export default Header;
