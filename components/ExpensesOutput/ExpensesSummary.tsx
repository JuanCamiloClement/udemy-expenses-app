import { View, Text, StyleSheet } from 'react-native';

import type { Expense } from '../../constants/types';
import { GlobalStyles } from '../../constants/styles';

type ExpensesSummaryProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});

export const ExpensesSummary = ({ expenses, expensesPeriod }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
