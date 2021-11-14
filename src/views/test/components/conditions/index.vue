<template>
  <div class="conditions-warpper">
    <div class="conditions-warpper__items">
      <span>昵称</span><el-input placeholder="昵称" />
    </div>
    <div class="conditions-warpper__items">
      <span>昵称2</span><el-input placeholder="昵称2" />
    </div>
    <div class="conditions-warpper__items">
      <span>昵称3</span><el-input placeholder="昵称3" />
    </div>
    <div class="conditions-warpper__items">
      <span>昵称4</span><el-input placeholder="昵称4" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.conditions-warpper {
  display: flex;
  align-items: center;
  width: 100%;
  &__items {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
