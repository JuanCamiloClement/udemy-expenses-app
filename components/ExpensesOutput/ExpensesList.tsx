import { useCallback } from 'react';
import { FlatList } from 'react-native';

import type { Expense } from '../../constants/types';
import { ExpenseItem } from './ExpenseItem';

type ExpensesListProps = {
  expenses: Expense[];
};

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  const renderItem = useCallback(({ item }: { item: Expense }) => <ExpenseItem {...item} />, []);
  const keyExtractor = (item: Expense) => item.id;

  return <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />;
};
