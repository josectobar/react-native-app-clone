import { types } from "mobx-state-tree"

const Search = types.model("Search", {
  search: types.string,
  page: types.number
})

const SearchStore = types
  .model("SearchStore", {
    searchInstance: types.array(Search)
  })
  .actions(self => ({
    changeSearch(val) {
      self.search = val
      self.page = 1
    },
    changePage(page) {
      self.page = page
    }
  }))

export default SearchStore
