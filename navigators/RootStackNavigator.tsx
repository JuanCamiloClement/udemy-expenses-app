import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigator } from './BottomTabNavigator';
import { ManageExpenseScreen } from '../screens/ManageExpenseScreen';

const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
    </Stack.Navigator>
  );
};
