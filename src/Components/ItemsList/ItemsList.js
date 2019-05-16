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
  render() {
    const { items } = this.props.store
    const image_url = { uri: items[0].imageUrl }
    console.log(items[0].imageUrl)
    return (
      <FlatList
        style={styles.listContainer}
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

export default inject("store")(ItemsList)

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    // flexDirection: "column",
    height: "100%",
    width: "100%"
  },
  itemContainer: {
    marginTop: 20
    // width: "%"
  }
})
AppRegistry.registerComponent("Yoodlize-search-clone", () => ItemsList)
