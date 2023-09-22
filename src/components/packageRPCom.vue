//快递收发组件
<template>
  <div @click='clickEvent' class="divStyle">
      <div class="div1Class">运单号：<b style="color:blue;">{{ this.packageID }}</b></div>

      <div class="div2Class">
          <div style="border:2px solid rgb(249, 231, 251);padding:3px;border-radius:10px">
              <div style="display:inline-block;font-size:24px;"><b>{{ this.postLocation }}</b></div>
              <br>
              <span>{{ this.postName }}</span>
          </div>
          <div style="display:inline-block;margin-top:10px">
              <img src="../assets/arrow.jpg"/>
          </div>
          <div style="border:2px solid rgb(249, 231, 251);padding:3px;border-radius:10px">
              <div style="display:inline-block;font-size:24px;"><b>{{ this.receiveLocation }}</b></div>
              <br>
              <span>{{ this.receiveName }}</span>
          </div>
      </div>
      <p></p>
      <div class="div3Class">{{this.state}}：</div>
       <span>{{ this.tips }}</span>
       <br>
       <p></p>
      <div class="div3Class">时 间：</div>
      <span>{{ this.receiveTime }}</span>
  </div>
</template>

<script>
export default {
    props:['data'],
    data(){
       return{
           packageID:this.data.expressID,
           postName:this.data.postName,
           postLocation:this.data.postCity,
           receiveName:this.data.receiveName,
           receiveLocation:this.data.receiveCity,
           tips:'您的包裹由 '+this.data.driverName+' 配送',
           state:this.data.state,
           receiveTime:this.data.endTime,


       }
    },
    methods:{
        clickEvent:function(){
            // console.log('---ok')
            // console.log('+++选择了 '+this.data.id);
            this.$store.state.selectIndex = this.data.id
            //'/check/package/detail'
            this.$router.push({
                name:'detail',
                params:{
                    id:this.data.id
                }
            })
        }

    }

}
</script>

<style scoped>
.divStyle{
    border: 1.5px solid rgba(199, 191, 181, 0.938);
    margin:5px;
    padding:5px;
    background-color:rgb(252, 245, 243);
    border-radius: 15px;
    box-shadow: 4px 4px rgb(207, 202, 202);
}
.div1Class{
    position:relative;
    background-color:#f7f2f2;
    width: 90%;
    margin:5px;
    margin-left:4.75%;
}
.div2Class{
    display: flex;
    justify-content: space-around;
}
.div3Class{
    display:inline-block;
    float:left;
    transform: translate(60px,0);
    
}
img{
    width:10vw;
    height:4vh;
}
span{
    color: grey;
}
</style>