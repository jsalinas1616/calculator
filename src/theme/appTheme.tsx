import { StyleSheet } from 'react-native'
import { CalculadoraScreen } from '../screen/CalculadoraScreen';

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',

    },
    CalculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequeno: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    boton: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
    },
    botonTexto: {
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        paddingHorizontal: 0,
    },

})