// Component/IndicatorDots/ComIndicatorDots.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    source: { // 属性名
      type: Array,
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    currentIndex: {
      type: Number,
      value: 0,
    },
    dotType: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal, changedPath) {
        if (newVal == 1) {
          this.setData({
            selDotType: "dots_item_select_large"
          });
        }
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    selDotType: "dots_item_select"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
