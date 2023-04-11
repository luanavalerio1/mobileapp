import React from 'react'
import { Text, View, Image, ImageSourcePropType } from 'react-native'
import { styles } from './styles'
export interface ITextMarker {
    textMarker: string 
    image: ImageSourcePropType
}
export function ListMarker({ textMarker, image }: ITextMarker ){
    return (
        <View style={styles.listMarker}>
            <Image source={image} style={styles.imagem} />
            <Text style={styles.textMarker} >{textMarker}</Text>
    
            
            
        </View>

    )
}
