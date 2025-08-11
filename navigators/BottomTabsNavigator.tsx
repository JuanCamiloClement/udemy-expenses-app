import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AllExpensesScreen } from '../screens/AllExpensesScreen';
import { RecentExpensesScreen } from '../screens/RecentExpensesScreen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpensesScreen} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreen} />
    </BottomTabs.Navigator>
  );
};
