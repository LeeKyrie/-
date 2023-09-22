<template>
  <div id="app">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <van-tabbar route>
      <van-tabbar-item replace to="/" icon="free-postage">寄快递</van-tabbar-item>
      <van-tabbar-item replace to="/check" icon="search">查快递</van-tabbar-item>
      <van-tabbar-item replace to="/myspace" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>

    <router-view/>
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
  //挂载之前即可弹出登录提示
  beforeMount(){
    if(this.$store.state.loginFlag === false)
    {
        Dialog.confirm({
        title: '你还没有登录!',
        message: '请先登录!',
        }).then(() => {
          // on confirm
           this.$router.push('/login');
           this.$store.commit('queryMedia');
           this.$store.commit('querySender');
           this.$store.commit('queryDriver');
           this.$store.commit('queryReceiver');
           this.$store.commit('queryGoods');
            this.$store.commit('queryTool');
            this.$store.commit('queryLostpack');
            this.$store.commit('queryLogaccident');
            this.$store.commit('querySenderdis');
        }).catch(() => {
          // on cancel
        })
    } 
 },
 
   
    
   
 
}

</script>
<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgb(248, 248, 248);
  height: calc(97vh);
  width:95%;
  padding:1% 2%;
  margin:0 auto;
  overflow: auto;
}
</style>
