Page({
    data:{
        message:"Hello 小程序:",
        list:[]
    },
    onLoad(){
        // this.setData({
        //     message:Date.now()
        // })
    const that=this
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
       header: {
      'content-type': 'application/x-www-form-urlencoded'
},
      success: function(res){
        // success
        that.setData({
            list:res.data.subjects
        })
        // console.log(res.data);
      }
    })
    }
   
})