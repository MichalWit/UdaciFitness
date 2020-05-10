import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

class App extends React.Component {

  componentDidMount() {
    console.log("b")
    debugger
    console.log("a")
  }

  render() {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-pizza'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
