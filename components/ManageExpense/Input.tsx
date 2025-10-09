import { ComponentProps } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

type InputProps = {
  label: string;
  textInputConfig: ComponentProps<typeof TextInput>;
  style?: ComponentProps<typeof TextInput>['style'];
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export const Input = ({ label, style, textInputConfig }: InputProps) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, textInputConfig.multiline && styles.multilineInput]} {...textInputConfig} />
    </View>
  );
};
