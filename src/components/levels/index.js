import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import Styles from './styles'

export default props => {
  const { difficultLabel, difficultStyle } = props
  let level = null

  switch (difficultLabel) {
    case 'Easy':
      level = 0.1
      break
    case 'Medium':
      level = 0.2
      break
    case 'Hard':
      level = 0.3
      break
    default:
      level = 0.1
      break
  }
  return (
    <TouchableOpacity
      style={[Styles.button, difficultStyle]}
      onPress={() => props.onDifficult(level)}
    >
      <Text style={Styles.buttonLabel}>{difficultLabel}</Text>
    </TouchableOpacity>
  )
}
