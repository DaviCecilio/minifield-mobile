import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'

import params from './config/params'

import Difficult from './screens/difficult'

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
    showDifficult: false,
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
      Alert.alert('What a pity...', 'You lost!')
    }

    if (won) {
      Alert.alert('Congratulations : )', 'You win!')
    }

    setState({ board, lost, won, showDifficult: false })
  }

  const onSelectField = (row, column) => {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    won ? Alert.alert('Congratulations : )', 'Vou win!') : null

    setState(prevState => ({ ...prevState, board, won }))
  }

  const onDifficult = level => {
    params.difficultLevel = level

    setState(createState())
  }

  return (
    <View style={styles.container}>
      <Difficult
        isVisible={state.showDifficult}
        onDifficult={onDifficult}
        onCancel={() => setState(prevState => ({ ...prevState, showDifficult: false }))}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(state.board)}
        onNewGame={() => setState(() => createState())}
        onFlagPress={() => setState(prevState => ({ ...prevState, showDifficult: true }))}
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
