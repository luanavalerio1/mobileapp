import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import * as Notifications from 'expo-notifications';
import {registerForPushNotificationsAsync} from "../../services/data/Push";
import {useAuth} from "../../hooks/auth";
import {useEffect, useState} from "react"
import { ComponentLoading } from "../../components"
import { TouchableOpacity } from "react-native-gesture-handler"
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});
export function Perfil({ navigation }: TabTypes) {
    const {user} = useAuth()
    const [isLoading, setIsLoading] = useState(true);
    function handleVoltar() {
        const tab = navigation.getParent()
        tab?.goBack()
    }
    useEffect(() => {
        if (user){
            setIsLoading(false);
        }
    }, [user]);
    useEffect(()=> {
        async function fetchToken(){
            const token = await registerForPushNotificationsAsync()
            console.log(token)
        }
        fetchToken()
    }, []);
    return(
        <>
          {isLoading ? (
            <ComponentLoading />
          ) : (
            <View style={styles.container}>
                <Text>Perfil</Text>
                <TouchableOpacity onPress={handleVoltar}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
            </View>
          )}
        </>
    )
          }
        
        