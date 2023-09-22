<template>
  <div>
    <header>
       <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="客户账单"
            @click-left="onClickLeft"
         />
    </header>
      <main class="mianStyle">
          <section>
              <div class="tipsStyle">
                  ---------------所有客户的账单如下：
              </div>
              <ul>
                  <li v-for="(item,index) in list" :key ="index">
                      <bill-com :data="item"></bill-com>
                  </li>
              </ul>             
          </section>
      </main>
  </div>
</template>

<script>
import billCom from '../components/billCom.vue'
export default {
  components:{
        billCom
    },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  data(){
      return{
          list:this.$store.state.billName,
      }
  }
}
</script>

<style scoped>
.tipsStyle{
    position: relative;
    text-align: left;
    color: rgb(14, 67, 165);
    margin-bottom: 10px;
}
.mianStyle{
    margin-top: 50px;
}
</style>