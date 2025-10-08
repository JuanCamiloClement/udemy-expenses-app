import type { Expense } from './types';
import { GlobalStyles } from './styles';

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2025-09-17'),
  },
  {
    id: 'e2',
    description: 'Trousers',
    amount: 89.99,
    date: new Date('2025-04-21'),
  },
  {
    id: 'e3',
    description: 'Bananas',
    amount: 5.99,
    date: new Date('2024-12-09'),
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 14.99,
    date: new Date('2025-02-19'),
  },
  {
    id: 'e5',
    description: 'Book 2',
    amount: 18.59,
    date: new Date('2024-11-12'),
  },
];
