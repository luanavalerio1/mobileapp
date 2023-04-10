import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 210,
        margin: 200,
    },
    panel:{
        flex: 1,
        marginTop: 20,
        margin: 20,
        borderRadius: 20,
        backgroundColor: colors.primary
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 4,
        
        
    },
    Text: {
    fontSize: 16,
    fontWeight: 'bold',
    },
    
    
});