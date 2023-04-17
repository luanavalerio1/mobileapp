import React from 'react';
import { View, Text, KeyboardAvoidingView,TextInput} from "react-native";
import { styles } from './styles';
import {MaterialIcons, Entypo} from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from "../../components";
import { Ionicons } from '@expo/vector-icons';
import { LoginTypes } from '../../navigations/login.navigation';


export function Cadastrar({navigation}: LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title} >Cadastre-se</Text>
                <View style={styles.formRow} >
                <Ionicons name="person" size={24} color="black" />
                    <TextInput
                    placeholder='Nome'
                    placeholderTextColor={colors.secondary}
                    style={styles.input} 
                    />

                </View>
                <View style={styles.formRow} >
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                    placeholder='E-mail'
                    placeholderTextColor={colors.secondary}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    style={styles.input} 
                    />

                </View>
                <View style={styles.formRow} >
                <Entypo name="key" style={styles.icon}/>
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor={colors.secondary}
                   secureTextEntry={true}
                    autoCapitalize='none'
                    style={styles.input} 
                    />

                </View>
                <ComponentButtonInterface title="Salvar" type="primary" onPressI={()=>{console.log("Cadastar")}} />
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={()=>{console.log("Login")}} />
            </KeyboardAvoidingView> 
        </View>
    )
} 