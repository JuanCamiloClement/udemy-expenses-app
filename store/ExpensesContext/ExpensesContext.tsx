import { createContext } from 'react';

import type { Expense } from '../../constants/types';

export type ExpenseData = Omit<Expense, 'id'>;

type ExpensesContextProps = {
  expenses: Expense[];
  addExpense: (expense: ExpenseData) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: ExpenseData) => void;
};

export const ExpensesContext = createContext<ExpensesContextProps>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});
