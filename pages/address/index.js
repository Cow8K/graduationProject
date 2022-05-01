// pages/address/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btn:false,
        // 0 表示取件，1表示收件
        type: 0,
    },

    // 改变按钮颜色
    changeColor(e){
        // console.log(e)
        if(e.detail.value === ""){
            this.setData({btn:false})
        }else this.setData({btn:true});
    },

    // 获取表单数据（地址），根据type类型进行不同处理
    getValues(e){
        // 将地址解析成json对象
        let adress = JSON.parse(JSON.stringify(e.detail.value));

        // 当type === 1时，说明是收件地址，将表单存入收件地址表
        if(type===1){

        }else{
            // 当type === 0时，说明是取件地址，将表单存入取件地址表
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let bean = options.type;
        this.setData({
            type:bean
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