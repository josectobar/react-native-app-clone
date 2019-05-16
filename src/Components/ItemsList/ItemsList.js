import React from "react"
import {
  FlatList,
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Image
} from "react-native"
import ItemCard from "../ItemCard/ItemCard"

class ItemsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }
  componentDidUpdate(prevProps, props) {
    if (prevProps.items.length !== props.items.length) {
      this.setState({ items: this.props.items })
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
          flex: 1,
          flexDirection: "column",
          height: "100%",
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
      />
    )
  }
}

export default ItemsList

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    width: "50%"
  }
})
AppRegistry.registerComponent("Yoodlize-search-clone", () => ItemsList)
