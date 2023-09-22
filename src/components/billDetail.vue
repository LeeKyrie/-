<template>
  <div>
    <header>
       <van-nav-bar
            left-text="返回"
            left-arrow
            fixed
            title="账单详细"
            @click-left="onClickLeft"
         />
    </header>
    <main class="mainBody">
        <section>
            <fieldset>
                <legend><b style="color:blue">{{ this.name }}</b> 的账单</legend>
                 <van-cell-group>
                    <van-field size='large' class="listStyle" label="姓 名" :value="name" readonly />
                    <van-field size='large' class="listStyle" label="电 话" :value="tel" readonly />
                    <van-field size='large' class="listStyle" label="地 址" :value="address" readonly />
                    <van-field size='large' class="listStyle" label="在本公司托运包裹数量" :value="num" readonly />
                    <van-field size='large' label="总花费(￥)" :value="totalMoney" readonly />
                </van-cell-group>
            </fieldset>
        </section>
    </main>
  </div>
</template>

<script>
export default {
 methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted(){
      for(let i=0;i<this.$route.params.list.length;i++)
      {
          var money = this.$route.params.list[i].money
          this.totalMoney+= money
      }
  },
  data(){
      return{
          name:this.$route.params.list[0].name,
          tel:this.$route.params.list[0].phone,
          address:this.$route.params.list[0].address,
          num:this.$route.params.list.length,
          totalMoney:0
      }
  }

}
</script>

<style scoped>
.mainBody{
    margin-top: 50px;
}
.listStyle{
    margin-bottom: 10px;
}
fieldset{
    border: 1px solid rgb(231, 197, 193);
    border-radius: 10px;
    box-shadow: 3px 3px rgb(212, 205, 204);;
}
</style>
