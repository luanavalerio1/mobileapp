import React from 'react';
import { FlatList, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) {
    const slide3 = require("../../assets/image11.png")
    const slide3Texts = [
        { id: '1', text: 'WELCOME TO LUANA`S BAKERY' },
    ]
    return (
        <>
            <View style={styles.panel} >
                <ComponentTitleSlider titleI='Our Menu' />
            </View>
            <View style={styles.buttonSlider} >
                <ComponentButtonSlider onPressI={() => setPageI(1)} />
                <ComponentButtonSlider onPressI={() => setPageI(2)
                } />
                <ComponentButtonSlider onPressI={() => setPageI(3)} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} />
            </View>
        </ >


    );
}



