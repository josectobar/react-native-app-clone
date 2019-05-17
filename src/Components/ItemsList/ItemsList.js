import React from "react"
import { FlatList, StyleSheet, AppRegistry, View } from "react-native"
import { observer, inject } from "mobx-react"
import ItemCard from "../ItemCard/ItemCard"

class ItemsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      search: "",
      page: 0
    }
  }
  componentDidUpdate(prevProps, props) {
    const page = 1
    if (prevProps.search !== props.search) {
      this.setState({
        search: this.props.search,
        page: 1
      })
      this.handleSearch(this.state.search, page)
    }
  }

  handleSearch = (search, page) => {
    const results = this.props.store.itemsBySearch(search, page)
    this.setState({
      items: page === 1 ? results : [...this.state.items, ...results]
    })
  }

  handlePagination = () => {
    if (this.state.items.length >= 4) {
      const page = this.state.page + 1
      this.handleSearch(this.state.search, page)
      this.setState({ page: page })
    }
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
          flexDirection: "column",
          width: "100%"
        }}
        numColumns={2}
        data={items}
        extraData={this.state.search}
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
        onEndReached={this.handlePagination}
        onEndReachedThreshold={0.5}
        initialNumToRender={4}
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
