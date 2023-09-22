<template>
  <div>
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        title="事故记录"
        @click-left="onClickLeft"
      />
      <div class="bodyClass">
          <div class="divTipsStyle">{{ this.tips1 }}</div>
          <ul>
            <li v-for="item in list" :key="item.toolID">
                <accident-com :data = 'item'></accident-com>
            </li>
          </ul>
      </div>
      
  </div>
</template>

<script>
import accidentCom from "../components/accidentCom.vue"
export default {
    components:{
        accidentCom
    },
    methods:{
        onClickLeft() {
      this.$router.go(-1);
      },
    },
    data(){
        return{
            tips1:'-----各大事故发生如下：',
            list:this.$store.state.logaccident
        }
    }

}
</script>

<style scoped>
.bodyClass{
    margin-top:12%;
    padding-bottom: 60px;

}
.divTipsStyle{
    margin-left: -60%;
    margin-bottom: 10px;
    color:rgb(26, 160, 120);
    font-weight: bold;

}
</style>
