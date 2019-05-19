import ItemStore from "../src/models/ItemStore.js"

describe("MST view should only return those items that match keyword by category or name", () => {
  const initialItem = {
    items: [
      {
        name: "Mountain Bike",
        location: "Orem, UT",
        price: 24,
        category: "Outdoor Gear",
        imageUrl:
          "https://trek.scene7.com/is/image/TrekBicycleProducts/Remedy8275_19_24480_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"
      },
      {
        name: "Unmanned aerial 'Jumping' vehicle",
        location: "Provo, UT",
        price: 100,
        category: "electronics",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b0/MQ-9_Reaper_in_flight_%282007%29.jpg"
      },
      {
        name: "Bungee Jumping",
        location: "Lehi, UT",
        price: 100,
        category: "Experiences",
        imageUrl:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/cb/75/1c/ledge-bungy.jpg"
      }
    ]
  }
  it("should return 1 item that match the 'bike' keyword", () => {
    const itemStore = ItemStore.create(initialItem)
    const keyword = "bike"
    const page = 1
    const result = itemStore.itemsBySearch(keyword, page)
    expect(result.length).toBe(1)
  })
  it("should match keyword by category", () => {
    const itemStore = ItemStore.create(initialItem)
    const keyword = "outdoor gear"
    const page = 1
    const result = itemStore.itemsByCategory(keyword, page)
    expect(result[0].category).toBe("Outdoor Gear")
  })
  it("should match keyword by name", () => {
    const itemStore = ItemStore.create(initialItem)
    const keyword = "bike"
    const page = 1
    const result = itemStore.itemsBySearch(keyword, page)
    expect(result[0].name).toBe("Mountain Bike")
  })
  it("should match keyword 'Jump' by name and category 'electronics'", () => {
    const itemStore = ItemStore.create(initialItem)
    const keyword = "jump"
    const category = "electronics"
    const page = 1
    const result = itemStore.ItemsBySearchCategory(keyword, category, page)
    expect(result[0].name).toBe("Unmanned aerial 'Jumping' vehicle")
  })
})
