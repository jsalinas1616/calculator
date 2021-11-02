import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme'

interface botonCustom {
    colorButton: string,
    texto: string,
    textColor: string,
    ancho?: boolean,
}

export const Boton = (botonCustom: botonCustom) => {
    const { colorButton, texto, textColor, ancho = false } = botonCustom;

    return (
        <View style={{
            ...styles.boton,
            backgroundColor: colorButton,
            width: (ancho) ? 180 : 80
        }}>
            <Text style={[{ color: `${textColor}` }, styles.botonTexto,]}>{texto}</Text>
        </View >
    )
}
