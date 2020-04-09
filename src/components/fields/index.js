import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default props => {
    const { mined, opened, nearMines } = props
    let color = null

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (styleField.length === 1) styleField.push(styles.regular)

    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ? (
                <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
            ) : (
                false
            )}
        </View>
    )
}
