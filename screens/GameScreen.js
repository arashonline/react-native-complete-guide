import React, {useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';

const generateRandomBetween = (min,max,exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    
    const randNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randNumber === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return randNumber;
    }
}

const GameScreen = props =>{
    const [currentGuess,setCurrentGuess]= useState(generateRandomBetween(1,100,props.userChoice))
    return (
        <View></View>
        );
}

const style = StyleSheet.create({

});

export default GameScreen;