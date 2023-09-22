//相关说明
<template>
  <div>
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        title="相关说明"
        @click-left="onClickLeft"
      />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
}
</script>

<style>
</style>
