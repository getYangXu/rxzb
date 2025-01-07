import { config, cdnBase } from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genSwiperImageList } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: '美食',
          key: 0,
          subCategories: ['川菜', '火锅', '小吃', '茶馆', '西餐', '日料', '烧烤']
        },
        {
          text: '景点',
          key: 1,
          subCategories: ['景区', '公园', '博物馆', '古镇', '寺庙', '名胜', '观景台']
        },
        {
          text: '娱乐',
          key: 2,
          subCategories: ['KTV', '电影院', '游乐场', '剧场', '网吧', '密室逃脱', '轰趴馆']
        },
        {
          text: '住宿',
          key: 3,
          subCategories: ['酒店', '民宿', '青旅', '度假村', '农家乐']
        },
        {
          text: '购物',
          key: 4,
          subCategories: ['商场', '步行街', '特产', '集市', '奥特莱斯']
        },
        {
          text: '运动',
          key: 5,
          subCategories: ['健身房', '篮球场', '游泳馆', '足球场', '羽毛球馆']
        },
        {
          text: '休闲',
          key: 6,
          subCategories: ['按摩', '茶馆', '咖啡厅', '书店', '图书馆']
        }
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
