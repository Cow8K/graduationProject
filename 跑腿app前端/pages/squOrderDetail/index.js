Page({

    /**
     * 页面的初始数据
     */
    data: {
        orders:[],
        oId:''
    },

    // 使订单的状态变为已完成
    doHelp(e){
      // 弹窗提示，提醒用户是否已完成订单，
      wx.showModal({
        title: '提示',
        content:'确认帮助该同志吗？',
        success:(res)=>{
          // 如果用户点击确定，则向服务器发送请求，使订单的状态变为已完成
          if(res.confirm){
            let app = getApp();
            let stuId = app.globalData.stuId;

            wx.request({
              url: 'http://localhost/square/accept?oId='+this.data.oId+'&stuId='+stuId,
              success:(result)=>{
                if(result.data.status==200){
                  // 当订单完成后，再向数据库请求最新的订单数据
                  wx.request({
                    url: 'http://localhost/order/orderDetails?oId='+this.data.oId,
                    success:(result)=>{
                      this.setData({
                          orders:result.data.orderList,
                      })
                    }
                  });
                  // 重新渲染订单详情页
                  wx.reLaunch({
                    url: '/pages/squOrderDetail/index?oId='+this.data.oId,
                  });
                  wx.showToast({
                    title: '已完成接单',
                    icon:'success'
                  })
                }
              }
            })
          }else if(res.cancel){
            console.log("用户点击取消");
          }
        }
      })
    },

    /**
     * 生命周期函数--监听页面加载
     * 向服务器发起请求，获取订单详情
     * options为上一个页面传来的数据，即订单号
     */
    onLoad: function (options) {
      this.setData({
        oId:options.oId,
      })
        // console.log(this.data.oId);
        wx.request({
          url: 'http://localhost/order/orderDetails?oId='+options.oId,
          success:(result)=>{
            this.setData({
                orders:result.data.orderList,
            })
          }
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