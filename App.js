import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';
import AppColors from './app/config/AppColors'; // TODO find better config for this?
import AppButton from './app/components/AppButton'; // TODO find better config for this?
import LoginScreen from './app/screens/LoginScreen';

// custom components

export default function App() {
  return (
    <View>
      <LoginScreen/>
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
