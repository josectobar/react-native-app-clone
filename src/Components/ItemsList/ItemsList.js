import React from "react"
import {
  FlatList,
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Image
} from "react-native"
import { observer, inject } from "mobx-react"
import ItemCard from "../ItemCard/ItemCard"

class ItemsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      search: ""
    }
  }
  componentDidUpdate(prevProps, props) {
    if (prevProps.search !== props.search) {
      this.setState({
        search: this.props.search
      })
      this.handleSearch(this.state.search)
    }
  }

  handleSearch = search => {
    const results = this.props.store.itemsBySearch(search)
    this.setState({
      items: results
    })
  }

  render() {
    if (this.state.items.length === 0) {
      return <View />
    }
    const { items } = this.state
    const image_url = { uri: items[0].imageUrl }
    return (
      <FlatList
        contentContainerStyle={{
          // flex: 1,
          flexDirection: "column",
          // height: 587,
          width: "100%"
        }}
        numColumns={2}
        data={items}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ItemCard
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              location={item.location}
            />
          </View>
        )}
        // onEndReached={() => this.props.handlePagination(this.state.page)}
        // onEndReachedThreshold={0.5}
        // initialNumToRender={6}
      />
    )
  }
}

export default inject("store")(observer(ItemsList))

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    width: "50%"
  }
})
AppRegistry.registerComponent("Yoodlize-search-clone", () => ItemsList)
