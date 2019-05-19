import React from "react"
import {
  FlatList,
  StyleSheet,
  AppRegistry,
  View,
  Text,
  Button,
  TextInput
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
        toggleCategory: false
      })
      if (this.state.categoryName === "") {
        this.handleSearch(this.state.search, page)
      } else {
        this.handleItemSearchByCategory(
          this.state.search,
          this.state.categoryName,
          page
        )
      }
    }
  }

  handleSearch = (search, page) => {
    const results = this.props.store.itemsBySearch(search, page)
    this.setState({
      items: page === 1 ? results : [...this.state.items, ...results]
    })
  }

  handleItemSearchByCategory = (search, categoryName, page) => {
    const results = this.props.store.ItemsBySearchCategory(
      search,
      categoryName,
      page
    )
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

  handleToggle = categoryName => {
    this.setState({ toggleCategory: false, categoryName: categoryName })
  }

  render() {
    const { items, search, categoryName, toggleCategory } = this.state
    if (items.length > 0) {
      const image_url = { uri: items[0].imageUrl }
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CategoriesNav
          styles={{ width: "100%", marginBottom: 40 }}
          handleClearCategory={this.handleClearCategory}
          handleToggle={this.handleToggle}
          toggleCategory={toggleCategory}
          itemsLength={items.length}
          categoryName={categoryName}
        />
        {toggleCategory && (
          <Categories
            handleToggle={this.handleToggle}
            handleCategorySearch={this.handleCategorySearch}
          />
        )}
        {categoryName !== "" && (
          <Button
            onPress={this.handleClearCategory}
            title="CLEAR CATEGORY"
            color="gray"
            accessibilityLabel="Clear category filter"
          />
        )}
        {search !== "" && items.length === 0 && !toggleCategory && (
          <Text
            style={{
              textAlign: "center",
              width: 200,
              marginTop: 50,
              fontSize: 15
            }}
          >
            No Results
          </Text>
        )}
        <FlatList
          contentContainerStyle={{
            flexDirection: "column",
            width: "100%"
          }}
          numColumns={2}
          data={items}
          extraData={search}
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
      </View>
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
