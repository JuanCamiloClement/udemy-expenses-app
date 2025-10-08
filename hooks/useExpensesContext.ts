import { useContext } from 'react';

import { ExpensesContext } from '../store/ExpensesContext/ExpensesContext';

export const useExpensesContext = () => {
  return useContext(ExpensesContext);
};
