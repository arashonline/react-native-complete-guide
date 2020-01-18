import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

import DefaultStyles from "../constants/default-styles"

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0)

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice,onGameOver}=props;

  useEffect(() => {
    if(currentGuess === userChoice){
      onGameOver(rounds)
    }
  }, [currentGuess,userChoice,onGameOver])

  const nextGuessHandler = direction =>{
    if(
      (direction === 'lower' && currentGuess <props.userChoice)||
      (direction === 'higher' && currentGuess >props.userChoice)
    ){
      Alert.alert(
        'Don\'t Lie!)',
      'Pick the correct side!',
      [{text:'Sorry!',style:'cancel'}]
      );
      return;
    }
    if(direction === 'lower'){
      currentHigh.current = currentGuess;
    }else{
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRound => currentRound +1)
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Computer Guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button title="Higher" onPress={nextGuessHandler.bind(this, 'higher')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%"
  },
  listContainer: {
    flex: 1,
    width: "60%"
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default GameScreen;
