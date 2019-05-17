import ItemStore from "../src/models/ItemStore.js"

describe("Items type should match model tree", () => {
  const initialItem = {
    items: [
      {
        name: "Mountain Bike",
        location: "Orem, UT",
        price: 24,
        category: "Outdoor Gear",
        imageUrl:
          "https://trek.scene7.com/is/image/TrekBicycleProducts/Remedy8275_19_24480_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"
      }
    ]
  }
  const itemStore = ItemStore.create(initialItem)
  it("should return name type as string", () => {
    expect(typeof itemStore.items[0].name).toBe("string")
  })
  it("should return location type as string", () => {
    expect(typeof itemStore.items[0].location).toBe("string")
  })
  it("should return price type as number", () => {
    expect(typeof itemStore.items[0].price).toBe("number")
  })
  it("should return category type as string", () => {
    expect(typeof itemStore.items[0].category).toBe("string")
  })
  it("should return imageUrl type as string", () => {
    expect(typeof itemStore.items[0].imageUrl).toBe("string")
  })
})
