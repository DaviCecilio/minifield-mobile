import React from 'react'
import { View, Text, Modal } from 'react-native'

import DifficultLevel from '../../components/levels'
import Styles from './styles'

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={Styles.frame}>
        <View style={Styles.container}>
          <Text style={Styles.title}>Select Difficult</Text>
          <DifficultLevel
            difficultLabel={'Easy'}
            difficultStyle={Styles.bgEasy}
            onDifficult={props.onDifficult}
          />
          <DifficultLevel
            difficultLabel={'Medium'}
            difficultStyle={Styles.bgMedium}
            onDifficult={props.onDifficult}
          />
          <DifficultLevel
            difficultLabel={'Hard'}
            difficultStyle={Styles.bgHard}
            onDifficult={props.onDifficult}
          />
        </View>
      </View>
    </Modal>
  )
}
