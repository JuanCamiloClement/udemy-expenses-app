import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackNavigator } from './navigators/RootStackNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}
