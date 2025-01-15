const mockPlaceList = [
  {
    id: '1',
    name: '宽窄巷子',
    category: '景点',
    tags: ['文化古迹', '网红打卡'],
    image: 'https://gd-hbimg.huaban.com/095ddb74f0388634c7f5eff8284fcffcaf0920e320017-1eYpj4_fw658webp',
    rating: 4.8,
    address: '成都市青羊区金河路宽窄巷子',
    description: '成都市最古老的商业街之一'
  },
  {
    id: '2',
    name: '杜甫草堂',
    category: '景点',
    tags: ['人文历史', '诗意栖居'],
    image: 'https://aigc-image.bj.bcebos.com/miaobi/5mao/b%275p2c55Sr6I2J5aCC566A5LuLXzE3MjM1MjU5MDUuMzY5MDMyNF8xNzIzNTI1OTA1Ljc1NzU2OTM%3D%27/1.png?authorization=bce-auth-v1%2FALTAKbRIJlaytWmofxMNJRsDLO%2F2024-08-13T05%3A11%3A46Z%2F-1%2F%2Fd95d3855446e38236af180edd374c0eb9f5f5d14aafc7b53813f289c51f4a0e9?x-bce-process=image/auto-orient,o_1/watermark,image_NDU0ZjAyZDU5YjQ1LnBuZw==,bucket_searchbox,w_45,text_QOicguicnOS4jueJm-Wltg==,type_RlpMYW5UaW5nSGVp,size_45,x_30,y_30,interval_4,color_FFFFFF,effect_softoutline,shc_000000,blr_2,align_1',
    rating: 4.7,
    address: '成都市青羊区青华路37号',
    description: '唐代大诗人杜甫流寓成都时的故居'
  },
  {
    id: '3',
    name: '春熙路太古里',
    category: '商圈',
    tags: ['购物', '美食'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.9,
    address: '成都市锦江区春熙路太古里',
    description: '时尚购物中心'
  },
  {
    id: '4',
    name: '大熊猫繁育研究基地',
    category: '景点',
    tags: ['熊猫', '自然'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.9,
    address: '成都市成华区熊猫大道1375号',
    description: '世界著名的大熊猫保护研究机构'
  },
  {
    id: '5',
    name: '马路边边麻辣烫',
    category: '小吃',
    tags: ['成都味道', '深夜食堂'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.7,
    address: '成都市武侯区玉林西路',
    description: '成都特色小吃'
  },
  {
    id: '6',
    name: '锦里古街',
    category: '景点',
    tags: ['古街', '小吃'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.6,
    address: '成都市武侯区武侯祠大街231号',
    description: '三国文化特色商业街'
  },
  {
    id: '7',
    name: '九眼桥酒吧街',
    category: '娱乐',
    tags: ['夜生活', '音乐'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.5,
    address: '成都市锦江区九眼桥',
    description: '成都夜生活聚集地'
  },
  {
    id: '8',
    name: '四川博物院',
    category: '文化',
    tags: ['博物馆', '历史'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.8,
    address: '成都市青羊区浣花南路251号',
    description: '展示四川历史文化的重要场所'
  },
  {
    id: '9',
    name: '火锅江湖',
    category: '美食',
    tags: ['火锅', '川菜'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.8,
    address: '成都市锦江区红星路步行街',
    description: '地道成都火锅'
  },
  {
    id: '10',
    name: '望江楼公园',
    category: '公园',
    tags: ['园林', '休闲'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.6,
    address: '成都市武侯区望江路30号',
    description: '千年古刹与现代公园的完美结合'
  },
  {
    id: '11',
    name: '玉林小馆',
    category: '美食',
    tags: ['川菜', '家常菜'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
    rating: 4.7,
    address: '成都市武侯区玉林南路',
    description: '成都市井美食'
  },
  {
    id: '12',
    name: 'IFS国际金融中心',
    category: '商圈',
    tags: ['购物', '地标'],
    image: 'https://pic5.40017.cn/03/000/eb/41/rBANB1wIkfCAafF9AAH5k5yDbO8149_750x_00.jpg',
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