<template>
  <div>
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        title="留言服务"
        @click-left="onClickLeft"
      />
      <div class="divBodyStyle">
          <span>如您对我们有什么建议或者反馈投诉等</span><br>
          <span>
              亲，请在下方留言噢！</span>
          <hr>

          <div class="mainBodyStyle">
              <div v-for="item in contentList" :key="item">
                <chat-com :content="item"></chat-com>
              </div>
          </div>

          <div class="divBottom">
             <textarea class="inputStyle" v-model="text" v-focus></textarea>
            <button class="buttonClass" @click="onClick">发 送</button>
          </div>
      </div>
  </div>
</template>

<script>
import chatCom from '../components/chatCom.vue'
export default {
    data(){
        return{
            text:'',
            contentList:['默认留言，欢迎您！'],
        }
    },
    components:{
        chatCom
    },
    methods: {
        onClickLeft() {
        this.$router.go(-1);
        },
        onClick(){
         this.contentList.push(this.text)
         console.log(this.contentList);
        }
    },
    //自定义vue指令，强制获得焦点
    directives:{
        focus:{
            inserted:function(el){
                el.focus();
            }
        }
    },
    
}
</script>

<style scoped>
.mainBodyStyle{
    height: 57vh;
    padding:5px;
    overflow: auto;
}
.divBodyStyle{
    /* background:rgb(247, 244, 238); */
    /* overflow:visible; */
    /* height:120vh; */
    margin-top: 50px;
}
.divBottom{
    position: fixed;
    bottom: 50px;
    width:95%;
    height:20vh;
    margin:2px;
    background-color:white ;
    border: 1px solid white;
}
.buttonClass{
    margin-top:15vh;
    position: absolute;
    left:50%;
    transform: translate(-50%,-12px);
    color: white;
    background-color: rgb(70, 66, 70);
    padding:5px 20px;
    border-radius: 10px;
}
.inputStyle{
    float: left;
    margin:8px;
    width:95%;
    height:10vh;
    word-wrap:break-word;
    border-radius: 5px;
    border:1px solid rgb(238, 228, 228);
}
span{
    position: flex;
    padding:5px;
    color:rgb(196, 121, 133);
}
</style>