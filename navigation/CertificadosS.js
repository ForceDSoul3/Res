import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CertificadosS from '../screens/Certificados'

const Stact = createNativeStackNavigator()

//este apartado es para poder mandarlo a llamar despues
export default function Stack() {
    return (
        <Stact.Navigator>
            <Stact.Screen
            name="certificados"
            component={CertificadosS}
            options={{title:"Certificados"}}
            />
        </Stact.Navigator>
    )
}
