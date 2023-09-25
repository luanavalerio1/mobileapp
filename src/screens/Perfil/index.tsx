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
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        sh
    })
}
   
)

export function Perfil({ navigation }: TabTypes) {
    const {user} = useAuth()

    function handleVoltar() {
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View style={styles.container}>
        
            <ComponentButtonInterface title="Voltar" type="primary" onPressI={handleVoltar} />
        </View>
    )
}