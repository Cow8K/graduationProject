// pages/square/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 未接单的订单列表
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
     * 当页面渲染完成时，直接向服务器请求未被接单的订单的信息
     */
    onReady: function () {
        // let app = getApp();
        // let stuId ='';
        // app.globalData.stuId ? stuId=app.globalData.stuId : stuId;

        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.request({
            url: 'http://localhost/square/orders',
            success:(result)=>{
                if(result.data.status == 200){
                    this.setData({
                        orderList:result.data.orders,
                    })
                }
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