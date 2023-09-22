<template>
  <div>
    <header>
      <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="事故详情"
            @click-left="onClickLeft"
         />
    </header>
    <main class="mainBody">
        <section>
          <fieldset>
            <legend  style="color:red;">失事包裹({{ this.num0 }})</legend>
            <van-collapse v-model="activeNames">
                <li v-for="(item,index) in packList" :key="item.id">
                      <van-collapse-item :title='item.expressID' :name="index">
                          <b>寄件人姓名：</b><strong>{{item.sendname}}</strong><br>
                          <b>收件人姓名：</b><strong>{{item.receivename}}</strong><br>
                          <b>寄件费用(￥)：</b><strong>{{item.money}}</strong><br>
                      </van-collapse-item>
                </li>
            </van-collapse>

            <h4  @click="onLog">时 间：{{ this.list.time }}</h4>
            <h4>地 点：{{ this.list.address }}</h4>
            <h4>失事造成损失费用: <span>{{ this.lostMoney }} </span>  ￥</h4>
          </fieldset>

          <fieldset>
            <legend style="color:blue;">上次托运成功({{ this.num1 }})</legend>
            <van-collapse v-model="activeNames1">
                 <li v-for="(item,index) in packList1" :key="item.id">
                      <van-collapse-item :title="item.expressID" :name="index">
                          <b>寄件人姓名：</b><strong>{{item.sendname}}</strong><br>
                          <b>收件人姓名：</b><strong>{{item.receivename}}</strong><br>
                          <b>寄件费用(￥)：</b><strong>{{item.money}}</strong><br>
                      </van-collapse-item>
                </li>
            </van-collapse>
            <h4>托运费用: <span>{{ this.lastMoney }} </span>  ￥</h4>
          </fieldset>
        </section>
    </main>
   
        
  </div>
</template>

<script>
export default {
  beforeMount(){
  var id = this.$route.params.list.toolID
  var len = this.$route.params.list.totalNum
  var lost = this.$route.params.list.lostNum
  var length= this.$store.state.lostpack.length
  var abs =length - len // 包裹相差的绝对值，用于 -- 18-8 =10
  var tmp = abs + lost // 用于-- 10+4=14
  this.packList1 = []
  this.packList = [] //失事的包裹

  if(id == '10')
  {
      for(let i=0;i<len;i++)
      {
          if(i<lost)
          {
              var templist= this.$store.state.lostpack[i]
            //   templist.expressID = '运单号：'+ this.$store.state.lostpack[i].expressID
              this.packList.push(templist)          }
          else {
              var templist1 = this.$store.state.lostpack[i]
            //   templist1.expressID = '运单号：'+ this.$store.state.lostpack[i].expressID
              this.packList1.push(templist1)
          }
      }
  }
  else{
      for(let i=length-1;i>=abs;i--)
      {
          if(i<tmp)
          {
              var templist2= this.$store.state.lostpack[i]
            //   templist2.expressID = '运单号：'+ this.$store.state.lostpack[i].expressID
              this.packList.push(templist2)
          }
           else {
              var templist3 = this.$store.state.lostpack[i]
            //   templist3.expressID = '运单号：'+ this.$store.state.lostpack[i].expressID
              this.packList1.push(templist3)
          }
      }
  }
    this.num0 = this.packList.length
    this.num1 = this.packList1.length
    for(let i=0;i<this.num0;i++)//计算失事费用
    {
        var fund = this.packList[i].money
        this.lostMoney+= fund
    }
     for(let i=0;i<this.num1;i++)
    {
        var fund1 = this.packList1[i].money
        this.lastMoney+= fund1
    }
},
data() {
    return {
      activeNames: [],
      activeNames1: [],
      num0:0,
      num1:0,
      lostMoney:0,
      lastMoney:0,
      list:this.$route.params.list,
      packList:[] ,//失事的包裹
      packList1:[] //last成功的
    };
  },
  methods:{
      onClickLeft() {
      this.$router.go(-1);
    },
    onLog(){
        // console.log('list--');
        // console.log(this.list);
        // console.log('packlist--');
        // console.log(this.packList);
    }
  }

}
</script>

<style scoped>
strong{
    color:blue;
    font-size: 17px;
    padding-left: 5px;
}
li{
    list-style: none;
}
.mainBody{
    text-align: left;
    padding-top:40px;
    padding-bottom: 50px;
}
span{
    color:rgb(47, 101, 201);
    font-size: 19px;  
}
fieldset{
    margin-top: 5px;
    border: 1px solid wheat;
    border-radius: 10px;
    box-shadow: 3px 3px rgb(219, 218, 214);
}
</style>