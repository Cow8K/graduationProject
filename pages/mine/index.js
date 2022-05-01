// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        judge:false,
        currUser:{},
    },

    // 当点击“意见反馈”时，会触发该函数，使页面跳转到 意见反馈的页面
    toFeedback(e){
        wx.navigateTo({
          url: '/pages/feedback/index',
        })
    },
    // 当点击“联系客服”时，会触发该函数，该函数将唤起手机的拨号功能
    makeCall(e){
      wx.makePhoneCall({
          phoneNumber: '15367878822',
          success: function () {
              console.log("拨号成功！")
          },
          fail: function () {
              console.log("拨号失败！")
          }
          
      })
    },
    pickUp(){
        wx.navigateTo({
          url: '/pages/pickup/index',
        })
    },
    shipping(){
        wx.navigateTo({
          url: '/pages/shipping/index',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 检验学生是否进行了身份认证
        wx.request({
            url: 'http://localhost/judge',
            success: result => {
              if(result.data.status == 200) this.setData({judge:true});
            }
          });
          
          this.setData({
              currUser: getApp().globalData.currUser
          })
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