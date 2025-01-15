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
    interval: 3000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
    swiperList: [
      'https://gd-hbimg.huaban.com/d988f3e9e3e81912f5750cc442c0e3f40a9c36f02cb95-uxugPo_fw658webp',
      'https://gd-hbimg.huaban.com/0bc1cb634068d6baa09df9fde79ee03d1b5ace308634b-MEifHF_fw658webp',
      'https://gd-hbimg.huaban.com/7697a6d5b5fd8a516eb99715d2a9f1c9693b6284e916-C6mg7m_fw658webp'
    ], // 轮播图数据
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
        icon: '/static/images/category/火锅.png',
        // desc: '特色小吃'
      },
      {
        type: 'scenic',
        name: '景点',
        icon: '/static/images/category/锦鲤.png',
        // desc: '网红打卡'
      },
      {
        type: 'entertainment',
        name: '娱乐',
        icon: '/static/images/category/大鼓.png',
        // desc: '休闲放松'
      },
      {
        type: 'hotel',
        name: '住宿',
        icon: '/static/images/category/钱袋.png',
        // desc: '品质住宿'
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
    // this.loadSwiper();
    this.loadPlaceList();
  },

  // // 加载轮播图数据
  // loadSwiper() {
  //   const { getMockSwiper } = require('../../services/mock/swiper.js');
  //   this.setData({
  //     imgSrcs: getMockSwiper(),
  //   });
  // },

  // 加载地点列表
  loadPlaceList() {
    // debugger
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
  },

  navToActivityDetail(e) {
    const { index } = e.detail;
    const item = this.data.imgSrcs[index];
    wx.navigateTo({
      url: item.url
    });
  }
})