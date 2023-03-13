import {  View } from 'react-native';
import { Ipage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider
}from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI}: Ipage) {
    const slide3 = require("../../assets/image11.png")
    const slide3Texts = [
        { id: '1', text: 'WELCOME TO LUANA`S BAKERY'},
    ]
    return (
        <View style={styles.panel}>
        <View style={styles.buttonSlider}>
        <ComponentButtonSlider onPressI={() => setPageI(2)}/>
        <ComponentButtonSlider onPressI={() => setPageI(3)}/>
        <ComponentButtonSlider onPressI={() => setPageI(4)}/>
        
    )
}