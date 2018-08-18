// pages/addCard.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardName: '',
    arrayDate: [],
    startDate: '',
    endDate: '',
  },
  startPicker(e) {
    this.setData({
      startDate: e.detail.value,
    })
  },
  endPicker(e) {
    this.setData({
      endDate: e.detail.value,
    })
  },
  selectCard() {
    wx.navigateTo({
      url: '../cardList/cardList',
    })
  },
  submit() {
    wx.navigateBack({
      delta: 1,
    })
    setTimeout(function() {
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
    }, 500)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let date = new Array()
    for (var i = 1; i < 29; i++) {
      date.push(i + '日')
    }
    this.setData({
      arrayDate: date,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
})
