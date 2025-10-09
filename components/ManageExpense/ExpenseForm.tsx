import { View, TextInputProps, StyleSheet, Text } from 'react-native';

import { Input } from './Input';

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});

export const ExpenseForm = () => {
  const amountInputConfig: TextInputProps = {
    keyboardType: 'decimal-pad',
    onChangeText: () => {},
  };
  const dateInputConfig: TextInputProps = {
    placeholder: 'YYYY-MM-DD',
    maxLength: 10,
    onChangeText: () => {},
  };
  const descriptionInputConfig: TextInputProps = {
    multiline: true,
    autoCorrect: false,
    onChangeText: () => {},
    // autoCapitalize: 'sentences', // default
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input label="Amount" style={styles.rowInput} textInputConfig={amountInputConfig} />
        <Input label="Date" style={styles.rowInput} textInputConfig={dateInputConfig} />
      </View>
      <Input label="Description" textInputConfig={descriptionInputConfig} />
    </View>
  );
};
