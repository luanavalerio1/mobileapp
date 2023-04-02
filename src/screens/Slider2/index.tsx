import React from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider, ComponentListMarker
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
    const SlideTexts = [
        { id: '1', text: 'Iced Coffee Cocktail', img: "imagem1.png" },
        { id: '2', text: 'Vietnamese Iced Coffee', img: "slide3b.png" },
        { id: '3', text: 'Iced Coffee', img: "slide3c.png" },

    ] 
    return (
        <>
       < View style={styles.panel} />
                    <ComponentTitleSlider titleI='COFFES' />
                    <FlatList
                    data={SlideTexts}
                    renderItem={({item}) =>
                <ComponentListMarker key={item.id} textMarker={item.text} />
}
/> 
                    <View style={styles.buttonSlider} >
                    <ComponentButtonSlider onPressI={() => setPageI(1)} />
                    <ComponentButtonSlider onPressI={() => setPageI(2)} />
                    <ComponentButtonSlider onPressI={() => setPageI(3)} />
                    <ComponentButtonSlider onPressI={() => setPageI(4)} />
                    
                </View>
                
            

        </ >


    
    );
}