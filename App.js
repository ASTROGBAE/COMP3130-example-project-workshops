import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppText from './components/AppText';
import AppColors from './config/AppColors'; // TODO find better config for this?
import AppButton from './components/AppButton'; // TODO find better config for this?

// custom components

export default function App() {
  return (
    <View style={styles.container}>
      <AppText>Imagine.</AppText>
      <AppButton>Enter</AppButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
