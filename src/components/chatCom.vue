<template>
  <div class="mainStyle">
    <div class="classDiv">
       <span>{{ content }}</span> 
    </div>
    <img :src="imgURL" class="imageProfile" :title="title">
  </div>
</template>

<script>
export default {
  props:['content'],
  data(){
    return{
      imgURL:this.$store.state.profile,
      title:this.$store.state.loginName
    }
  }
}
</script>

<style scoped>
.mainStyle{
    display: flex;
    overflow:auto;
    margin:5px;

}
.classDiv{
  width:95vw;
  height: auto;
  background-color: rgb(155, 241, 133);
  border: 1px solid rgb(247, 242, 242);
  border-radius: 10px 100px 100px 10px;
                 /* 左上 右上 右下 左下 */
  position: relative;
  overflow: auto;
}
span{
  position: absolute;
  color:rgb(15, 1, 1);
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

}
img{
    width:18%;
    height:auto;
    position: relative;
    border-radius: 50%;
    background-color: rgb(183, 180, 180);
    border:2px solid rgb(189, 184, 184);
}

</style>