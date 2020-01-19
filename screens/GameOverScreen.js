import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.jpg')} resizeMode="cover" />
            </View>
            <View >
            <Image  fadeDuration={1000} 
            // source={{
            //     uri:"https://previews.123rf.com/images/dizanna/dizanna1602/dizanna160202120/52562960-succeed-word-cloud-business-concept.jpg"}} 
                resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>Your phone guessed the <Text style={styles.highlight}>{props.userNumber}</Text> in <Text style={styles.highlight}>{props.roundsNumber}</Text> try</BodyText>
            </View>
            <MainButton  onPress={props.onNewGame} >NEW GAME</MainButton>
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
        width:200,
        height:200,
        borderRadius:100,
        borderWidth:3,
        borderColor: 'black',
        overflow:'hidden'
    },
    highlight:{        
        fontFamily:'open-sans-bold'
    },
    resultContainer:{
        marginHorizontal: 20
    },
    resultText:{
        fontSize:28,
        textAlign:'center'
    }
});

export default GameOverScreen;