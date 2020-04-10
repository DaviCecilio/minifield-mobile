import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import params from './config/params'
import MineField from './components/mineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from './config/rules'

function minesAmount() {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return Math.ceil(cols * rows * params.difficultLevel)
}

function createState() {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return {
    board: createMinedBoard(rows, cols, minesAmount()),
    won: false,
    lost: false,
  }
}

export default function App() {
  const [state, setState] = useState(createState())

  const onOpenField = (row, column) => {
    const board = cloneBoard(state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Que pena...', 'Você perdeu!')
    }

    if (won) {
      Alert.alert('Parabéns : )', 'Você Venceu!')
    }

    setState({ board, lost, won })
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <MineField board={state.board} onOpenField={onOpenField} />
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
