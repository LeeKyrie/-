//添加地址，地址的二级目录
<template>
  <div>
       <div>
          <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="新增地址"
            @click-left="onClickLeft"
         />
     </div>
    <div class="divStyle">
      <van-address-edit
        :area-list="areaList"
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
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
    };
  },
  methods: {
    onSave(content) {
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
      this.$store.state.id++;
      this.$store.state.list.push({
        id:this.$store.state.id,
        name:this.postName,
        tel:this.tel,
        address:address,
        isDefault:this.isDefault
        });

        axios.post('http://localhost:3000/api/addAddr',
            {
               name:this.postName,
               tel:this.tel,
               province:this.province,
               city:this.city,
               county:this.county,
               detail:this.addressDetail,
               isDefault:this.isDefault+'',
               id:this.$store.state.id+1,
            }
           ).then((response) => {
               console.log(response);
               console.log('okkkkkk插入成功');
                
          })

        if( this.postName != '')
        {
          Dialog.confirm({
                title: '添加成功！',
                message: '点击确定跳转回地址管理界面',
                })
                .then(() => {
                    // on confirm
                    this.$router.push('/myspace/address')
                })
                .catch(() => {
                    // on cancel
                });
        }
      // console.log(this.postName)
      // console.log(this.tel)
      // console.log(this.province)
      // console.log(this.city)
      // console.log(this.county)
      // console.log(this.addressDetail)
      // console.log(this.isDefault)
    },
    onClickLeft() {
      this.$router.go(-1);
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