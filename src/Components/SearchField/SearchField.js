import React, { Component } from "react"
import {
  StyleSheet,
  AppRegistry,
  Text,
  TextInput,
  View,
  FlatList
} from "react-native"
import ItemsList from "../ItemsList/ItemsList.js"

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="search.."
          onChangeText={text => this.setState({ text: text })}
        />
        <ItemsList style={styles.searchResult} search={this.state.text} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  searchBar: {
    height: 40,
    width: 300,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f5f5f5"
  },
  searchResult: {
    width: "100%",
    height: "100%"
  }
})
export default SearchField
AppRegistry.registerComponent("Yoodlize-search-clone", () => SearchField)
