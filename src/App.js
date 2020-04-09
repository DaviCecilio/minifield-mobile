import React from 'react'
import { View, Text } from 'react-native'

import params from './config/params'
import Field from './components/fields'

export default function App() {
    return (
        <View>
            <Text>Initial Mine</Text>
            <Text>
                Grid size: {params.getColumnsAmount()} x {params.getRowsAmount()}{' '}
            </Text>
            <Field />
            <Field opened />
            <Field opened nearMines={1} />
            <Field opened nearMines={2} />
            <Field opened nearMines={3} />
            <Field opened nearMines={6} />
            <Field mined />
            <Field mined opened />
            <Field mined opened exploded />
        </View>
    )
}
