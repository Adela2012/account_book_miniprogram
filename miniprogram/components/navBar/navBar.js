Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navBarConfig: {
      type: Array,
      value: []
    },
    activeType: {
      type: [String, Number]
    },
    // 高度
    height: {
      type: Number,
      value: 84
    },
    // 没有激活时候的字体颜色
    unActiveColor: {
      type: String,
      value: '#353535'
    },
    // 激活以后的字体颜色
    activeColor: {
      type: String,
      value: '#cb1933'
    },
    // 激活以后的字体大小
    activeFontSize: {
      type: Number,
      value: 28
    },
    // 没有激活时候的字体大小
    unActiveFontSize: {
      type: Number,
      value: 28
    },
    // line的高度
    lineHeight: {
      type: Number,
      value: 4
    },
    // line的宽度
    lineWidth: {
      type: Number,
      value: 100
    },
    // line的颜色
    lineColor: {
      type: String,
      value: '#cb1933'
    },
    // line的边框弧度
    lineRadius: {
      type: Number,
      value: 0
    },
    // line距离底部的高度
    lineBottom: {
      type: Number,
      value: 0
    },
    // bar底部的边颜色
    borderColor: {
      type: String,
      value: '#fff'
    },
    // 背景色
    background: {
      type: String,
      value: '#fff'
    },
    // 是否固定
    position: {
      type: String,
      value: 'fixed'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  ready: function () {
    const _self = this;
    if (this.properties.activeType) {
      let activeIndex = this.properties.navBarConfig.map(data => data.type).indexOf(this.properties.activeType);
      if (activeIndex === -1) activeIndex = 0;
      this.setData({ activeIndex });
    }
    var query = this.createSelectorQuery()
    query.select('.weui-navbar__slider').boundingClientRect(function (rect) {
      const lineWidth = rect.width
      wx.getSystemInfo({
        success: function (res) {
          _self.setData({
            sliderLeft: (res.windowWidth / _self.data.navBarConfig.length - lineWidth) / 2,
            sliderOffset: res.windowWidth / _self.data.navBarConfig.length * _self.data.activeIndex
          });
        }
      });
    }).exec(); 
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickTab(event) {
      this.setData({
        sliderOffset: event.currentTarget.offsetLeft,
        activeIndex: event.currentTarget.id
      });
      this.triggerEvent("onClickTab", { selectType: this.data.navBarConfig[event.currentTarget.id].type });
    }
  }
});
