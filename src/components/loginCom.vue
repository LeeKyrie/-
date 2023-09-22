//登录组件
<template>
<div>
  <transition name="van-slide-down">
      <img src="../assets/logo1.jpg" v-show="visible">
  </transition>
  <div style="margin:250px auto;">
      <van-form>
        <van-field
            v-model="username"
            name="用户名"
            label="用户名 :"
            placeholder="请输入用户名"
            clearable
            :rules="[{ required: true, message: '' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密 码 :"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '' }]"
        />
     </van-form>
     <div style="margin: 10px;">
            <van-button type="primary" style="margin-left:20%;margin-right:3%;"  @click="quireLogin">登录</van-button>
            <div style="display:inline;">
                <van-button type="info" size="normal" @click="clickAdd">注册</van-button>
                <span style="color:blue;vertical-align:bottom;">(没有账号？先注册吧!)</span> 
            </div>
             
     </div>
   </div>
   <div v-if="loginState" class='error'>密码或者账号错误！</div>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            username: '',
            password: '',
            list:[],
            visible:true,
            loginState:false, //用于登录失败后的提示
            index:1, //选择的地址列表下标，默认不为管理员
        }
    },
    methods: {
      clickAdd:function(){
        this.$router.push('/login/addUser');
      },

    //验证登录信息
    quireLogin(){
      axios.get('http://localhost:3000/api/query/manager').then((response) => {
            this.list=response.data;//保存数据
            for(let i=0;i<this.list.length;i++)
            {
              // console.log(this.list[i].name);
              // console.log(this.list[i].password);
              if(this.list[i].name == this.username)
              {
                 if(this.list[i].password == this.password)
                 {
                   console.log('登录成功！')
                  //  this.$store.state.loginFlag
                  this.$store.state.loginFlag = true;
                  this.$store.state.numPost = 2
                  this.$store.state.numReceive = 2
                  this.$store.state.text1='重新登陆';
                  this.$store.state.power=this.list[i].power;
                  this.$store.state.loginName=this.list[i].name;
                  if(this.$store.state.power == 0)
                  {
                     this.$store.state.profile=require('../assets/头像1.png');
                     this.$store.state.powerFlag=true;
                     this.index= 0;
                  }
                  else
                     this.$store.state.profile=require('../assets/头像2.png');                     
                  this.$router.push('/myspace');
                  this.$store.commit('queryAddr',this.index);
                  // console.log('--------------');
                  this.$store.commit('selectPackMsg');
                  this.$store.commit('queryMostCus');
                  this.$store.commit('queryMostCity');
                  // console.log(this.$store.state.power);
                  break;
                 }
              }
            }

            this.loginState = true;
            // this.userName=response.data[0].userName;
            // this.password=response.data[0].password;
            // this.power=response.data[0].power;
            // console.log('--------' +this.userName+'--------' +this.password);
            // console.log('--------' +this.power);
            // console.log(this.list);
        })
        
        
      },
    }


}
</script>

<style scoped>
.error{
  font-weight: bold;
  font-size: 20px;
  color:red;
}
img{
  border-radius: 15%;
  padding:5px;
  background-color:white ;
  width:150px;
  position: absolute;
  top:24.5%;
  left:50%;
  display: inline-block;
  transform: translate(-50%,-50%);
  
}

</style>