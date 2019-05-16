import React, { Component } from "react"
import {
  StyleSheet,
  AppRegistry,
  Text,
  TextInput,
  View,
  FlatList
} from "react-native"
import { observer, inject } from "mobx-react"
import ItemsList from "../ItemsList/ItemsList.js"

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "", results: [] }
  }

  handleResults = text => {
    const searchResult = this.props.store.items.filter(item => {
      const name = item.name.toLowerCase()
      const category = item.category.toLowerCase()
      const search = text.toLowerCase()
      if (name.includes(search) || category.includes(search)) {
        console.log(name)
        return true
      } else {
        false
      }
    })
    console.log(searchResult.length)
    this.setState({ results: searchResult })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="search.."
          onChangeText={text => this.handleResults(text)}
        />
        <ItemsList style={styles.searchResult} items={this.state.results} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    width: "100%"
  }
})
export default inject("store")(SearchField)
AppRegistry.registerComponent("Yoodlize-search-clone", () => SearchField)
