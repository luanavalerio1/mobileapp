import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';
import React from 'react'

export interface IBSInterface extends TouchableOpacityProps{
  onPressI: () => void;
  title: string
  type: 'primary' | 'secondary' | 'third'
}

export function ButtonInterface({ onPressI, title, type }: IBSInterface) {
  return (
    <TouchableOpacity style={
      type == 'primary' ? styles.buttonPrimary :
      type == 'secondary' ? styles.buttonSecondary :
      styles.buttonThird
    } onPress={onPressI}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
      
  );
}
