import React from "react"
import SearchField from "./Components/SearchField/SearchField"
import { StyleSheet, Text, View, Image } from "react-native"
import ItemCard from "./Components/ItemCard/ItemCard"
import ItemsList from "./Components/ItemsList/ItemsList.js"
import { Provider } from "mobx-react"
import store from "./models/ItemStore"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../assets/bg.jpg")}
        />
        <Provider store={store}>
          <ItemsList />
        </Provider>
        {/* <SearchField /> */}
        {/* <ItemCard /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center"
    justifyContent: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  backgroundImage: {
    flex: 0.5,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  }
})
