<template>
  <div>
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        title="注册新用户"
        @click-left="onClickLeft"
      />

      <div class="bodyStyle">
          <van-form>
            <van-field
                v-model="username"
                label="用户名："
                maxlength="12"
                placeholder="请输入用户名（1-12位）"
                :rules="[{ required: true }]"
            />
            <van-field
                v-model="password"
                type="password"
                label="密 码："
                maxlength="12"
                placeholder="请输入密码（1-12位）"
                :rules="[{ required: true }]"
            />
            <div style="margin: 16px;">
                <van-button round block :disabled="flag" type="info" native-type="submit" @click="onClickSubmit">注 册</van-button>
            </div>
          </van-form>
      </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import axios from 'axios'

export default {
    methods: {
        onClickLeft() {
        this.$router.go(-1);
        },

        onClickSubmit(){
          var user= this.username;
          var psd = this.password;
           axios.post('http://localhost:3000/api/addUser',
            {
               username:user,
               password:psd,
               power:this.power
            }
           ).then((response) => {
               console.log(response);
               console.log('okkkkkk');
                
          })
            Dialog.confirm({
                title: '注册成功！',
                message: '点击确定跳转回登录界面',
                })
                .then(() => {
                    // on confirm
                    this.$router.push('/login')
                })
                .catch(() => {
                    // on cancel
                });
        }
    },
    data() {
     return {
      username: '',
      password: '',
      power:1,
      flag:true,
      flag1:false, //如果username符合规则为true
      flag2:false, //如果password符合规则为true
    }
  },

    watch:{
      'username':function(){
          if(this.username.length>0)
           {
               this.flag1=true;
               if(this.flag1 && this.flag2)
                 this.flag=false;
           }
      },
      'password':function(){
          if(this.password.length>0)
          {
              this.flag2=true;
               if(this.flag1&&this.flag2)
                 this.flag=false;
          }
      }
    }

}
</script>

<style scoped>
.bodyStyle{
    margin-top: 50px;
}
</style>