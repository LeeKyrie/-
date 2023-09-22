//事故记录组件
<template>
  <section @click='clickEvent' class="divStyle" title="点击查看详细">
      <div>事故名称：<b style="color:red;">{{ this.accidentName }}</b></div>
      <br>
      <div class="alignStyle">
          <div class="marginStyle">事故时间：<span>{{ this.accidentTime }}</span></div>
          <div class="marginStyle">事故地点：<span>{{ this.accidentLocation }}</span></div>
          <div class="marginStyle">配送工具ID：<span>{{ this.carID }}</span></div>
      </div>
      
      
  </section>
</template>

<script>
export default {
    props:['data'],
    data(){
       return{
           accidentName:this.data.name,
           accidentLocation:this.data.address,
           accidentTime:this.data.time,
           carID:this.data.toolID,
       }
    },
    methods:{
        clickEvent:function(){
            // console.log('---ok')
            // console.log(this.data.totalNum);
            this.$router.push({
                name:'accidentDetail',
                params:{
                    list:this.data
                }
            })
        },

    }

}
</script>

<style scoped>
div{
    color:rgb(158, 75, 103);
}
.divStyle{
    border: 1.5px solid rgba(199, 191, 181, 0.938);
    margin:5px 15px;
    padding:10px 0;
    background-color:rgb(252, 245, 243);
    border-radius: 15px;
    box-shadow: 4px 4px rgb(207, 202, 202);
}
span{
    color:blue;
}
.marginStyle{
    margin:5px;
}
.alignStyle{
    text-align: start;
    margin-left: 10%;
}

</style>