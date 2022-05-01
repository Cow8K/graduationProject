// pages/shipping/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        doDelete : false,
    },
    edit(){
        // 判断doDelete是否为true，如果是true则设为false，反之亦然。
        let flag = this.data.doDelete ? false : true;
        this.setData({
            doDelete : flag
        })
    },
    goAddress(){
        wx.navigateTo({
            //type == 1 表示取件，0 表示收件 
          url: '/pages/address/index?type=0',
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