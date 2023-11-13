import React, {useState, useEffect} from "react";
import { Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import {styles} from './styles';
import {Subscription} from 'expo-notifications';

export function Acelerometro(){
    const [{ x, y, z}, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const _slow = () => Accelerometer.setUpdateInterval(1000);
    const _fast = () => Accelerometer.setUpdateInterval(16);

    const _subscribe = () => {
        setSubscription(Accelerometer.addListener(setData));
    };

    const _unsubscribe = () => {}
}