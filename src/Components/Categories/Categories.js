import React, { Component } from "react"
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  TouchableOpacity
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
class SearchField extends Component {
  handleSelection = (search, page) => {
    this.props.handleCategorySearch(search, page)
    this.props.handleToggle(search)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.handleSelection("Experiences", 1)}
          style={styles.button}
        >
          <Icon name="user-secret" size={30} color="black" />
          <Text style={styles.categoryText}>Experiences</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleSelection("Outdoor Gear", 1)}
          style={styles.button}
        >
          <Icon name="sun-o" size={30} color="black" />
          <Text style={styles.categoryText}>Outdoor Gear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleSelection("Electronics", 1)}
          style={styles.button}
        >
          <Icon name="tv" size={30} color="black" />
          <Text style={styles.categoryText}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleSelection("Local Experts", 1)}
          style={styles.button}
        >
          <Icon name="user-secret" size={30} color="black" />
          <Text style={styles.categoryText}>Local Experts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleSelection("Sporting Equipment", 1)}
          style={styles.button}
        >
          <Icon name="dribbble" size={30} color="black" />
          <Text style={styles.categoryText}>Sporting Equipment</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: "40%",
    borderRadius: 10,
    borderWidth: 0.5,
    overflow: "hidden",
    borderColor: "#e4e4e4",
    margin: 5
  },
  categoryText: {
    flex: 0.7,
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 13,
    marginTop: 6,
    fontWeight: "bold",
    color: "#3a3a3a",
    marginLeft: 5
  },
  titleBorder: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginBottom: 30
  }
})
export default SearchField
AppRegistry.registerComponent("Yoodlize-search-clone", () => SearchField)
