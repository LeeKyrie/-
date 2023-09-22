//第一页的搜索栏
<template>
  <div id="myapp">
    <!-- <h4>要爱自己，才能更好的去爱别人</h4> -->
    <!-- 搜索栏 -->
    <div>
      <van-search
          v-model="text"
          show-action
          placeholder="请输入快递ID号"
          @search="onSearch"
          background="rgb(240, 240, 240)"
      >
         <template #action>
            <b @click="onSearch" style="background-color:rgb(245, 245, 245);padding:3px;font-size:16px">搜索</b>
         </template>
    </van-search>
    </div>
    <!-- 寄送的快递&收到的 listPost.length-->
    <div v-if="hiddenFlag">
      <div class="divTwo">
          <button @click="clickEvent0" :class="{ classBottom:this.show0 }" class="classTest"
           >我寄的({{ this.$store.state.numPost }})</button>
          <button @click="clickEvent1" :class="{ classBottom:this.show1 }" class="classTest" 
           >我收到的({{ this.$store.state.numReceive }})</button>
      </div>
      <div v-if="show0">
        <ul>
         <li v-for="item in listPost" :key="item.id">
           <package-com :data = 'item'></package-com>
         </li>
        </ul>
    </div>
      <div v-if="show1">
        <ul>
         <li v-for="item in listReceive" :key="item.id">
           <package-com :data = 'item'></package-com>
         </li>
        </ul>
      </div>
    </div>
    <!-- 搜索栏点击后生效= -->
    <div v-if="!hiddenFlag">
       <ul>
         <li v-for="item in listSearch" :key="item.id">
           <package-com :data = 'item'></package-com>
         </li>
        </ul>
        <div v-if="flag"><b style="color:red;">对不起！没有该快递单号！</b>
         <van-button type="primary" class="buttonStyle" @click="backSearch">返回搜索主页</van-button>
        </div>
    </div>
  </div>
</template>

<script>
 import packageCom from '../components/packageRPCom.vue'
export default {
  components: {
     packageCom
  },
  data(){
    return{
        text:'',
        hiddenFlag:true,
        flag: true,// 索所结果标志位，有结果为false
        show0: false,
        show1: false,
        listPost: this.$store.state.listPost,
        listReceive: this.$store.state.listReceive,
        listSearch:[],
    }
  },
  methods:{
    clickEvent0:function(){
      this.show0= true;
      this.show1= false;
    },
    clickEvent1:function(){
      this.show0= false;
      this.show1= true;    
    },
    backSearch(){
     this.hiddenFlag =!this.hiddenFlag

    },
    onSearch:function(){
      // this.$router.push('/check/package');
      this.hiddenFlag = false
      // console.log(this.listPost);
      //搜索id号找包裹
      for(let i=0;i<this.listPost.length;i++)
      {
        if(this.text == this.listPost[i].expressID)
        {
          this.listSearch.push(this.listPost[i])
          this.flag = false
          // console.log('aaaaaaaaaa');
        }
      }
      for(let i=0;i<this.listReceive.length;i++)
      {
         if(this.text == this.listReceive[i].expressID)
        {
          this.listSearch.push(this.listReceive[i])
          this.flag = false
        }
      }
    },
    
  }

}
</script>

<style scoped>
#myapp{
  padding-bottom: 8vh;
  margin:5px;
}
.buttonStyle{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,0);
}
.classTest{
  display: inline;
  margin:auto;
  color:rgb(64, 68, 73);
  font-weight: 550;
  border:0.1px solid rgb(252, 246, 246);
  padding:2px; 
}
.classBottom{
    border-bottom: 3px solid rgb(10, 247, 10);
}
.divTwo{
  display: flex;
  margin:10px;
  background-color:rgb(242, 245, 240);
}
</style>