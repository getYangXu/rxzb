// 场所数据结构
const placeSchema = {
  id: String,
  name: String,
  category: String,
  subCategory: String,
  address: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  images: Array,
  description: String,
  openTime: String,
  price: Number,
  contact: String,
  rating: Number,
  reviews: Array,
  createTime: Date,
  updateTime: Date
}

// 用户数据结构
const userSchema = {
  id: String,
  nickName: String,
  avatar: String,
  favorites: Array,
  history: Array,
  reviews: Array
} 