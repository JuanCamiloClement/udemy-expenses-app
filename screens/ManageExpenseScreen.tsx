import { useLayoutEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { ManageExpenseScreenProps } from '../constants/types';
import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { Button } from '../components/UI/Button';
import { useExpensesContext } from '../hooks/useExpensesContext';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

export const ManageExpenseScreen = ({ navigation, route }: ManageExpenseScreenProps) => {
  const { addExpense, deleteExpense, updateExpense } = useExpensesContext();
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (isEditing) {
      updateExpense(expenseId, { description: 'Test', amount: 19.99, date: new Date() });
    } else {
      addExpense({ description: 'Test', amount: 19.99, date: new Date() });
    }
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteExpense(expenseId as string);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.root}>
      <ExpenseForm />
      <View style={styles.actionButtonsContainer}>
        <Button mode="flat" onPress={handleCancel} style={styles.actionButton}>
          Cancel
        </Button>
        <Button onPress={handleConfirm} style={styles.actionButton}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={handleDelete} />
        </View>
      )}
    </View>
  );
};
