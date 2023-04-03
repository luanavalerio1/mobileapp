import React from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider, ComponentListMarker
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage) {
    const SlideTexts = [
        { id: '1', text: 'Sachertote', img: "slide4a.png" },
        { id: '2', text: 'La Religieuse', img: "slide4b.png" },
        { id: '3', text: 'Macaronade', img: "slide4c.png" },

    ] 
    return (
        <>
       < View style={styles.panel} />
                    <ComponentTitleSlider titleI='SWEETS' />
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
                    <ComponentButtonSlider onPressI={() => setPageI(5)} />
                    
                </View>
                
            

        </ >


    
    );
}