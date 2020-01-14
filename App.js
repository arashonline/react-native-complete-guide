import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal]= useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText)=>{
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = ()=>{
    setCourseGoals(currentGoals=>[...courseGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal)=><View  key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem:{
    padding:10,
    marginTop:10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth:1,
    
  }
});
