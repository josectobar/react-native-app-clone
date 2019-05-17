import { types } from "mobx-state-tree"
import Item from "./Items"

const ItemStore = types
  .model("ItemStore", {
    items: types.array(Item)
  })
  .views(self => ({
    itemsBySearch(search, page) {
      let indexStart = page * 4 - 4
      let indexEnd = page * 4
      let results = self.items.filter(item => {
        let { name, category } = item
        if (
          name.toLowerCase().includes(search.toLowerCase()) ||
          category.toLowerCase().includes(search.toLowerCase())
        ) {
          return true
        }
        return false
      })
      if (results.length <= 4 && results.length > 0) {
        return results
      } else if (results.length > 4) {
        return results.slice(indexStart, indexEnd)
      }
    }
  }))

export const store = ItemStore.create({
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
      name: "Osprey Backpacking Backpack",
      location: "Lindon, UT",
      price: 10,
      category: "Outdoor Gear",
      imageUrl:
        "https://yimgs.sfo2.cdn.digitaloceanspaces.com/x_medium_05957d1c7c8781e2d94d59c5ddcd7841.jpeg"
    },
    {
      name: "Unmanned aerial vehicle",
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
    },
    {
      name: "Atari Console",
      location: "Orem, UT",
      price: 1,
      category: "electronics",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atari-2600-Wood-4Sw-Set.jpg/1200px-Atari-2600-Wood-4Sw-Set.jpg"
    },
    {
      name: "Guard dog",
      location: "American Fork, UT",
      price: 15,
      category: "Local Experts",
      imageUrl:
        "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs"
    },
    {
      name: "Yoga class",
      location: "Midvale, UT",
      price: 20,
      category: "Experiences",
      imageUrl:
        "https://images.hellogiggles.com/uploads/2017/09/30002245/yoga-class-e1506781476192.jpg"
    },
    {
      name: "Prosimmon Golf Clubs",
      location: "Alpine. UT",
      price: 40,
      category: "Sporting Equipment",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61XwqksgbaL._SX425_.jpg"
    },
    {
      name: "Ridge Outdoor Changing Shower",
      location: "Orem, UT",
      price: 10,
      category: "Outdoor Gear",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71TrPo%2Bs71L._SX425_.jpg"
    },
    {
      name: "Outdoor Cookware Cast Iron",
      location: "Provo, UT",
      price: 20,
      category: "Outdoor Gear",
      imageUrl:
        "https://i5.walmartimages.com/asr/e21cd42f-cc0d-41f5-9dfd-500e68bb0a7e_1.173272447247156a8fa35d9d2658fb28.jpeg"
    },
    {
      name: "Trail Guard Bear Spray",
      location: "Lindon, UT",
      price: 30,
      category: "Outdoor Gear",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bear_attack_deterrent_spray.jpg/220px-Bear_attack_deterrent_spray.jpg"
    },
    {
      name: "Heimplanet The Cave Tent",
      location: "Provo, UT",
      price: 40,
      category: "Outdoor Gear",
      imageUrl:
        "https://cdn3.thegrommet.com/media/catalog/product/cache/1/image/473x355/9df78eab33525d08d6e5fb8d27136e95/2/5/2522-S-101_BST.jpg"
    },
    {
      name: "Knight Outdoor backpack",
      location: "Salem, UT",
      price: 20,
      category: "Outdoor Gear",
      imageUrl:
        "https://images.prod.meredith.com/product/5ffa026079e11e109628ddee4bccc8fd/1524089805152/l/60l-unisex-free-knight-outdoor-waterproof-hiking-camping-backpack-green"
    },
    {
      name: "Stealth Angel Compact Survival kit",
      location: "Spanish Fork, UT",
      price: 10,
      category: "Outdoor Gear",
      imageUrl:
        "https://www.picclickimg.com/00/s/MTIwMFgxNjAw/z/tOEAAOSwMsVcrMPg/$/Stealth-Angel-Survival-Tactical-Kit-in-Case-_57.jpg"
    },
    {
      name: "Waterproof Survival kit",
      location: "Payson, UT",
      price: 5,
      category: "Outdoor Gear",
      imageUrl:
        "https://i5.walmartimages.com/asr/ea437094-62b8-41f2-916d-b7e78c6f69c3_1.bb0634c548b122be5440689586f0f60f.jpeg"
    }
  ]
})

export default ItemStore
