//寄快递大于100kg,即寄重货
<template>
  <div class="bodyStyle">
<!-- 寄件人地址 -->
       <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        title="寄重货"
        @click-left="onClickLeft"
      />
      <fieldset>
          <legend style="color:blue;">寄件人信息</legend>
          <van-field
                v-model="postname"
                label=" 姓 名"
                maxlength="12"
                placeholder="请输入姓名（1-12位）"
                :rules="[{ required: true }]"
           >
              <template #button>
                <van-button size="small" type="primary" @click="onFullfill">使用默认地址</van-button>
              </template>
           </van-field>
            <van-field
                v-model="postTel"
                label=" 电 话"
                maxlength="11"
                placeholder="请输入电话（11位以下）"
                :rules="[{ required: true }]"
            />

          <van-field
            readonly
            clickable
            name="area"
            :value="value"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea = true"
            />
            <van-popup v-model="showArea" position="bottom">
            <van-area
                :area-list="areaList"
                @confirm="onConfirm"
                @cancel="showArea = false"
            />
            </van-popup> 
            <van-field
              v-model="locationPost"
              label="街区地址"
              placeholder="请输入详细的小地址"
              clearable
          />
      </fieldset>
<!-- 收件人地址 -->
      <fieldset>
          <legend style="color:blue">收件人信息</legend>
          <van-field
                v-model="receivename"
                label=" 姓 名"
                maxlength="12"
                placeholder="请输入姓名（1-12位）"
                :rules="[{ required: true }]"
            />
            <van-field
                v-model="receiveTel"
                label=" 电 话"
                maxlength="11"
                placeholder="请输入电话（11位以下）"
                :rules="[{ required: true }]"
            />

          <van-field
            readonly
            clickable
            name="area"
            :value="value0"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea0 = true"
            />
            <van-popup v-model="showArea0" position="bottom">
            <van-area
                :area-list="areaList"
                @confirm="onConfirm0"
                @cancel="showArea0 = false"
            />
            </van-popup> 
            <van-field
              v-model="locationRece"
              label="街区地址"
              placeholder="请输入详细的小地址"
              clearable
          />
      </fieldset>
      <div class="divClass1">
          <van-cell title='物品信息' value-class="value-class" :value="descript" is-link @click="show = true"/>
          <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <div class="divClass" title="大于100kg噢">
          <b>重量：</b>
         <van-stepper class="weightClass" input-width="50px" min="101" max="999" v-model="value1" theme="round" button-size="22"/>
         <div class="floatClass">KG</div>
      </div>
      <van-field
            v-model="postTips"
            clearable
            label="备注"
            left-icon="label"
            placeholder="请输入"
        />
        <van-button type="info" class="buttonStyle" @click="submitMsa">提 交</van-button>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import { Dialog } from 'vant';
import axios from 'axios'

export default {
data() {
    return {
      postname: '', //寄件人
      postTel:'',
      receivename:'',//收件人
      receiveTel:'',
      locationPost:'',
      locationRece:'',
      value: '',//寄件人省市区
      value0:'',//收件人省市区
      value1: 101,
      showArea: false,
      showArea0: false,
      areaList,
      show: false,
      vlength:100,
      vwidth:100,
      vheight:100,
      descript:"生活用品",
      actions: [
          { name: '生活用品' }, 
          { name: '文 件' }, 
          { name: '数码IT产品' },
          { name: '服 饰' },
          { name: '食 品' },
          { name: '其 他' }
      ],
      postTips:''
    };
  },
  methods: {
    onConfirm(values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      this.showArea = false;
    },
    onConfirm0(values) {
      this.value0 = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      this.showArea0 = false;
    },

    onClickLeft() {
      this.$router.go(-1);
    },
    onSelect(item) {
      this.show = false;
      this.descript = item.name;
    },
   submitMsa(){
      var array = this.value.split('/');
      var location0 = array[0]
      var array1= this.value0.split('/');//收件人省市区
      var location1 = array1[0]
      var weight = this.value1
      var vlength = this.vlength
      var vwidth = this.vwidth
      var vheight = this.vheight

      this.$store.commit('calcMoney',[location0,location1,weight,vlength,vwidth,vheight]);
      // this.$store.state.totalMoney //可能有延迟
      // console.log(money);

      //id都通用,id:数据库表的id
      this.$store.state.numPost++;
      var id = this.$store.state.numPost + this.$store.state.numReceive ;//还没修改numpost与list
      var index = id - 5;//记录插入了几条数据,
        
      //--------------add driver
           axios.post('http://localhost:3000/api/addDriver',
            {
               driverID:id,
               name:this.$store.state.datadmt[index].name,
               sex:this.$store.state.datadmt[index].sex,
               age:this.$store.state.datadmt[index].age,
               state:this.$store.state.datadmt[index].driverState,
               telephone:this.$store.state.datadmt[index].telephone
            }
           ).then((response) => {
               console.log(response);  
              //  index++
              //  this.$store.state.useID++
          })
//----------------------------
 //--------------add goods
           var weight1 = this.value1*1000;
           axios.post('http://localhost:3000/api/addGoods',
            {
               goodsID:id,
               goodKind:this.descript,
               packKind:this.$store.state.datasrg[index].packKind,
               weight:weight1,
               timeliness:this.$store.state.datasrg[index].timeliness,
               isDanger:this.$store.state.datasrg[index].isDanger,
               isForeign:this.$store.state.datasrg[index].isForeign,
               remark:this.postTips
            }
           ).then((response) => {
               console.log(response);  
              //  index++
              //  this.$store.state.useID++
          })
//----------------------------
//--------------add media
           axios.post('http://localhost:3000/api/addMedia',
            {
               expressID:this.$store.state.datadmt[index].expressID,
               startTime:this.$store.state.datadmt[index].startTime,
               endTime:this.$store.state.datadmt[index].endTime,
               state:this.$store.state.datadmt[index].mediaState,
               postID:id,
               receiveID:id,
               goodsID:id,
               managerName:this.$store.state.loginName,
               driverID:id,
               toolID:id
            }
           ).then((response) => {
               console.log(response);  
              //  console.log(this.$store.state.datadmt[index].expressID);
              //  index++
              //  this.$store.state.useID++
          })
//----------------------------
//--------------add receiver
          var province;
          var city;
          var county;
          if(array1.length == 3)
          {
            province= array1[0]
            city= array1[1]
            county= array1[2]
          }
          else{
            province= array1[0]
            city= array1[0]
            county= array1[1]
          }
           axios.post('http://localhost:3000/api/addReceiver',
            {
               receiveID:id,
               postCompany:this.$store.state.datasrg[index].postCompany,
               name:this.receivename,
               telephone:this.receiveTel,
               province:province,
               city:city,
               county:county,
               detail:this.locationRece
            }
           ).then((response) => {
               console.log(response);  
              //  index++
              //  this.$store.state.useID++
          })
//----------------------------
//--------------add sender
          var province0;
          var city0;
          var county0;
          if(array.length == 3)
          {
            province0= array[0]
            city0= array[1]
            county0= array[2]
          }
          else{
            province0= array[0]
            city0= array[0]
            county0= array[1]
          }
           axios.post('http://localhost:3000/api/addSender',
            {
               postID:id,
               postCompany:this.$store.state.datasrg[index].postCompany,
               name:this.postname,
               telephone:this.postTel,
               payWay:this.$store.state.datasrg[index].payway,
               money: this.$store.state.datasrg[index].money,
               province:province0,
               city:city0,
               county:county0,
               detail:this.locationPost
            }
           ).then((response) => {
               console.log(response);  
              
          })
  //--------------add tool
   var addr0;
   var addr1;
   if(province0 != city0)
    {
           addr0 = province0+city0+county0+this.locationPost
    }else  addr0 = city0+county0+this.locationPost
     if(province != city)
    {
            addr1 = province+city+county+this.locationRece
    }else   addr1 = city+county+this.locationRece
    // console.log(addr1 +' '+ array1.length);
           axios.post('http://localhost:3000/api/addTool',
            {
               toolID:id,
               kind:this.$store.state.datadmt[index].kind,
               origin:addr0,
               destination:addr1,
               positionNow:this.$store.state.datadmt[index].positionNow,
            }
           ).then((response) => {
               console.log(response);  
              //  index++
              //  this.$store.state.useID++
          })
//---------------修改post数量
            this.$store.state.listPost.push({
               id:id - 1,
               expressID:this.$store.state.datadmt[index].expressID,
               endTime:this.$store.state.datadmt[index].endTime,
               state:this.$store.state.datadmt[index].mediaState,
               receiveName:this.receivename,
               receiveCity:city,
               postName:this.postname,
               postCity:city0,
               driverName:this.$store.state.datadmt[index].name
            });
// ----------------------------
            Dialog.confirm({
                title: '包裹请求已发送成功！',
                message: '点击确定跳转回主界面',
                })
                .then(() => {
                    // on confirm
                    this.$store.state.useID = this.$store.state.useID+1
                    this.$router.push('/')
                    this.$store.commit('queryMedia');
                    this.$store.commit('querySender');
                    this.$store.commit('queryDriver');
                    this.$store.commit('queryReceiver');
                      this.$store.commit('queryGoods');
                      this.$store.commit('queryTool');
                       
                })
                .catch(() => {
                    // on cancel
                    this.$store.state.useID = this.$store.state.useID+1
                    this.$store.commit('queryMedia');
                    this.$store.commit('querySender');
                    this.$store.commit('queryDriver');
                    this.$store.commit('queryReceiver');
                      this.$store.commit('queryGoods');
                      this.$store.commit('queryTool');
                });

// --------------------

    },
    onFullfill(){
      this.postname = this.$store.state.addrName
      this.postTel = this.$store.state.telephone
      this.locationPost = this.$store.state.addrDetail

      var province = this.$store.state.province
      if(province != '')
      {
        this.value = this.$store.state.province+'/'+this.$store.state.city+'/'+this.$store.state.county
      }
      else this.value = this.$store.state.city+'/'+this.$store.state.county

    }
  },
}
</script>

<style scoped>
.bodyStyle{
     margin:5px;
    overflow:auto;
    margin-top: 50px;
    text-align: left;
    padding-bottom: 45px;
}
fieldset{
    border:1px solid rgb(211, 193, 193);
    text-align: center;
}
.divClass{
    margin:10px;
    background: white;
    padding:10px;
}
.divClass1{
    margin:10px;
    background: white;
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
.value-class{
    text-align: center;
    margin-left: -90%;
}
.buttonStyle{
   position: relative;
  margin-top: 15px;
  left:50%;
  transform: translate(-50%,0);
}
</style>