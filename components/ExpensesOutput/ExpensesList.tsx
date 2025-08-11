import { FlatList, Text } from 'react-native';

export const ExpensesList = () => {
  return <FlatList data={[]} renderItem={() => <Text>Item</Text>} />;
};
