import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
export interface IBSlider {
    onPressI: () => void
}
export function ButtonSlider({ onPressI, texto }: IBSlider) {
    return (
        < TouchableOpacity style={styles.Text} onPress={onPressI} >
        <Text>{texto}</Text>
        ?</TouchableOpacity>
    ) 

}