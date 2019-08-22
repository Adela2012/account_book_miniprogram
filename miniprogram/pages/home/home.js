// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    yearList: [
      {
        label: '2019',
        balance: '0.22',
        monthList: [{
          label: '7',
          balance: '22',
          inAmount: '122,333',
          outAmount: '89,999',
          dayList: [{
            label: '17',
            weekLabel: '星期三',
            sortId: 1,
            sortName: '食物',
            typeId: 2,
            typeName: '支出',
            createTime: '2019-08-20 18:20',
            minCreateTime: ' 18:20',
            amount: '3',
            remark: '哈哈哈'
          }, {
              label: '17',
              weekLabel: '星期三',
              sortId: 3,
              sortName: '购置',
              typeId: 2,
              typeName: '支出',
              createTime: '2019-08-20 18:20',
              minCreateTime: ' 18:20',
              amount: '3',
              remark: '哈哈哈'
            }]
        },{
            label: '7',
            balance: '22',
            dayList: [{
              label: '17',
              weekLabel: '星期三',
              sortId: 1,
              sortName: '食物',
              typeId: 1,
              typeName: '收入',
              createTime: '2019-08-20 18:20',
              minCreateTime: ' 18:20',
              amount: '3',
              remark: '哈哈哈'
            }]
          }]
      },
      {
        label: '2019',
        balance: '0.22',
        monthList: [{
          label: '7',
          balance: '22',
          inAmount: '122,333',
          outAmount: '89,999',
          dayList: [{
            label: '17',
            weekLabel: '星期三',
            sortId: 1,
            sortName: '食物',
            typeId: 2,
            typeName: '支出',
            createTime: '2019-08-20 18:20',
            minCreateTime: ' 18:20',
            amount: '3',
            remark: '哈哈哈'
          }, {
            label: '17',
            weekLabel: '星期三',
            sortId: 3,
            sortName: '购置',
            typeId: 2,
            typeName: '支出',
            createTime: '2019-08-20 18:20',
            minCreateTime: ' 18:20',
            amount: '3',
            remark: '哈哈哈'
          }]
        }, {
          label: '7',
          balance: '22',
          dayList: [{
            label: '17',
            weekLabel: '星期三',
            sortId: 1,
            sortName: '食物',
            typeId: 1,
            typeName: '收入',
            createTime: '2019-08-20 18:20',
            minCreateTime: ' 18:20',
            amount: '3',
            remark: '哈哈哈'
          }]
        }]
      }
    ]

  },

  /**
   * 点击年栏
   */
  yearLineTap(e) {
    let yearList = this.data.yearList
    let yindex = e.currentTarget.dataset.yindex
    yearList[yindex].isShow = !yearList[yindex].isShow
    this.setData({yearList})
  },

  /**
   * 点击月栏
   */
  monthLineTap(e) {
    let yearList = this.data.yearList
    let yindex = e.currentTarget.dataset.yindex
    let mindex = e.currentTarget.dataset.mindex
    yearList[yindex].monthList[mindex].isShow = !yearList[yindex].monthList[mindex].isShow 
    this.setData({ yearList })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let yearList = this.data.yearList
    yearList.forEach((i, ix) => {
      i.isShow = false 
      if (ix == 0) i.isShow = true
      i.monthList.forEach((mi, mix) => {
        mi.isShow = false
        if (mix == 0) mi.isShow = true
        mi.dayList.forEach((di, dix) => {
          di.isShow = false
          if (dix == 0) di.isShow = true
        })
      })
    })
    this.setData({yearList})
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
    const query = wx.createSelectorQuery()
    query.selectAll('.month-block').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res)
    })
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