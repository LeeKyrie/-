<template>
  <div>
      <header>
         <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="详细信息"
            @click-left="onClickLeft"
         />
    </header>
    <main class="divStyle">
        <section>
            <fieldset @click="ontest">
                <legend>物流信息</legend>
                <van-steps direction="vertical" :active="stepActive">
                    <van-step>
                        <h3>包裹【{{ this.state }}】，位于{{ this.desdination }}</h3>
                        <p>{{ this.endTime }} </p>
                    </van-step>
                    <van-step>
                        <h3>包裹位于{{ this.positonMedia }}</h3>
                    </van-step>
                    <van-step>
                        <h3>由 {{ this.toolKind }} 开始装包运送</h3>
                        <h4>起送地点 : {{ this.positionStart }}</h4>
                        <p>{{ this.startTime }}</p>
                    </van-step>
                    </van-steps>

            </fieldset>

            <fieldset>
                <legend>配送人员信息</legend>
                <van-cell-group>
                    <van-field label="姓名" :value="postName" readonly />
                    <van-field label="性别" :value="sex" readonly />
                    <van-field label="年龄" :value="age" readonly />
                    <van-field label="电话" :value="phone" readonly />
                </van-cell-group>
            </fieldset>

            <fieldset>
                <legend>包裹信息</legend>
                <van-cell-group>
                    <van-field label="包裹类型" :value="kind" readonly />
                    <van-field label="包装类别" :value="packKind" readonly />
                    <van-field label="配送费(￥)" :value="money" readonly />
                    <van-field label="重量(g)" :value="weight" readonly />
                    <van-field label="备 注" :value="tips" readonly />

                </van-cell-group>
            </fieldset>
        </section>
    </main>
  </div>
</template>

<script>
export default {
data(){
    return{
        state:this.$store.state.media[this.$route.params.id].state,
        endTime:this.$store.state.media[this.$route.params.id].endTime,
        startTime:this.$store.state.media[this.$route.params.id].startTime,
        positionStart:this.$store.state.tool[this.$route.params.id].origin,
        desdination:this.$store.state.tool[this.$route.params.id].destination,
        positonMedia:this.$store.state.tool[this.$route.params.id].positionNow,
        toolKind:this.$store.state.tool[this.$route.params.id].kind,
        stepActive:0,
        money:this.$store.state.sender[this.$route.params.id].money,
        postName:this.$store.state.driver[this.$route.params.id].name,
        sex:this.$store.state.driver[this.$route.params.id].sex,
        age:this.$store.state.driver[this.$route.params.id].age,
        phone:this.$store.state.driver[this.$route.params.id].telephone,
        kind:this.$store.state.goods[this.$route.params.id].goodKind,
        packKind:this.$store.state.goods[this.$route.params.id].packKind,
        weight:this.$store.state.goods[this.$route.params.id].weight,
        tips:this.$store.state.goods[this.$route.params.id].remark

    }

},
 methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    ontest(){
        // console.log(this.$store.state.media[this.$store.state.selectIndex].state);
    }
 }

}
</script>

<style scoped>
.divStyle{
    /* background:rgb(247, 244, 238); */
    /* overflow:visible; */
    /* height:60vh; */
    margin-top: 50px;
    overflow: auto;
    padding-bottom: 50px;
    /* position: relative;
    text-align: left; */
}
legend{
    text-align: left;
    color:blue;
   
}
fieldset{
     border: 1.5px dotted rgb(223, 212, 212);
     border-radius: 10px;
      text-align: left; 
}
h3{
    font-size: 15px;
}
</style>