import React from "react"
import SearchField from "./Components/SearchField/SearchField"
import { StyleSheet, Text, View } from "react-native"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>It works!!!</Text>
        <SearchField />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
