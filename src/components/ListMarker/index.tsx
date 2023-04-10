import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export interface ITextMarker {
    textMarker: string;
    imageSource: string;
}

export function ListMarker({ textMarker, imageSource}: ITextMarker ){
    return (
        <View style={styles.listMarker}>
            <Image source={imagem1} style={styles.container} />
            <Text style={styles.textMarker}>{textMarker}Iced Coffee</Text>
        </View>
    );
}
