<template>
  <div class="bodyClass">
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        title="时效运费"
        @click-left="onClickLeft"
      />

      <van-cell-group>
        <van-field
            v-model="postLocation"
            label="寄件地址"
            left-icon="location-o"
            placeholder="请输入省份或自治区市(*省)"
            clearable
        />
        <van-field
            v-model="receiveLocation"
            clearable
            label="收件地址"
            left-icon="location-o"
            placeholder="请输入省份或自治区市(*省)"
        />
      </van-cell-group>

      <div class="divClass">
          <b>重量：</b>
         <van-stepper class="weightClass" v-model="value" theme="round" button-size="22" disable-input />
         <div class="floatClass">KG</div>
      </div>
      <div class="divClass">
          <b>体积：</b>
           <input v-model="vlength" type="text" placeholder="长(cm)" class="divClass1">
           <input v-model="vwidth" type="text" placeholder="宽(cm)" class="divClass1">
           <input v-model="vheight" type="text" placeholder="高(cm)" class="divClass1">
      </div>
      <button @click="onClick">查 询</button>
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'

Toast.setDefaultOptions({ duration: 5000 });

export default {
  data() {
    return {
      postLocation:'',
      receiveLocation:'',
      value: 1,
      vlength:'',
      vwidth:'',
      vheight:'',
      weightList:[1000,1000000],
      basicMoney:10,
      disMoney:'',
      locationList:[],
      postL:'', //'M','S',"N"
      receiveL:'',
      postDis: '' ,//距离
      receiveDis:'' //距离
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClick(){
      axios.get('http://localhost:3000/api/query/area').then((response) => {
        this.locationList=response.data;//保存数据
        for(let i=0;i<this.locationList.length;i++)
        {
            if(this.postLocation == this.locationList[i].province)
             {
              //  console.log(this.locationList[i].distance);
               this.postL=this.locationList[i].locate;
               this.postDis=this.locationList[i].distance;
              //  console.log(this.postDis);

             }
             if(this.receiveLocation == this.locationList[i].province)
             {
              //  console.log(this.locationList[i].distance);
               this.receiveL=this.locationList[i].locate;
               this.receiveDis=this.locationList[i].distance;
             }
        }
        var weight=this.vlength* this.vwidth* this.vheight;
        if(weight<= this.weightList[0])
           weight = 5;
        else if(weight > this.weightList[0] &&weight <= this.weightList[1])
           weight = 10;
        else
            weight = 30;

        // console.log('weight = '+weight);
        if( this.receiveL == this.postL) //在同一地区或同向
       {
         this.disMoney= Math.abs(Number(this.postDis) - Number(this.receiveDis))/100;// 转换数据类型
         //运费 = 两个城市的距离（公里）/100 + 基本运费（10元） + 重量（取重量的值即可）+ 
         //       体积（体积<1000立方厘米取5元，体积小于1立方米取10元,大于1立方米取30元）
         Toast('预计需运费 '+(this.disMoney+this.basicMoney+this.value + weight)+' 元');
       }
       else{
         if(this.receiveL == 'M' || this.postL == 'M')
         {
          //  console.log('MMMMMMMM');
            this.disMoney= Math.abs(Number(this.postDis) - Number(this.receiveDis))/100;
            Toast('预计需运费 '+(this.disMoney+this.basicMoney+this.value +weight)+' 元');
         }
         else{
          //  console.log('++++++++');
            this.disMoney= (Number(this.postDis) + Number(this.receiveDis))/100;
            Toast('预计需运费 '+(this.disMoney+this.basicMoney+this.value +weight)+' 元');
         }
       }
      })
    }
  },
};
</script>

<style scoped>
.bodyClass{
    text-align: left;
    margin-top:20%;
}
.divClass{
    margin:10px;
    background: white;
    padding:10px;
}
.divClass1{
    background: rgb(248, 243, 243);
    width:20%;
    text-align: center;
    border:0.5px solid white;
    margin:0 2.5%;
    padding:5px;
}
.weightClass{
    display: inline-block;
    float:right;
    transform: translate(-100%,0);
}
.floatClass{
    display: inline-block;
    float:right;
    transform: translate(150%,10%);
}
button{
    width:90%;
    margin:5%;
    padding:8px;
    color:white;
    background-color:blue;
    border-radius: 20px;
}
</style>