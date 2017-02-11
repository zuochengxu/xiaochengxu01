//指定生命周期事件
App({
    foo (){
        return 'bar'
    },
    data:{},
    num:100,
    onLaunch (){
        console.log('onLaunch');
    }
})