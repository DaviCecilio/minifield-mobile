import React from 'react'
import { View } from 'react-native'

import Field from '../fields'
import styles from './styles'

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />
    })
    return (
      <View key={r} style={styles.columnsContainer}>
        {columns}
      </View>
    )
  })
  return <View style={styles.rowsContainer}>{rows}</View>
}
