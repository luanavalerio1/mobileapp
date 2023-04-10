import React from 'react';
import { FlatList, View } from 'react-native';
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
                   
                    <View style={styles.buttonSlider} >
                    <ComponentButtonSlider onPressI={() => setPageI(1)} texto={''} />
                    <ComponentButtonSlider onPressI={() => setPageI(2)} texto={''} />
                    <ComponentButtonSlider onPressI={() => setPageI(3)} texto={''} />
                    <ComponentButtonSlider onPressI={() => setPageI(4)} texto={''} />
                    <ComponentButtonSlider onPressI={() => setPageI(5)} texto={''} />
                    
                </View>
                
            

        </ >


    
    );
}