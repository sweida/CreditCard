// pages/cardList/cardList.js

Page({
  data: {
    cardData: [
      {
        id: 1,
        name: '农业银行'
      },{
        id: 2,
        name: '工商银行'
      },{
        id: 3,
        name: '中国银行'
      },{
        id: 4,
        name: '交通银行'
      },{
        id: 5,
        name: '上海银行'
      },{
        id: 6,
        name: '光大银行'
      },{
        id: 7,
        name: '民生银行'
      },{
        id: 8,
        name: '中信银行'
      },{
        id: 9,
        name: '建设银行'
      },{
        id: 10,
        name: '招商银行'
      },{
        id: 11,
        name: '邮蓄银行'
      },{
        id: 12,
        name: '浙商银行'
      },{
        id: 13,
        name: '华夏银行'
      },{
        id: 14,
        name: '工商银行'
      },{
        id: 15,
        name: '兴业银行'
      },{
        id: 16,
        name: '不知道银行'
      },{
        id: 17,
        name: '不知道银行'
      },{
        id: 18,
        name: '不知道银行'
      },{
        id: 19,
        name: '不知道银行'
      },{
        id: 20,
        name: '汇丰银行'
      },
    ]
  },

  selectCard() {
    wx.navigateTo({
      url: '../addCard/addCard'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})