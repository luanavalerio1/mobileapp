import React from 'react';
import { View, Text, KeyboardAvoidingView,
    TextInput

} from "react-native"
import { styles } from '../Slider1/styles';
import {MaterialIcons} from '@expo/vector-icons';

export function Login() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title} >Login</Text>
                <View style={styles.formRow} >
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                    placeholder='E-mail'
                    placeholderTextColor={colors.second}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    style={styles.input} />

                </View>
            </KeyboardAvoidingView> 
        </View>
    )
}