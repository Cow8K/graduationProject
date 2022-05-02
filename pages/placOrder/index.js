// pages/placOrder/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        typeList:[
            {id:0,name:'餐饮',chosed:false},
            {id:1,name:'文件',chosed:false},
            {id:2,name:'生鲜',chosed:false},
            {id:3,name:'蛋糕',chosed:false},
            {id:4,name:'鲜花',chosed:false},
            {id:5,name:'钥匙',chosed:false},
            {id:6,name:'服饰',chosed:false},
            {id:7,name:'快递',chosed:false},
            {id:8,name:'其他',chosed:false}
        ],
        getAddress:{address:'....'},
        recAddress:{address:''},
        typeName:'',
    },

    choiseType(e){
        console.log(e)

        let {id} = e.currentTarget.dataset;
        let temp = JSON.parse(JSON.stringify(this.data.typeList));

        temp.forEach(element => {
            element.id == id ? element.chosed=true : element.chosed=false;
        });

        this.setData({
            typeList:temp,
            typeName:e.currentTarget.dataset.value,
        })
        
    },

    makeOrder(e){
        let app = getApp();
        let getAdd = this.data.getAddress;
        let recAdd = this.data.recAddress;
        
        let uId = app.globalData.stuId;
        let getAddress = getAdd.address+getAdd.number;
        let recAddress = recAdd.address+recAdd.number;
        let name = this.data.typeName;
        let type = app.globalData.type;

        let orderInfo = {
            uId,
            type,
            name,
            // content : e.detail.value.content,
            // time : e.detail.value.time,
            // pay:e.e.detail.value.pay,
            ...e.detail.value,
            getAddress,
            recAddress,
           
        };

        wx.request({
          url: 'http://localhost/order/makeOrder',
          data:orderInfo,
        //   method:'POST',
          success: result =>{
            if(result.data.status == 200){
                wx.switchTab({
                  url: '/pages/square/index',
                });

                wx.showToast({
                  title: '下单成功！',
                  icon:'success'
                })
            }
          }
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let app = getApp();

        this.setData({
          getAddress:app.globalData.getAddress,
          recAddress:app.globalData.recAddress,
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