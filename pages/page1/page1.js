const app = getApp();
Page({
onLoad (){
    const msg = app.foo();
    console.log(msg);
    console.log(app.data);
    console.log(app.num);
}
})