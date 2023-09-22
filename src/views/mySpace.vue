//我的空间，第一页
<template>
  <div class="bodyStyle">
      <div class="divStyle">
            <!-- this.$store.state.loginFlag = true; -->
        <img :src="profile" class="imageProfile" title="头像">
        <b class="spanStyle">{{ this.$store.state.loginName }}</b>
        <img src="../assets/设置.png" class="setImg" title="设置" @click="setClick">
      </div>
      <br>
      <br>
      <hr>
      <van-grid clickable :column-num="3">
        <van-grid-item icon="comment" text="服务查询" to="/check"/>
        <van-grid-item icon="chat" text="留言服务" to="/myspace/chat"/>
        <van-grid-item icon="location" text="地址管理" to="/myspace/address"/>
      </van-grid>

    <div class="bottomStyle">
      <van-cell-group>
        <van-cell v-if="powerFlag" icon="send-gift" title='"包裹"之最' is-link @click="showPopup"/>
        <van-cell v-if="powerFlag" icon="bill" title='"花费"之最' is-link @click="showPopup1"/>
        <van-cell v-if="powerFlag" icon="wap-home" title='"地区"之最' is-link @click="showPopup2"/>
      </van-cell-group>
    </div>
    <hr>
      <!-- 弹出框 -->
    <van-popup v-model="show" round :style="{ width:'60%' ,padding:'70px'}">
       <h4>寄件最多的客户为：<b>{{ this.postMostName }}</b></h4>
        <h4>寄件数量为：<b>{{ this.postMostNum }} (个)</b></h4>
         <h4>寄件所在城市为：<b>{{ this.postMostCity }}</b></h4>
          <h4>联系方式：<b>{{ this.postMostTel }}</b></h4>
    </van-popup> 
       <!-- 弹出框 -->
    <van-popup v-model="show1" round :style="{ width:'60%' ,padding:'70px'}">
       <h4>花费最多的客户为：<b>{{ this.moneyMostName }}</b></h4>
        <h4>总费用为：<b>{{ this.moneyMost }} (￥)</b></h4>
         <h4>所在城市为：<b>{{ this.moneyMostCity }}</b></h4>
          <h4>联系方式：<b>{{ this.moneyMostTel }}</b></h4>
    </van-popup> 
       <!-- 弹出框 -->
    <van-popup v-model="show2" round :style="{ width:'60%' ,padding:'70px'}">
        <h4>寄件最多的（区）城市为：<b>{{ this.cityName }}</b></h4>
          <h4>城市包裹数量：<b>{{ this. mostCityNum }} (个)</b></h4>
    </van-popup> 

      <van-button type="warning" class="butStyle" @click="butClick" v-if="flag">登 录</van-button>
  </div>
</template>

<script>
export default {
    name: 'myspace',
    components: {
    
  },
  data(){
    return{
      show: false,
      show1: false,
      show2: false,
      profile:this.$store.state.profile,
      flag:!this.$store.state.loginFlag,
      powerFlag:this.$store.state.powerFlag,

      postMostName:'', //寄件（包裹）最多的
      postMostNum:0,
      postMostTel:'',
      postMostCity:'',

      moneyMostName:'',//花费最多
      moneyMost:'',
      moneyMostTel:'',
      moneyMostCity:'',

      cityName:'', //最多城市
      mostCityNum:0,

    }
  },
  methods:{
      showPopup() { //最多包裹
     
      var cus = this.$store.state.mostCus
      this.postMostName = cus[0].name
      this.postMostNum = cus[0].num
      this.postMostCity = cus[0].city
      this.postMostTel = cus[0].phone

      for(let i=1;i<cus.length;i++)
      {
        if(cus[i].num > this.postMostNum)
        {
          this.postMostName = cus[i].name
          this.postMostNum = cus[i].num
          this.postMostCity = cus[i].city
          this.postMostTel = cus[i].phone
        }
      }
       this.show = true;
    },
     showPopup1() { //花费最多
     
      var cus = this.$store.state.mostCus

      this.moneyMostName = cus[0].name
      this.moneyMost = cus[0].money
      this.moneyMostTel = cus[0].phone
      this.moneyMostCity= cus[0].city
      for(let i=1;i<cus.length;i++)
      {
         if(cus[i].money > this.moneyMost)
        {
           this.moneyMostName = cus[i].name
            this.moneyMost = cus[i].money
            this.moneyMostTel = cus[i].phone
            this.moneyMostCity= cus[i].city
        }
      }
       this.show1 = true;
    },
     showPopup2() {
     
      var list = this.$store.state.mostCity
      this.cityName= list[0].name
      this.mostCityNum = list[0].number
      for(var i=1;i<list.length;i++)
      {
         if(list[i].number > this.mostCityNum)
        {
           this.cityName= list[i].name
           this.mostCityNum = list[i].number
        }
      }
       this.show2 = true;

    },
    butClick(){
      this.$router.push('/login')
       this.$store.commit('queryMedia');
       this.$store.commit('querySender');
       this.$store.commit('queryDriver');
       this.$store.commit('queryReceiver');
        this.$store.commit('queryGoods');
        this.$store.commit('queryTool');
        this.$store.commit('queryLostpack');
        this.$store.commit('queryLogaccident');
        this.$store.commit('querySenderdis');
    },
    setClick(){
      this.$router.push('/myspace/set')
    }
  }


}
</script>

<style scoped>
 .bodyStyle{
   text-align: left;
 }
.divStyle{
  /* border:1px solid aquamarine; */
  background-color: rgb(247, 221, 191);
  height:15vh;
  width:99%;
  margin-top: 1vh;
  display: flex;
  margin: 2px;
  box-shadow:1px 4px  rgb(209, 193, 174);
  border-radius: 10px;
}
.bottomStyle{
  margin-top:15vh;
}
b{
  color: blue;
}
.imageProfile{
    width:24%;
    height:auto;
    border-radius: 50%;
    border:2px solid rgb(252, 251, 250);
    margin: 3px;
}
.spanStyle{
  position: relative;
  top:44%;
}
.setImg{
    width:7%;
    height: 4%;
    position: absolute;
    top:6.75%;
    left:86%;
    border-radius: 40px;
    }
.butStyle{
  position: absolute;
  top:70%;
  left: 50%;
  transform: translate(-50%,0);
}  
</style>