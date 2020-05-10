import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry'

class App extends React.Component {

  componentDidMount() {
    console.log("b")
    debugger
    console.log("a")
  }

  render() {
    return (
      <View>
        <AddEntry/>
      </View>
    )
  }
}

export default App
