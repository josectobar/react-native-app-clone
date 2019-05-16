import React, { Component } from "react"
import {
  StyleSheet,
  AppRegistry,
  Text,
  TextInput,
  View,
  FlatList
} from "react-native"
// import { observer, inject } from "mobx-react"
import ItemsList from "../ItemsList/ItemsList.js"

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
      // results: [],
      // page: 0,
      // resultRemainder: []
    }
  }

  // handleResults = text => {
  //   const results = this.props.store.itemsBySearch(text)
  //   // console.log(results)
  //   this.setState({ results: results })
  // }

  // handleResults = text => {
  //   const searchResult = this.props.store.items.filter(item => {
  //     const name = item.name.toLowerCase()
  //     const category = item.category.toLowerCase()
  //     const search = text.toLowerCase()
  //     if (name.includes(search) || category.includes(search)) {
  //       return true
  //     } else {
  //       false
  //     }
  //   })
  //   if (searchResult.length > 4) {
  //     console.log("before splice", searchResult.length)
  //     const resultPageOne = searchResult.splice(5, 6)
  //     console.log("after splice", searchResult.length)
  //     this.setState({
  //       results: resultPageOne,
  //       page: 1,
  //       resultRemainder: searchResult
  //     })
  //   } else {
  //     this.setState({ results: searchResult, page: 1 })
  //   }
  // }

  // handlePagination = page => {
  //   let { resultRemainder } = this.state
  //   console.log("handlePagination before if", resultRemainder.length)
  //   if (resultRemainder.length > 4) {
  //     console.log("remainer greater than 4", resultRemainder.length)
  //     const resultPage = resultRemainder.splice(5, 6)
  //     this.setState({
  //       results: [...this.state.results, ...resultPage],
  //       page: page + 1,
  //       resultRemainer: resultRemainder
  //     })
  //   } else if (resultRemainder.length > 0) {
  //     console.log("remainer greater than 0", resultRemainder.length)
  //     this.setState({
  //       results: [...this.state.results, ...resultRemainder],
  //       page: page + 1,
  //       resultRemainer: []
  //     })
  //   } else {
  //     console.log("remainder=0", resultRemainder.length)
  //     return null
  //   }
  // }

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
