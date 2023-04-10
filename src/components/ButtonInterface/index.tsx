import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import React from 'react'

export interface IBSInterface {
  onPressI: () => void;
  title: string
  type: 'primary' | 'secondary'
}

export function ButtonInterface({ onPressI, title, type }: IBSInterface) {
  return (
    <TouchableOpacity style={
      type == 'primary' ? styles.buttonPrimary :
      styles.buttonSecondry
    } onPress={onPressI}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
      
  );
}
