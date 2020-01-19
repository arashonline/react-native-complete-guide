import React from 'react';
import { View,Text,StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props =>{
    return (
        <View style={styles.screen}>
        <TitleText>The Game Is Over!</TitleText>
        <Image source={require('../assets/success.jpg')}/>
        <BodyText>Number Of Rounds: {props.roundsNumber}</BodyText>
        <BodyText>Number Was: {props.userNumber}</BodyText>
        <Button title="NEW GAME" onPress={props.onNewGame}/>
        </View>
        );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
});

export default GameOverScreen;