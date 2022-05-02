App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // wx.navigateTo({
    //   url: 'pages/login/index',
    // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 全局变量
  globalData : {
    stuId:'',
    type:'0',
    getAddress:{address:' 请填写取件地址 >',number:'',contactman:'',phone:''},
    recAddress:{address:' 请填写收件地址 >',number:'',contactman:'',phone:''},
    shipping:{},
    pickup:{},
    // status为0表示用户为授权使用默认头像与昵称，为1使用用户指定的头像与昵称
    currUser:{img:"",nickname:"",status:0}
  }
})
