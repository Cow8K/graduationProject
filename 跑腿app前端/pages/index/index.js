Page({

  /**
   * 页面的初始数据
   */
  data: {
    choise:[
      {id:0,name:'帮我送',isChosen:true},
      {id:1,name:'帮我取',isChosen:false},
      {id:2,name:'帮我买',isChosen:false}
    ],
    getAddress:{address:'....'},
    recAddress:{address:''},
    judge:false,
  },
  changeStatus(e){
    let {id} = e.currentTarget.dataset
    // let list = this.data.choise;
    let list = JSON.parse(JSON.stringify(this.data.choise))
    list.forEach((item)=>{
        item.id == id ? item.isChosen=true : item.isChosen=false
    })

    let app = getApp();
    app.globalData.type = e.currentTarget.dataset.id;
    
    this.setData({
      choise:list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置收件与取件地址的数据共享
    let app = getApp();

    this.setData({
      getAddress:app.globalData.getAddress,
      recAddress:app.globalData.recAddress,
    });

    // 检验学生是否进行了身份认证
    wx.request({
      url: 'http://localhost/judge',
      success: result => {
        if(result.data.status == 200) {
          this.setData({judge:true});
          app.globalData.stuId = result.data.stuId;
        }
      }
    });
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