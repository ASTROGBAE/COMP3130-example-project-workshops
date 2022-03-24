import { StyleSheet, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import AppColors from './app/config/AppColors';

// custom components

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
