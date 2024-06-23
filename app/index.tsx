import { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";
import AppList, { TaskStatus } from '../components/AppList';
import globalStyles from '../styles/AppStyles'
import appColors from '../styles/AppColors';
import type { TasksList } from '../components/AppList';

export default function Index() {
  const [tasks, setTasks] = useState<TasksList[] | []>([]);
  const [text, setText] = useState('');
  const [isNotValid, setIsNotValid] = useState(false);

  const handlePressAddNewTask = () => {
    if(!text.length) {
      setIsNotValid(true);
      return;
    }

    const newTask = {
      id: Date.now(),
      text,
      status: TaskStatus.InProgress
    }

    const newTasksList = [...tasks, newTask];
    setTasks(newTasksList);
    setText('');
  }

  const handleClickRemoveTask = (id: number) => {
    const tasksListWithRemovedTask = tasks.filter(task => task.id !== id);
    setTasks(tasksListWithRemovedTask);
  }

  const handleClickChangeStatus = (id: number) => {
    console.log(id)
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{...globalStyles.headline, textAlign: 'center'}}>Water Tracker</Text>
      </View>
      <AppList tasksList={tasks} handleClickRemoveTask={handleClickRemoveTask} handleClickChangeStatus={handleClickChangeStatus}  /> 
      {isNotValid && <Text>Task cannot be empty!</Text>}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New Task"
        style={globalStyles.input}
      />
      <Button color='green' title="Add new task" onPress={handlePressAddNewTask} />
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
  }
})
