import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabsNavigator } from './BottomTabsNavigator';
import { ManageExpenseScreen } from '../screens/ManageExpenseScreen';

const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack" component={BottomTabsNavigator} />
      <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
    </Stack.Navigator>
  );
};
