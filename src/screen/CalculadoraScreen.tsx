import React from 'react'
import { Text, View } from 'react-native';

import { Boton } from '../components/Boton'

import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
    return (
        <View style={styles.CalculadoraContainer}>
            <Text style={styles.resultadoPequeno}>15,000.00</Text>
            <Text style={styles.resultado}>15,000.00</Text>
            <View style={styles.fila}>
                <Boton
                    colorButton='#9B9B9B'
                    texto='C'
                    textColor='black'
                ></Boton>
                <Boton
                    colorButton='#9B9B9B'
                    texto='+/-'
                    textColor='black'
                ></Boton>
                <Boton
                    colorButton='#9B9B9B'
                    texto='del'
                    textColor='black'
                ></Boton>
                <Boton
                    colorButton='#fd9e06'
                    texto='/'
                    textColor='black'
                ></Boton>
            </View>
            <View style={styles.fila}>
                <Boton
                    colorButton='#333333'
                    texto='7'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='8'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='9'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#fd9e06'
                    texto='X'
                    textColor='white'
                ></Boton>
            </View>
            <View style={styles.fila}>
                <Boton
                    colorButton='#333333'
                    texto='4'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='5'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='6'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#fd9e06'
                    texto='-'
                    textColor='white'
                ></Boton>
            </View>
            <View style={styles.fila}>
                <Boton
                    colorButton='#333333'
                    texto='1'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='2'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='3'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#fd9e06'
                    texto='+'
                    textColor='white'
                ></Boton>
            </View>
            <View style={styles.fila}>
                <Boton
                    ancho
                    colorButton='#333333'
                    texto='0'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#333333'
                    texto='.'
                    textColor='white'
                ></Boton>
                <Boton
                    colorButton='#fd9e06'
                    texto='='
                    textColor='white'
                ></Boton>
            </View>
        </View >
    )
}
