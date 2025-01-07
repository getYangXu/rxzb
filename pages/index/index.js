// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageLoading: false,
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
    imgSrcs: [], // 轮播图数据
    tabList: [
      {
        text: '推荐',
        key: 0,
      },
      {
        text: '川菜',
        key: 1,
      },
      {
        text: '火锅',
        key: 2,
      },
      {
        text: '景区',
        key: 3,
      },
      {
        text: '公园',
        key: 4,
      },
      {
        text: '娱乐',
        key: 5,
      },
      {
        text: '住宿',
        key: 6,
      }
    ],
    placeList: [], // 地点列表数据
    loadStatus: 0, // 加载状态
    categories: [
      {
        type: 'food',
        name: '美食',
        icon: '../../static/images/category/food.png',
        desc: '特色小吃'
      },
      {
        type: 'scenic',
        name: '景点',
        icon: '../../static/images/category/scenic.png',
        desc: '网红打卡'
      },
      {
        type: 'entertainment',
        name: '娱乐',
        icon: '../../static/images/category/entertainment.png',
        desc: '休闲放松'
      },
      {
        type: 'hotel',
        name: '住宿',
        icon: '../../static/images/category/hotel.png',
        desc: '品质住宿'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init();
  },

  init() {
    this.loadSwiper();
    this.loadPlaceList();
  },

  // 加载轮播图数据
  loadSwiper() {
    const { getMockSwiper } = require('../../services/mock/swiper.js');
    this.setData({
      imgSrcs: getMockSwiper()
    });
  },

  // 加载地点列表
  loadPlaceList() {
    const { getMockPlaces } = require('../../services/mock/places.js');
    this.setData({
      placeList: getMockPlaces(),
      loadStatus: 'loaded'
    });
  },

  // 导航到搜索页
  navToSearchPage() {
    wx.navigateTo({ url: '/pages/search/search' });
  },

  // 导航到分类页
  navToCategory(e) {
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/category/category?type=${type}` });
  },

  // 导航到详情页
  navToDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` });
  },

  // 标签切换处理
  tabChangeHandle(e) {
    // TODO: 根据标签切换加载不同数据
  },

  // 重试加载
  onReTry() {
    this.loadPlaceList();
  }
})