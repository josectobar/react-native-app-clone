import React, { Component } from "react"
import { StyleSheet, AppRegistry, Text, View } from "react-native"

class CategoriesNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesToggle: true
    }
  }
  componentDidMount() {
    this.props.toggleCategory
      ? this.handleCategoriesFocus()
      : !this.props.toggleCategory && this.props.itemsLength > 0
      ? this.handleCategoriesUnfocus()
      : null
  }
  componentDidUpdate(prevProps, props) {
    if (
      prevProps.toggleCategory !== props.toggleCategory &&
      !props.toggleCategory
    ) {
      this.handleCategoriesUnfocus(this.props.toggleCategory)
    }
  }

  handleCategoriesFocus = toggleCategory => {
    if (!this.state.categoriesToggle)
      this.setState({
        categoriesToggle: toggleCategory
      })
  }
  handleCategoriesUnfocus = () => {
    if (!this.props.toggleCategory && this.state.categoriesToggle)
      this.setState({
        categoriesToggle: false
      })
  }

  handleUserSelection = () => {
    // this.props.handleToggle()
    this.setState({
      categoriesToggle: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={this.state.categoriesToggle && styles.titleBorder}>
          <Text
            onPress={this.handleCategoriesFocus}
            style={this.state.categoriesToggle ? styles.textFocus : styles.text}
          >
            Categories
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    marginTop: 12,
    color: "#3a3a3a",
    marginLeft: 35,
    marginBottom: 31
  },
  textFocus: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 6,
    color: "#3a3a3a",
    marginLeft: 5,
    marginBottom: 5
  },
  titleBorder: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 20,
    padding: 5
  }
})
export default CategoriesNav
AppRegistry.registerComponent("Yoodlize-search-clone", () => CategoriesNav)
