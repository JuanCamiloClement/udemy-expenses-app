import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { useExpensesContext } from '../hooks/useExpensesContext';

export const AllExpensesScreen = () => {
  const { expenses } = useExpensesContext();
  return <ExpensesOutput expensesPeriod="Total" expenses={expenses} fallbackText="No expenses found." />;
};
