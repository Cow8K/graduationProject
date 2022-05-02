// pages/shipping/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        doDelete : false,
        addresses:[],
        addId:0,
        doSet:false
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
            //type == 0 表示取件，1 表示收件 
          url: '/pages/address/index?type=1',
        })
    },
    delete(e){

        wx.showModal({
            title: '提示',
            content: '确认删除这条地址吗',
            success (res) {
              if (res.confirm) {
                // 获取当前地址的id
                let addId = e.currentTarget.dataset.id;
                wx.request({
                    url: 'http://localhost/address/delete',
                    data:{id:addId,type:1},
                    success:(result)=>{
                        if(result.data.status == 200){
                            wx.navigateTo({
                                url: '/pages/shipping/index?delete=1',
                            })
                        }else{
                            wx.showToast({
                                title: '删除失败',
                                icon:'error',
                                duration:1400
                            })
                        }
                    }
                })
              } else if (res.cancel) {
                wx.showToast({
                  title: '已取消',
                  icon:'none',
                  duration:1200
                })
              }
            }
        })
    },
    setDefault(e){
        let addId = e.detail.value;

        let addresses = this.data.addresses;
        for(var i=0;i<addresses.length;i++){
            addresses[i].status = 0;
            if (addresses[i].id == addId) {
                addresses[i].status = 1;
                this.setData({
                    addId:addresses[i].id,
                    doSet:true
                })
            }
        }

        this.setData({
            addresses:addresses
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.message==1){
            wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration:1400
              });
        }
        if(options.delete==1){
            wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration:1400
              });
        }

        wx.request({
          url: 'http://localhost/address/query?type=1',
          success:(result)=>{
              let addresses = result.data.addresses;
              this.setData({
                  addresses:addresses
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
        if(this.data.doSet){
            let addId = this.data.addId;
            wx.request({
                url: 'http://localhost/address/set',
                data:{id:addId,type:1},
            })
        }
        wx.switchTab({
          url: '/pages/mine/index',
        })
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