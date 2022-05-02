// pages/addressDetail/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btn:false,
        // 0 表示取件，1表示收件
        type: 0,
        // status表示是否为默认地址，0表示否，1表示是
        status:0,
        address:{}
    },

    // 设置是否为默认地址
    setStatus(e){
        // console.log(e.detail.value);
        let checked = e.detail.value;
        if(checked){
            this.setData({
                status:1
            })
        }else{
            this.setData({
                status:0
            })
        }
    },

    // 改变按钮颜色
    changeColor(e){
        // console.log(e)
        if(e.detail.value === ""){
            this.setData({btn:false})
        }else this.setData({btn:true});
    },

    // 获取表单数据（地址），发送给服务器
    getValues(e){
        // 将地址解析成json对象
        let address = e.detail.value;
        address.status = this.data.status;
        address.uid = getApp().globalData.stuId;

        let type = this.data.type;

        wx.request({
            url: 'http://localhost:80/address/update',
            data: {
                address:address,
                type:type,
                id:address.id
            },
            success:result=>{
                if(result.data.status == 200){
                    // type == 1跳转到收件地址页面，反之跳转到取件页面
                    if(type==1){
                        wx.navigateTo({
                            url: '/pages/shipping/index?modify=1',
                        })
                    }else{
                        wx.navigateTo({
                            url: '/pages/pickup/index?modify=1',
                          })
                    }
                }else{
                    wx.showToast({
                        title: '修改失败',
                        icon: 'fail',
                        duration:1000
                      });
                }
            },
          })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        // 判断是从取件地址还是收件地址跳转到当前页面
        let bean = options.type;
        this.setData({
            type:bean
        });

        // 根据addressID查询指定地址
        wx.request({
          url: 'http://localhost/address/queryById',
          data:options,
          success:result=>{
              if(result.data.status==200){
                  this.setData({
                      address:result.data.address
                  })
              }
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