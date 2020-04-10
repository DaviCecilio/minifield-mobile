import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import params from './config/params'
import MineField from './components/mineField'
import { createMinedBoard } from './config/rules'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount(),
      rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount(),
      rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Initial Mine</Text>
        <Text style={styles.text}>
          Grid size: {params.getColumnsAmount()} x {params.getRowsAmount()}{' '}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
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
