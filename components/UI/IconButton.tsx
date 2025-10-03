import { ComponentProps } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  icon: ComponentProps<typeof Ionicons>['name'];
  size: ComponentProps<typeof Ionicons>['size'];
  color: ComponentProps<typeof Ionicons>['color'];
  onPress: () => void;
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});

export const IconButton = ({ icon, onPress, ...rest }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} {...rest} />
      </View>
    </Pressable>
  );
};
