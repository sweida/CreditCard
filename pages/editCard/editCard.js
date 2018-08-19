// pages/addCard.js
Page({
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

  submitEdit() {
    wx.navigateBack({
      delta: 1,
    })
    setTimeout(function() {
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000,
      })
    }, 500)
  },
  delete() {
    wx.showModal({
      title: '提示',
      content: '是否删除该卡片？',
      success: function (res) {
        if (res.confirm) {
          wx.navigateBack({
            delta: 2,
          })
          setTimeout(function () {
            wx.showToast({
              title: '已经删除卡片',
              icon: 'success',
              duration: 2000,
            })
          }, 500)
        }
      }
    })

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
})
