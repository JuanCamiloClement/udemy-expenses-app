import { useReducer } from 'react';

import { ExpensesContext } from './ExpensesContext';
import type { Expense } from '../../constants/types';
import { DUMMY_EXPENSES } from '../../constants/data';

type ExpenseData = Omit<Expense, 'id'>;

type Action = {
  type: 'ADD' | 'DELETE' | 'UPDATE';
  payload: { id: string } | ExpenseData | Expense;
};

const expensesReducer = (state: Expense[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      const id = Math.random().toString();
      return [{ id, ...(action.payload as ExpenseData) }, ...state];
    case 'DELETE':
      return state.filter((expense) => expense.id !== (action.payload as { id: string }).id);
    case 'UPDATE':
      const filteredExpenses = state.filter((expense) => expense.id !== (action.payload as Expense).id);
      return [action.payload as Expense, ...filteredExpenses];
    default:
      return state;
  }
};

export const ExpensesProvider = ({ children }: { children: React.ReactNode }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expense: ExpenseData) => {
    dispatch({ type: 'ADD', payload: expense });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const updateExpense = (id: string, expenseData: ExpenseData) => {
    dispatch({ type: 'UPDATE', payload: { id, ...expenseData } });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
