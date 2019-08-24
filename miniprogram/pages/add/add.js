// pages/add/add.js
Page({

  /**
   * Page initial data
   */
  data: {
    navBarData: [{
      title: '收入',
      type: '1'
    }, {
      title: '支出',
      type: '2'
    }],
    navType: '1',
  },

  /**
   * 导航栏点击
   */
  onClickTab(e) {
    let navType = e.detail.selectType
    this.setData({navType})
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})