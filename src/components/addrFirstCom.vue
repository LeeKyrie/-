//地址的一级目录
<template>
  <div>
      <div>
          <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="地址管理"
            @click-left="onClickLeft"
         />
     </div>
      <div class="divStyle">
          <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
         />
      </div>
      
  </div>
</template>

<script>
// import { Toast } from 'vant'

export default {
data() {
    return {
      chosenAddressId: '1',
      list:this.$store.state.list,
    };
  },

  methods: {
    //增加地址按钮
    onAdd() {
        this.$router.push("/myspace/address/add");
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index);
      this.$store.state.index = index;
      this.$router.push('/myspace/address/edit')
      var address= item.address;
      var id= item.id;
      var isDefault= item.isDefault;
      var name =item.name;
      var tel= item.tel;
      var addr= address.split(' ');
      // console.log(addr);
      if(addr.length == 3)// 考虑到像北京市一样的“省”特殊性
      {
          this.$store.state.addressInfo.city = addr[0];
          this.$store.state.addressInfo.county = addr[1];
          this.$store.state.addressInfo.addressDetail = addr[2];
      }
      else{
          this.$store.state.addressInfo.province = addr[0];
          this.$store.state.addressInfo.city = addr[1];
          this.$store.state.addressInfo.county = addr[2];
          this.$store.state.addressInfo.addressDetail = addr[3];
      } 
      this.$store.state.addressInfo.id = id;
      this.$store.state.addressInfo.name = name;
      this.$store.state.addressInfo.tel = tel;
     
      this.$store.state.addressInfo.isDefault = Boolean(isDefault);


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