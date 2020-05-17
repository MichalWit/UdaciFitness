import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry'
import History from './components/History'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

class App extends React.Component {

  componentDidMount() {
    console.log("b")
    debugger
    console.log("a")
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <History/>
        </View>
      </Provider>
    )
  }
}

export default App
