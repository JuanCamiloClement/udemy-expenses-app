import { ComponentProps } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

type ButtonProps = {
  onPress: () => void;
  mode?: 'flat';
  style?: ComponentProps<typeof View>['style'];
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});

export const Button = ({ onPress, mode, children, style }: ButtonProps) => {
  const isFlat = mode === 'flat';
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, isFlat && styles.flat]}>
          <Text style={[styles.buttonText, isFlat && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};
