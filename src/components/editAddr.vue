//修改地址的组件
<template>
  <div>
      <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="修改地址"
            @click-left="onClickLeft"
         />

    <div class="divStyle">
       <van-address-edit
        :area-list="areaList"
         show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        :address-info="addressInfo"
        @save="onSave"
      />
    </div>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import { Dialog } from 'vant';
import axios from 'axios'

export default {
 data() {
    return {
      areaList,
      postName:'',
      tel:'',
      province:'',//省份
      city:'',//城市
      county:'',//区
      addressDetail:'',
      isDefault:false,
      addressInfo:this.$store.state.addressInfo,
    };
  },
methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(content) {
      var index = this.$store.state.index //获取index
      this.postName = content.name;
      this.tel = content.tel;
      this.province = content.province;
      this.city= content.city;
      this.county=content.county;
      this.addressDetail=content.addressDetail;
      this.isDefault=content.isDefault;
      if(this.province == this.city)
      {
         this.province = '';
      }
      var address=this.province+' '+this.city+' '+this.county+' '+this.addressDetail;
      
      this.$store.state.list[index].name = this.postName
      this.$store.state.list[index].tel = this.tel
      this.$store.state.list[index].address = address
      this.$store.state.list[index].isDefault =  this.isDefault
      console.log('--修改地址--');
       if( this.postName != '')
        {
          Dialog.confirm({
                title: '修改成功！',
                message: '点击确定跳转回地址管理界面',
                })
                .then(() => {
                    // on confirm
                    this.$router.push('/myspace/address')
                })
                .catch(() => {
                    // on cancel
                });

                axios.post('http://localhost:3000/api/editAddr',
               {
                    name:this.postName,
                    tel:this.tel,
                    province:this.province,
                    city:this.city,
                    county:this.county,
                    detail:this.addressDetail,
                    isDefault:this.isDefault+'',
                    id:this.$store.state.index+1,
              }).then((response) => {
               console.log(response);
               console.log('数据库更新成功!');  
              })
        }
    },
  },
    
 
}
</script>

<style scoped>
.divStyle{
    background:rgb(247, 244, 238);
    /* overflow:visible; */
    height:90vh;
    margin-top: 50px;
}
</style>