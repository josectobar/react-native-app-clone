import React from "react"
import {
  FlatList,
  StyleSheet,
  AppRegistry,
  View,
  Text,
  Button
} from "react-native"
import { observer, inject } from "mobx-react"
import ItemCard from "../ItemCard/ItemCard"
import CategoriesNav from "../CategoriesNav/CategoriesNav"
import Categories from "../Categories/Categories"

class ItemsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      search: "",
      page: 0,
      categoryName: "",
      toggleCategory: true
    }
  }
  componentDidUpdate(prevProps, props) {
    const page = 1
    if (prevProps.search !== props.search) {
      this.setState({
        search: this.props.search,
        page: 1,
        categoryName: ""
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
  handleCategorySearch = (categorySearch, page) => {
    const results = this.props.store.itemsByCategory(categorySearch, page)
    this.setState({
      categoryName: categorySearch,
      items: page === 1 ? results : [...this.state.items, ...results]
    })
  }

  handleClearCategory = () => {
    this.setState({
      items: [],
      page: 1,
      categoryName: "",
      toggleCategory: true
    })
    // this.handleSearch(this.state.search, 1)
  }

  handlePagination = () => {
    if (this.state.items.length >= 4) {
      const page = this.state.page + 1
      if (this.state.categoryName !== "")
        this.handleCategorySearch(this.state.categoryName, page)

      if (this.state.categoryName === "")
        this.handleSearch(this.state.search, page)
      this.setState({ page: page })
    }
  }

  handleToggle = () => {
    console.log(`hit@`)
    // const { toggleCategory } = this.state
    this.setState({ toggleCategory: false })
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <View>
          <CategoriesNav
            handleToggle={this.handleToggle}
            itemsLength={this.state.items.length}
            toggleCategory={this.state.toggleCategory}
          />
          {this.state.search === "" ? (
            <Categories
              handleToggle={this.handleToggle}
              handleCategorySearch={this.handleCategorySearch}
            />
          ) : (
            <Text>"No Results"</Text>
          )}
        </View>
      )
    }
    const { items } = this.state
    const image_url = { uri: items[0].imageUrl }
    return (
      <>
        <CategoriesNav
          handleToggle={this.handleToggle}
          toggleCategory={this.state.toggleCategory}
          itemsLength={items.length}
        />
        {this.state.categoryName !== "" && (
          <Button
            onPress={this.handleClearCategory}
            title="CLEAR CATEGORY"
            color="gray"
            accessibilityLabel="Clear category filter"
          />
        )}
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
                accessibilityLabel={item.name}
              />
            </View>
          )}
          onEndReached={this.handlePagination}
          onEndReachedThreshold={0.1}
          initialNumToRender={4}
        />
      </>
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
