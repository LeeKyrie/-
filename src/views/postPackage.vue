//首页中，功能图（寄快递）
<template>
  <div class="bodyStyle">
    <logo-com></logo-com>
    <ad-image-com></ad-image-com>
    <div class="divClass" :style="{ backgroundImage: 'URL'+'('+imageURL+')' }">
        <div class="sonDiv">
            <van-grid clickable :column-num="2">
              <van-grid-item title="<=100kg" :icon="icon1" text="寄快递" @click="postExpress0"/>
              <van-grid-item title=">100kg" :icon="icon2" text="寄重货" @click="postExpress1"/>
              <van-grid-item title="事故记录" :icon="icon3" text="事故记录" to="/accident"/>
              <van-grid-item title="详细账单" icon="balance-list" text="账 单" to="/bill"/>
            </van-grid>
         </div> 
    </div>
    <div class="divStyle">
      <van-grid clickable :column-num="4">
        <van-grid-item icon="gold-coin" text="时效运费" to="/moneyQuery"/>
        <van-grid-item icon="clear" text="违禁品" to="/forbid"/>
        <van-grid-item icon="phone" text="客服电话" @click="showPopup"/>
        <van-grid-item icon="info" text="相关说明" :msg="msg" to="/info"/>
      </van-grid>
    </div>

     <!-- 弹出框 -->
    <van-popup v-model="show" round
      :style="{ width:'30%' ,padding:'70px'}"
    ><b> 客服电话为 :</b><br><b style="color:blue;">020-8528-0110</b></van-popup> 

  </div>
</template>

<script>
// @ is an alias to /src
import AdImageCom from '../components/adImageCom.vue'
import logoCom from '../components/logo.vue'

export default {
  name: 'post',
  data(){
    return{
      show: false,
      msg:'相关说明',
      imageURL:require('../assets/背景图.jpg'),
      icon1:require('../assets/寄快递.png'),
      icon2:require('../assets/寄重货.png'),
      icon3:require('../assets/撞车.jpg'),
    }
  },
  components: {
    AdImageCom,
    logoCom
  },
   methods: {
    showPopup() {
      this.show = true;
    },
    postExpress0(){
      this.$router.push("/postArea")
      this.$store.commit('queryDatasrg')
      this.$store.commit('queryDatadmt')
    },
    postExpress1(){
      this.$router.push("/postWeight")
      this.$store.commit('queryDatasrg')
      this.$store.commit('queryDatadmt')
    }
  },
}
</script>

<style scoped>
.divStyle{
        bottom: -13%;
        width:95%;
        height:35%;
        position: fixed;
}
.divClass{
        /* background:rgb(240, 239, 240); */
        /* background-image: URL('../assets/广告1.jpg'); */
        bottom: 30%;
        left:10%;
        width:80%;
        height:20%;
        position: fixed;
        box-shadow: 0px 0px 20px rgb(219, 194, 194);
    }
.sonDiv{
        margin-top:0.5vh;
        height:100%;
        position: relative;
        box-shadow: 0px 0px 50px rgb(219, 194, 194);
  }
    

</style>
