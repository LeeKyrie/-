// 这个是设置组件
<template>
  <div>
    <header>
      <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="设 置"
            @click-left="onClickLeft"
         />
    </header>
    <main class="divStyle">
       <section>
          <van-cell-group>
            <van-cell v-if="powerFlag" icon="add" title='系统简介' 
             is-link @click="showEvent"/>
            <van-popup v-model="show" :style="{ padding:'16px',borderRadius:'10px' }">
              <b>{{ this.introduction1 }}</b><br>
              <b>{{ this.introduction2 }}</b><br>
             <b>{{ this.introduction3 }}</b>
            </van-popup>
          </van-cell-group>

          <van-collapse v-model="activeNames">
          <van-collapse-item icon="star" title='版 本' name="1">
             {{ this.version }}
          </van-collapse-item>
          </van-collapse>

          <van-button type="primary" class="buttonStyle" @click="butClick">
            {{ this.$store.state.text1 }}
          </van-button>
      </section>
    </main> 
    <hr>
    <footer>
         <p>@Copyright BY KAIlee</p>
     </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      powerFlag:true,
      show:false,
      activeNames: [],
      version:'Version - 1.0.0',
      introduction1:'  本快递系统开发人员是lwp、zwd、wq，chw。',
      introduction2:'  本系统代码纯原创，拥有自主知识产权。',
      introduction3:'  系统开发，借鉴了国内速运顺丰快递的移动端平台页面。'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showEvent(){
      this.show = true
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
  },

}
</script>

<style scoped>
.divStyle{
    background:rgb(247, 244, 238);
    /* overflow:visible; */
    height:60vh;
    margin-top: 50px;
    position: relative;
    text-align: left;
}
.buttonStyle{
  position: absolute;
  top:54vh;
  left:50%;
  transform: translate(-50%,0);
  border-radius: 5px;

}
b{
  margin-left: 15px;
}
p{
  color:blue;
  position: fixed;
  position: absolute;
  top: 76vh;
  left: 50%;
  transform: translate(-50%,0);
}
footer{
   background:rgb(247, 244, 238);
   height:30vh;
   margin: 0;
}
</style>