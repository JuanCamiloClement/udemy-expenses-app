import { View, Text } from 'react-native';

import type { Expense } from '../../constants/types';

type ExpensesSummaryProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

export const ExpensesSummary = ({ expenses, expensesPeriod }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <View>
      <Text>{expensesPeriod}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
