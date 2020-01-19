import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.jpg')} resizeMode="cover" />
            </View>
            <View style={styles.imageContainer}>
            <Image style={styles.image} fadeDuration={1000} source={{
                uri:"https://previews.123rf.com/images/dizanna/dizanna1602/dizanna160202120/52562960-succeed-word-cloud-business-concept.jpg"
            }} resizeMode="cover" />
            </View>
            <BodyText>Number Of Rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number Was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onNewGame} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:3,
        borderColor: 'black',
        overflow:'hidden'
    }
});

export default GameOverScreen;