import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export interface IBSlider {
  onPressI: () => void;
  texto: string;
}

export function ButtonSlider({ onPressI, texto }: IBSlider) {
  return (
    <TouchableOpacity style={styles.ball} onPress={onPressI}>
      <Text>{texto}Cadastrar</Text>
    </TouchableOpacity>
  );
}
