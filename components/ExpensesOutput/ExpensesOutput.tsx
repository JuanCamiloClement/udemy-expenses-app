import { View } from 'react-native';

import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';
import type { Expense } from '../../constants/types';

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

export const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};
