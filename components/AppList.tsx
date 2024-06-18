import React from "react";
import { Text, View } from "react-native";
import AppListElement from "./AppListElement";

export enum TaskStatus  {
    Finished = 'finished',
    InProgress = 'inProgress'
}

export interface TasksList {
    id: number,
    text: string
    status: TaskStatus
}

interface Props {
    tasksList: TasksList[];
    handleClickRemoveTask: (id: number) => void,
    handleClickChangeStatus: (id: number) => void,
}
 
const AppList: React.FC<Props> = ({ tasksList, handleClickRemoveTask, handleClickChangeStatus }) => {
    const tasksListStructure = tasksList.map(task => (
        <AppListElement
            text={task.text}
            id={task.id}
            key={task.id}
            handleClickRemoveTask={handleClickRemoveTask}
            handleClickChangeStatus={handleClickChangeStatus}
        />
    ))

    return (
        <View>
            {tasksListStructure}
        </View>
    )
}


export default AppList;