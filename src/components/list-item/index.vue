<template>
  <view class="list-item">
    <image class="list-item-img" src="https://via.placeholder.com/150" />
    <slot></slot>
    <image class="list-item-right" src="@/assert/arrow.png"/>
  </view>
</template>

<style lang="less">
.list-item {
  padding: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  &-img {
    width: 80px;
    height: 80px;
    display: block;
    margin-right: 20px;
  }
  &-right {
    display: block;
    height: 40px;
    width: 40px;
    margin-left: auto;
  }
}
</style>
