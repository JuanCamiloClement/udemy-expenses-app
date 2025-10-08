import { View, StyleSheet } from 'react-native';

import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';
import type { Expense } from '../../constants/types';
import { GlobalStyles } from '../../constants/styles';
import { DUMMY_EXPENSES } from '../../constants/data';

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
