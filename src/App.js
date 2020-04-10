import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import params from './config/params'
import MineField from './components/mineField'
import { createMinedBoard } from './config/rules'

function minesAmount() {
  const cols = params.getColumnsAmount(),
    rows = params.getRowsAmount()
  return Math.ceil(cols * rows * params.difficultLevel)
}

function createState() {
  const cols = params.getColumnsAmount(),
    rows = params.getRowsAmount()
  return createMinedBoard(rows, cols, minesAmount())
}

export default function App() {
  const [board, setBoard] = useState(createState())

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Initial Mine</Text>
      <Text style={styles.text}>
        Grid size: {params.getColumnsAmount()} x {params.getRowsAmount()}{' '}
      </Text>
      <View style={styles.board}>
        <MineField board={board} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
})
