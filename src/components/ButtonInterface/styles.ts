import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonPrimary:{
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,
    },
    buttonSecondry:{
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,

    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign:"center",
        padding: 10,
        color: colors.secondary
    }
})