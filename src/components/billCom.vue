//事故记录组件
<template>
  <section @click='clickEvent' class="divStyle" title="点击查看详细">
      <div>客户名称：<b style="color:blue;">{{ this.name }}</b></div>
      <br>
      <div>
          <div class="marginStyle">电话：<span>{{ this.phone }}</span></div>
          <div class="marginStyle1">城市：<span>{{ this.city }}</span></div>
      </div>   
  </section>
</template>

<script>
export default {
    props:['data'],
    mounted(){
        var sender = this.$store.state.sender
        // console.log(sender);
        
        for(let i=0;i<sender.length;i++){
            if(this.name == sender[i].name)
            {
                var name = sender[i].name
                var tel =sender[i].telephone
                var province = sender[i].province
                var city = sender[i].city
                var county = sender[i].county
                var detail = sender[i].detail
                var money = sender[i].money
                this.phone = sender[i].telephone
                this.city = sender [i].city
                if( province == city)
                 province=''
                 var address = province +city +county+detail
                this.postList.push({
                    name:name,
                    phone:tel,
                    city:city,
                    address:address,
                    money:money
                })
            }
        }

    },
    data(){
       return{
          name:this.data.name,
          postList:[],
          phone:'',
          city:''
       }
    },
    methods:{
        clickEvent:function(){
            // console.log(this.postList)
            // console.log(this.data.totalNum);
            this.$router.push({
                name:'billDetail',
                params:{
                    list:this.postList
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
    position: relative;
    margin: 0 auto;
}
.marginStyle1{
    margin:5px;
    position: relative;
    margin: 0 auto;
    padding:0 100px;
}


</style>