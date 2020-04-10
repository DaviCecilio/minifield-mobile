/**
 * @format
 */
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
require('react-native').unstable_enableLogBox()

if (__DEV__) {
  require('react-devtools')
}

AppRegistry.registerComponent(appName, () => App)
