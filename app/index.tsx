import { useState } from "react";
import { TextInput, View, Button } from "react-native";
import AppList, { TaskStatus } from '../components/AppList';
import type { TasksList } from '../components/AppList';

export default function Index() {
  const [taska, setTasks] = useState<TasksList[] | []>([]);
  const [text, setText] = useState('');

  const handlePressAddNewTask = () => {
    const newTask = {
      id: Date.now(),
      text,
      status: TaskStatus.InProgress
    }

    const newTasksList = [...taska, newTask];
    setTasks(newTasksList);
    setText('');
  }

  const handleClickRemoveTask = (id: number) => {
    console.log(id)
  }

  const handleClickChangeStatus = (id: number) => {
    console.log(id)
  }

  return (
    <View>
      <AppList tasksList={taska} handleClickRemoveTask={handleClickRemoveTask} handleClickChangeStatus={handleClickChangeStatus}  /> 
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New Task"
      />
      <Button title="Add" onPress={handlePressAddNewTask} />
    </View>
  );
}
