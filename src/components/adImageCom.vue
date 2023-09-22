//这个是轮番图的实现(广告)
<template>
  <div class="imgCom"> 
      <img :src="this.newsList[this.index].newImg" alt="newsOfImage" 
        class="img" @click="getNews(index)" :title="this.newsList[this.index].title">
      <span class="fontStyle">{{ this.newsList[this.index].content }}</span>
  </div> 
</template>

<script>
// import axios from 'axios'
export default {
    mounted() 
   { 
      setInterval(this.addIndex, 5000); //设置切换时间
   },

    data()
    {
        return{
             newsList:[ 
            {
                newImg:require('../assets/广告1.jpg'),
                content:'天猫',
                title:'天猫购物'
            },
            {
                newImg:require('../assets/广告2.jpg'),
                content:'京东',
                title:'京东购物'
            },
             {
                newImg:require('../assets/广告3.jpg'),
                content:'唯品会',
                title:'唯品会购物'
            },
           ],
             index:0,  
        }
           
    },
    methods:
    { 
        addIndex:function()
        {
            this.index+=1;
            if(this.index>2)
                this.index=0;
        },
        getNews:function(num)
        {
            console.log(num)
            if( num === 0)
              window.open('https://www.tmall.com/',"_blank")
            if( num === 1)
              window.open('https://www.jd.com/',"_blank")
            if( num === 2)
              window.open('https://www.vip.com/',"_blank")
            //https://www.taobao.com/
            //https://www.baidu.com
        }
       
    },
}
</script>

<style scoped>
    .imgCom{
        width:90%;
        height: auto;
        transform: translate(5%,0);
        position:relative; 
        justify-content: center;
        padding-top: 3%;
        box-shadow: 0px 0px 3px rgb(219, 194, 194);

    }
    .img{
        width:100%;
        height:100%;
        border:1px dashed rgb(204, 222, 248);
    }
    .fontStyle{
        color:rgb(212, 82, 132);
        font-weight: bold;
    }

</style>