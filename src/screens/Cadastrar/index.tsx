import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView,TextInput, Alert} from "react-native";
import { styles } from './styles';
import {MaterialIcons, Entypo} from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface, ComponentLoading} from "../../components";
import { Ionicons } from '@expo/vector-icons';
import { LoginTypes } from '../../navigations/login.navigation';
import {IRegister} from '../../services/data/User'
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
export interface IErrorApi {
    erros: {
        rule: string
        field: string
        message: string
    }[]
}


export function Cadastrar({navigation}: LoginTypes) {
    const [data, setData] = useState<IRegister>()
    const [isLoading, setIsLoading] = useState(true)
    async function handleRegister (){
        try {
            setIsLoading(true)
            if (data?.name && data.email && data.password){
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!`)
                navigation.navigate('Login')

            } else {
                Alert.alert("Preencha todos os campos!")
            }

        }catch (error){
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            let message = ""
            if(errData){
                for (const iterator of errData.erros) {
                    message = `${message} ${iterator.message} \n`
                }
            }
            Alert.alert(message)


        }finally {
            setIsLoading(false)
        }
    }
    function handleChange(item: IRegister){
        setData({...data, ...item})
    }
    useEffect(() => {
        setTimeout(()=> {
        setIsLoading(false)
    }, 500)
}, [])
    return (
        <>
        {isLoading ? (
            <ComponentLoading />
        ): (

        <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title} >Cadastre-se</Text>
            <View style={styles.formRow} >
            <Ionicons name="person" size={24} color="black" />
                <TextInput
                placeholder='Nome'
                onChangeText={(i) => handleChange({name: i})}
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
                onChangeText={(i) => handleChange({email: i})}

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
                onChangeText={(i) => handleChange({password: i})}
                style={styles.input} 
                />

            </View>
            <ComponentButtonInterface title="Salvar" type="primary" onPressI={handleRegister} />
            <ComponentButtonInterface title="Voltar" type="primary" onPressI={() => navigation.navigate('Login')} />
        </KeyboardAvoidingView> 
    </View>
)
} 
        
        </>
    );
}
