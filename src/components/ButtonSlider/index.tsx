import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export interface IBSlider {
  onPressI: () => void
}

export function ButtonSlider({ onPressI }: IBSlider) {
  return (
    <TouchableOpacity style={styles.ball} onPress={onPressI} />
  );
}
