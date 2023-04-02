import { Text, View, Image } from 'react-native'
import { styles } from './styles'
export interface ITextMarker {
    textMarker: string 
}
export function ListMarker({ textMarker }: ITextMarker ){
    return (
        <View style={styles.listMarker}>
            <Text style={styles.textMarker} >{textMarker}</Text>
        </View>

    )
}