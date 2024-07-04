import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Chip } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import globalStyles from '../styles/AppStyles'
import appColors from '../styles/AppColors';

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{...globalStyles.headline, textAlign: 'center'}}>Water Tracker App</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.sectionWithPurpos}>
          <Chip icon="information-variant">Water target: 2000 ml</Chip>
        </View>
        <View style={styles.watterProgress}>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={100}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875" 
          />
        </View>
        <View style={styles.headlineBox}>
          <Text style={styles.headlineText}>+Add a portion of water</Text>
        </View>
        <View style={styles.buttonsBox}>
          <View style={styles.innerButtonsBox}>
            <Button icon="cup" mode="contained" buttonColor={appColors.blue}>Cup (250 ml)</Button>
            <Button icon="bottle-soda-classic-outline" mode="contained" buttonColor={appColors.blue}>Bottle (1 L)</Button>
          </View>
          <Button icon="water-outline" mode="contained" buttonColor={appColors.blue}>Something else</Button>
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
  sectionWithPurpos: {
    marginBottom: 70,
    marginHorizontal: 'auto',
  },
  watterProgress: {
    marginHorizontal: 'auto',
  },
  headlineBox: {
    marginTop: 15,
    marginBottom: 30
  },
  headlineText: {
    fontSize: 18,
    fontWeight: '600',
    color: appColors.white,
    textAlign: 'center'
  },
  buttonsBox: {
    gap: 20,
    alignItems: 'center'
  },
  innerButtonsBox: {
    flexDirection: 'row',
    gap: 20
  }
})
