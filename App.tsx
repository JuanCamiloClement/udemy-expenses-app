import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackNavigator } from './navigators/RootStackNavigator';
import { ExpensesProvider } from './store/ExpensesContext/ExpensesProvider';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </ExpensesProvider>
    </>
  );
}
