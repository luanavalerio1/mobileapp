import React from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider, ComponentListMarker
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) {
    const image11 = require("../../assets/image11.png")
    const image11Texts = [
        { id: '1', text: 'WELCOME TO LUANA`S BAKERY' },
    ]
    return (
       <>
       
                <View style={styles.panel} >
                    <ComponentTitleSlider titleI='Our Menu' />
                    <Image source={image11} style={styles.container} />   
                    <FlatList
                        data={image11Texts}
                        renderItem={({item}) =>
                    <ComponentListMarker key={item.id} textMarker={item.text} />
    }
/>
                
                <View style={styles.buttonSlider} >
                    <ComponentButtonSlider onPressI={() => setPageI(2)} />
                    <ComponentButtonSlider onPressI={() => setPageI(3)} />
                    <ComponentButtonSlider onPressI={() => setPageI(4)} />
                    
                </View>
                </View>
            

        </ >


    );
}



