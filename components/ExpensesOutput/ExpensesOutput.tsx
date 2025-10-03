import { View, StyleSheet } from 'react-native';

import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';
import type { Expense } from '../../constants/types';
import { GlobalStyles } from '../../constants/styles';

type ExpensesOutputProps = {
  expenses?: Expense[];
  expensesPeriod: string;
};

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2025-09-17'),
  },
  {
    id: 'e2',
    description: 'Trousers',
    amount: 89.99,
    date: new Date('2025-04-21'),
  },
  {
    id: 'e3',
    description: 'Bananas',
    amount: 5.99,
    date: new Date('2024-12-09'),
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 14.99,
    date: new Date('2025-02-19'),
  },
  {
    id: 'e5',
    description: 'Book 2',
    amount: 18.59,
    date: new Date('2024-11-12'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export const ExpensesOutput = ({ expenses = DUMMY_EXPENSES, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
