import { useCallback } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import type { Expense } from '../../constants/types';
import { ExpenseItem } from './ExpenseItem';

type ExpensesListProps = {
  expenses: Expense[];
  fallbackText: string;
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

export const ExpensesList = ({ expenses, fallbackText }: ExpensesListProps) => {
  const renderItem = useCallback(({ item }: { item: Expense }) => <ExpenseItem {...item} />, []);
  const keyExtractor = (item: Expense) => item.id;

  if (expenses.length === 0) {
    return <Text style={styles.text}>{fallbackText}</Text>;
  }

  return <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />;
};
