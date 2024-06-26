import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import appColors from '@/styles/AppColors';

export enum GoalStatus {
    InProgress = 'inProgress',
    Done = 'done'
}

export interface Goal {
    text: string,
    id: number,
    status: GoalStatus.InProgress | GoalStatus.Done
}

interface Props extends Goal {
    handlePressChangeStatus: (id: number) => void
}

export const GoalElement: React.FC<Props> = ({ text, id, status, handlePressChangeStatus }) => {
    const goalStyles = status === GoalStatus.Done ? {...styles.goal, ...styles.goalDone} : styles.goal;

  return (
    <Pressable onPress={() => handlePressChangeStatus(id)} android_ripple={{ color: appColors.blue1 }}>
        <View style={goalStyles}>
            <Text style={{ color: appColors.white }}>{ text }</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    goal: {
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: appColors.blue,
        borderRadius: 10
    },
    goalDone: {
        backgroundColor: 'green'
    }
})