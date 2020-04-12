import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles'

import Flag from '../flags'

export default props => {
  return (
    <View style={Styles.container}>

      <View style={Styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={Styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={Styles.flagsLeft}>= {props.flagsLeft}</Text>
      </View>

      <TouchableOpacity onPress={props.onNewGame} style={Styles.button}>
        <Text styles={Styles.buttonLabel}> New Game</Text>
      </TouchableOpacity>

    </View>
  )
}
