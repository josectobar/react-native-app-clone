import ItemStore from "./models/ItemStore"

test("Items type match item tree model", () => {
  const initialItem = {
    name: "Mountain Bike",
    location: "Orem, UT",
    price: 24,
    category: "Outdoor Gear",
    imageUrl:
      "https://trek.scene7.com/is/image/TrekBicycleProducts/Remedy8275_19_24480_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"
  }
  const itemStore = ItemStore.create(initialItem)

  expect(itemStore.name).toBe(string)
})
