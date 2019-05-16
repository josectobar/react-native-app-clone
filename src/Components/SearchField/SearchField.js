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

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  render() {
    const { store } = this.props

    // const searchDisplay = store.items.map(item => {
    //   return (
    //     <Text style={{ padding: 10, fontSize: 42 }} key={item.name}>
    //       {item.name}
    //     </Text>
    //   )
    // })
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={styles.searchBar}
          placeholder="search.."
          onChangeText={text => this.setState({ text })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  searchBar: {
    height: 40,
    width: 300,
    fontSize: 25,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f5f5f5"
  },
  backgroundImage: {
    flex: 0.5,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  }
})
export default inject("store")(SearchField)
AppRegistry.registerComponent("Yoodlize-search-clone", () => SearchField)
