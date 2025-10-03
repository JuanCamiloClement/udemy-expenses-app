import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigator } from './BottomTabNavigator';
import { ManageExpenseScreen } from '../screens/ManageExpenseScreen';
import { GlobalStyles } from '../constants/styles';

const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Stack" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpenseScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};
