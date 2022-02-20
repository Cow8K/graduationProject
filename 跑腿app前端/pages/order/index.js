// pages/order/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderList:[],
        stuId:''
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
     * 当页面显示时就向数据库请求，我的所有订单信息
     * 如果将以下代码放在onLoad函数里面，数据会出现脏读的情况
     */
    onShow: function () {
      let app = getApp();
      let stuId ='';
      app.globalData.stuId ? stuId=app.globalData.stuId : stuId;

      wx.request({
        url: 'http://localhost/order/myOrder?stuId='+stuId,
        success:(result)=>{
      // console.log(result.data.orderList);
            this.setData({
              orderList:result.data.orderList,
              stuId:result.data.stuId
            })
        }
      })
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