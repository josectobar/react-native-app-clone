import { types } from "mobx-state-tree"

const Item = types.model("Item", {
  name: types.string,
  location: types.string,
  price: types.number,
  category: types.string,
  imageUrl: types.string
})

export default Item
