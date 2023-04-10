import React from 'react';
import { FlatList, View, Image, Text} from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider, ComponentListMarker
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) {
    const image11 = require("../../assets/image11.png")
    const imagem = [
        { id: '1', text: "WELCOME TO LUANA`S BAKERY" },
    ]
    return (
       <>
       
                <View style={styles.panel} >
                    <ComponentTitleSlider titleI='Our Menu' />
                    <Image source={image11} style={styles.container} />   

                   
                <View style={styles.button} >
                    <ComponentButtonSlider texto= 'COFFES' onPressI={() => setPageI(2)} />
                    <ComponentButtonSlider texto = 'SWEET' onPressI={() => setPageI(3)} />
                    <ComponentButtonSlider texto = 'BREADS' onPressI={() => setPageI(4)} />
                   
                    
                </View>
                </View>
            

        </ >


    );
}



