import React from "react"
import { StyleSheet, AppRegistry, Text, View, Image } from "react-native"
import { observer, inject } from "mobx-react"

class ItemCard extends React.Component {
  render() {
    const { name, price, imageUrl, location } = this.props
    const image_url = { uri: imageUrl }
    return (
      <View style={styles.container}>
        <Text style={styles.priceText}>${price}/day</Text>
        <Image source={image_url} style={styles.image} />
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    )
  }
}

export default inject("store")(ItemCard)

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: 130,
    borderRadius: 10,
    borderWidth: 0.5,
    overflow: "hidden",
    borderColor: "#e4e4e4",
    marginLeft: 15
  },
  nameText: {
    fontSize: 15,
    color: "#72bcd4",
    marginLeft: 5
  },
  locationText: {
    fontSize: 11,
    marginTop: 6,
    fontWeight: "bold",
    color: "#3a3a3a",
    marginLeft: 5
  },
  priceText: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    right: 4,
    top: 7,
    fontSize: 9,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: 50,
    height: 25,
    paddingTop: 6,
    overflow: "hidden",
    borderRadius: 5
  },
  image: {
    flex: 0.9,
    alignSelf: "stretch",
    width: undefined,
    height: 500
  }
})
AppRegistry.registerComponent("Yoodlize-search-clone", () => ItemCard)
