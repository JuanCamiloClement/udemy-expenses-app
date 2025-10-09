import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { useExpensesContext } from '../hooks/useExpensesContext';
import { getDateMinusDays } from '../utils/date';

export const RecentExpensesScreen = () => {
  const { expenses } = useExpensesContext();
  const recentExpenses = expenses.filter((expense) => {
    const dateMinus7Days = getDateMinusDays(new Date(), 7);
    return expense.date > dateMinus7Days;
  });
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};
