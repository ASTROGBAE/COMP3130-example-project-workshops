import { StyleSheet, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import AppColors from './app/config/AppColors';
import WelcomeScreen from './app/screens/WelcomeScreen';

// custom components

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
