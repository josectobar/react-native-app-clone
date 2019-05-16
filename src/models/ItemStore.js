import { types } from "mobx-state-tree"
import Item from "./Items"

const ItemStore = types.model("ItemStore", {
  items: types.array(Item)
})

const store = ItemStore.create({
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
      location: "American Fork",
      price: 15,
      category: "Local Experts",
      imageUrl:
        "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs"
    }
  ]
})

export default store
