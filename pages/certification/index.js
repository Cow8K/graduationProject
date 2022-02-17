// pages/certification/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btn:false,
    },

    // 改变按钮颜色
    changeColor(e){
        // console.log(e)
        if(e.detail.value === ""){
            this.setData({btn:false})
        }else this.setData({btn:true});
    },

    // 身份认证
    doCertify(e){
        let certificationData = e.detail.value;
        console.log(certificationData)

        wx.request({
          url: 'http://localhost/certification',
          data: certificationData,

        success:(result)=>{
            // 服务器响应的状态码为 200，说明向数据库插入数据成功
            if(result.data.status == 200){
                // 认证成功后跳转到首页
                wx.switchTab({
                    url: '/pages/index/index',
                })
                // 向用户发起弹窗，提醒认证成功
                wx.showToast({
                    title: '认证成功！',
                    icon:  'success',
                    duration: 1500
                });
            }else{
            // 如果服务器响应的状态码不为200，说明认证失败
            // 提醒用户稍后再试
            wx.showToast({
                title: '认证失败，稍后再试',
                icon:  'error'
                })
            }
          }
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