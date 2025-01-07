const mockPlaceList = [
  {
    id: '1',
    name: '宽窄巷子',
    category: '景点',
    tags: ['文化古迹', '网红打卡'],
    image: 'https://images.unsplash.com/photo-1599647362589-51e22eb91b5c',
    rating: 4.8,
    address: '成都市青羊区金河路宽窄巷子',
    description: '成都市最古老的商业街之一'
  },
  {
    id: '2',
    name: '杜甫草堂',
    category: '景点',
    tags: ['人文历史', '诗意栖居'],
    image: 'https://images.unsplash.com/photo-1558932805-fe8751f87d57',
    rating: 4.7,
    address: '成都市青羊区青华路37号',
    description: '唐代大诗人杜甫流寓成都时的故居'
  },
  {
    id: '3',
    name: '春熙路太古里',
    category: '商圈',
    tags: ['购物', '美食'],
    image: 'https://images.unsplash.com/photo-1587736323767-0bd59d7f3599',
    rating: 4.9,
    address: '成都市锦江区春熙路太古里',
    description: '时尚购物中心'
  },
  {
    id: '4',
    name: '大熊猫繁育研究基地',
    category: '景点',
    tags: ['熊猫', '自然'],
    image: 'https://images.unsplash.com/photo-1545242106-1724dd2ccb52',
    rating: 4.9,
    address: '成都市成华区熊猫大道1375号',
    description: '世界著名的大熊猫保护研究机构'
  },
  {
    id: '5',
    name: '马路边边麻辣烫',
    category: '小吃',
    tags: ['成都味道', '深夜食堂'],
    image: 'https://images.unsplash.com/photo-1518619745898-c607f1298d27',
    rating: 4.7,
    address: '成都市武侯区玉林西路',
    description: '成都特色小吃'
  },
  {
    id: '6',
    name: '锦里古街',
    category: '景点',
    tags: ['古街', '小吃'],
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974',
    rating: 4.6,
    address: '成都市武侯区武侯祠大街231号',
    description: '三国文化特色商业街'
  },
  {
    id: '7',
    name: '九眼桥酒吧街',
    category: '娱乐',
    tags: ['夜生活', '音乐'],
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88',
    rating: 4.5,
    address: '成都市锦江区九眼桥',
    description: '成都夜生活聚集地'
  },
  {
    id: '8',
    name: '四川博物院',
    category: '文化',
    tags: ['博物馆', '历史'],
    image: 'https://images.unsplash.com/photo-1552727131-5fc6a8825fc3',
    rating: 4.8,
    address: '成都市青羊区浣花南路251号',
    description: '展示四川历史文化的重要场所'
  },
  {
    id: '9',
    name: '火锅江湖',
    category: '美食',
    tags: ['火锅', '川菜'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
    rating: 4.8,
    address: '成都市锦江区红星路步行街',
    description: '地道成都火锅'
  },
  {
    id: '10',
    name: '望江楼公园',
    category: '公园',
    tags: ['园林', '休闲'],
    image: 'https://images.unsplash.com/photo-1585993573411-9d5e5d6fe2b0',
    rating: 4.6,
    address: '成都市武侯区望江路30号',
    description: '千年古刹与现代公园的完美结合'
  },
  {
    id: '11',
    name: '玉林小馆',
    category: '美食',
    tags: ['川菜', '家常菜'],
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c',
    rating: 4.7,
    address: '成都市武侯区玉林南路',
    description: '成都市井美食'
  },
  {
    id: '12',
    name: 'IFS国际金融中心',
    category: '商圈',
    tags: ['购物', '地标'],
    image: 'https://images.unsplash.com/photo-1577595927338-3a4b0d49b2d9',
    rating: 4.8,
    address: '成都市锦江区红星路3段1号',
    description: '成都地标性商业中心'
  }
];

export function getMockPlaces() {
  return mockPlaceList;
}

// 根据分类获取地点列表
export function getMockPlacesByCategory(category) {
  return mockPlaceList.filter(place => place.category === category);
}

// 获取推荐地点
export function getMockRecommendedPlaces() {
  return mockPlaceList.filter(place => place.rating >= 4.8);
} 