// pages/login/index.js
// const defaultAvatarUrl = 
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        nickname:"",
      },
      // 设置头像的url
      onChooseAvatar(e) {
        const { avatarUrl } = e.detail;
        this.setData({
          avatarUrl,
        })
      },
      // 用户点击确认按钮，执行toHome函数
      toHome(){
        let avatar = this.data.avatarUrl;
        let nickname = this.data.nickname;
        let currUser = {"img":avatar,"nickname":nickname,status:1};

        // 将用户授权信息保存到全局作用域中
        let app = getApp();
        app.globalData.currUser = currUser;
        wx.switchTab({
          url: '/pages/index/index',
        })
      },
      // 用户点击cancle函数，执行cancle函数
      cancle(){
        // 直接跳转到首页
        wx.switchTab({
          url: '/pages/index/index',
        })
      },
      // 监控文本框的输入
      setNickname(e){
        this.setData({
          nickname:e.detail.value
       })
      },
        
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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