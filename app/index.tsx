import { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";
import globalStyles from '../styles/AppStyles'
import appColors from '../styles/AppColors';

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{...globalStyles.headline, textAlign: 'center'}}>Water Tracker</Text>
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
  }
})
