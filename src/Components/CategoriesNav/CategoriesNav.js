import React, { Component } from "react"
import { StyleSheet, AppRegistry, Text, View } from "react-native"

class CategoriesNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesToggle: true,
      categoryName: ""
    }
  }
  componentDidMount() {
    this.props.toggleCategory
      ? this.handleCategoriesFocus(this.props.toggleCategory)
      : !this.props.toggleCategory && this.props.itemsLength > 0
      ? this.handleCategoriesUnfocus()
      : null
  }
  componentDidUpdate(prevProps, props) {
    this.props.toggleCategory
      ? this.handleCategoriesFocus(this.props.toggleCategory)
      : this.handleCategoriesUnfocus(this.props.categoryName)
  }

  handleCategoriesFocus = toggleCategory => {
    if (!this.state.categoriesToggle)
      this.setState({
        categoriesToggle: toggleCategory,
        categoryName: ""
      })
  }
  handleCategoriesUnfocus = categoryName => {
    if (!this.props.toggleCategory && this.state.categoriesToggle)
      this.setState({
        categoriesToggle: false,
        categoryName: categoryName
      })
  }

  handleUserSelection = () => {
    this.props.handleClearCategory()
    this.setState({
      categoriesToggle: true,
      categoryName: ""
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={
            !this.state.categoriesToggle &&
            this.state.categoryName !== "" &&
            styles.titleBorder
          }
        >
          <Text
            style={
              !this.state.categoriesToggle &&
              this.state.categoryName !== "" &&
              styles.textFocus
            }
          >
            {this.state.categoryName}
          </Text>
        </View>
        <View style={this.state.categoriesToggle && styles.titleBorder}>
          <Text
            onPress={this.handleUserSelection}
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
    width: 300,
    flexDirection: "row",

    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    marginTop: 12,
    color: "#3a3a3a",
    marginLeft: 5,
    marginBottom: 5,
    width: "100%"
  },
  textFocus: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 6,
    color: "#3a3a3a",
    marginLeft: 5,
    marginBottom: 5,
    width: "100%"
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
