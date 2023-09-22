//程序上方的logo,即第一页的动画
<template>
  <div @click="clickEvent">
      <div class="divStyle" title="亲，欢迎您！">
          <img :src='logoURL'/>
          <span>欢迎来到德鲁速递！</span>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            logoURL:require('../assets/logo1.jpg'),
        }
    },
    methods:{
        clickEvent:function(){
            this.$router.push('/info');

        }
    }

}
</script>

<style scoped>
span{
    color: rgb(23, 199, 61);
    font-size: 18px;
    /* position: relative; */
    margin-top:10%;
}
@keyframes move{
			0%{margin-left:-80%}
			25%{margin-left:12.5%}
			50%{margin-left:105%}
			75%{margin-left:12.5%}
			100%{margin-left:-80%}
		}

.divStyle{
    width:73%;
    display: flex;
    border:1px solid rgb(235, 230, 224);
    animation-name:move;
    animation-duration:15s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
img{
    height:80px;
    width:120px;

}

</style>