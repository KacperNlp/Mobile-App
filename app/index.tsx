import { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet, FlatList } from "react-native";
import { Link } from 'expo-router';
import { GoalElement, Goal, GoalStatus } from "@/components/GoalElement";
import globalStyles from '../styles/AppStyles'
import appColors from '../styles/AppColors';

export default function Index() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [text, setText] = useState('');

  const handleChangeStatusOfGoal = (id: number) => {
    const goalsList = [...goals];
    goalsList.forEach(goal => {
      if(goal.id === id) goal.status = goal.status === GoalStatus.Done ? GoalStatus.InProgress : GoalStatus.Done
    })

    setGoals(goalsList);
  }

  const handlePressAddNewGoal = () => {
    const goal = {
      id: Date.now(),
      text,
      status: GoalStatus.InProgress
    }

    setText('');
    setGoals([...goals, goal]);
  }

  const doneGoals = goals.filter(goal => goal.status === GoalStatus.Done);
  const inProgressGoals = goals.filter(goal => goal.status === GoalStatus.InProgress);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{...globalStyles.headline, textAlign: 'center'}}>Goal Tracker App</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.formSection}>
          <TextInput style={globalStyles.input} placeholder="Your new goal..." value={text} onChangeText={newText => setText(newText)} />
          <Button title="Add new" color={appColors.blue} onPress={handlePressAddNewGoal} /> 
        </View>
        <View style={styles.goalsList}>
          <FlatList 
            data={doneGoals} 
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <View>
                <GoalElement text={item.text} id={item.id} status={item.status} handlePressChangeStatus={handleChangeStatusOfGoal}  />
              </View>
            )}
          >
          </FlatList>
        </View>
        <View style={styles.goalsList}>
          <FlatList 
            data={inProgressGoals} 
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <View>
                <GoalElement text={item.text} id={item.id} status={item.status} handlePressChangeStatus={handleChangeStatusOfGoal}  />
              </View>
            )}
          >
          </FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: appColors.gray2,
    color: appColors.white
  },
  header: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: appColors.gray3,
  },
  body: {
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 20
  },
  formSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  goalsList: {
    marginVertical: 20
  }
})
