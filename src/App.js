import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import params from './config/params'
import MineField from './components/mineField'
import Header from './components/header'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
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

  const onSelectField = (row, column) => {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    won ? Alert.alert('Parabéns : )', 'Você Venceu!') : null

    setState({ board, won, ...state.lost })
  }

  return (
    <View style={styles.container}>
      <Header
        flagsLeft={minesAmount() - flagsUsed(state.board)}
        onNewGame={() => setState(createState())}
      />
      <View style={styles.board}>
        <MineField board={state.board} onOpenField={onOpenField} onSelectField={onSelectField} />
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
