import { Text } from 'react-native';

import { ManageExpenseScreenProps } from '../constants/types';
import { useLayoutEffect } from 'react';

export const ManageExpenseScreen = ({ navigation, route }: ManageExpenseScreenProps) => {
  const isEditing = !!route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <Text>Manage expense screen</Text>;
};
