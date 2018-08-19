// pages/detail/detail.js

Page({
  data: {
    showDialog: false,
    allCount: 76000,
    oldCount: '0.00',
    newCount: '',
    startDate: 25,
    endDate: 20,
    month: 0,
    overDay: 0,
  },
  edit() {
    wx.navigateTo({
      url: '../editCard/editCard',
    })
  },
  addMoney() {
    this.setData({
      showDialog: !this.data.showDialog,
    })
  },
  submitInput() {
    if (this.data.newCount == '' || this.data.newCount == 'NaN') {
      wx.showToast({
        title: '请输入金额',
        icon: 'none',
        duration: 2000,
      })
    } else {
      this.setData({
        showDialog: false,
        oldCount: Number(this.data.newCount).toFixed(2),
      })
    }
  },
  inputCount(e) {
    this.setData({
      newCount: parseFloat(e.detail.value).toFixed(2),
    })
  },
  payOfBills() {
    this.setData({
      oldCount: '0.00',
    })
    wx.showToast({
      title: '已还清账单',
      icon: 'success',
      duration: 2000,
    })
  },
  onLoad() {
    let date = new Date()
    let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (date.getDate() <= this.data.endDate) {
      this.setData({
        overDay: this.data.endDate - date.getDate(),
        month: date.getMonth() + 1,
      })
    } else {
      this.setData({
        overDay: this.data.endDate + monthArr[date.getMonth()] - date.getDate(),
        month: date.getMonth() + 2,
      })
    }
  },
})
