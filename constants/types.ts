import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  BottomTab: undefined;
  ManageExpense: undefined;
};

export type ManageExpenseScreenProps = NativeStackScreenProps<StackParamList, 'ManageExpense'>;

export type UseNavigationProp = NativeStackNavigationProp<StackParamList>;

export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};
