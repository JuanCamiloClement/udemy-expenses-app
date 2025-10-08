import { createContext } from 'react';

import type { Expense } from '../../constants/types';

type ExpensesContextProps = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: Expense) => void;
};

export const ExpensesContext = createContext<ExpensesContextProps>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});
