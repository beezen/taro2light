<template>
  <view>
    <button @tap="handleSet">存储</button>
    <button @tap="handleGet">获取</button>
    <button @tap="handleRemove">移除</button>
    <button @tap="handleGetPromise">Promise 获取</button>
  </view>
</template>

<script>
import "./index.less";
import Taro from "@tarojs/taro";
export default {
  name: "storage",
  data() {
    return {};
  },
  methods: {
    handleSet() {
      Taro.setStorage({
        key: "testabc",
        data: "123456"
      });
    },
    handleGet() {
      Taro.getStorage({
        key: "testabc",
        success: res => {
          console.log(res);
          Taro.showToast({
            icon: "none",
            title: JSON.stringify(res)
          });
        }
      });
    },
    handleRemove() {
      Taro.removeStorage({
        key: "testabc",
        success: res => {
          console.log(res);
          Taro.showToast({
            icon: "none",
            title: JSON.stringify(res)
          });
        }
      });
    },
    async handleGetPromise() {
      let res = await Taro.getStorage({
        key: "testabc"
      });
      console.log(res);
      Taro.showToast({
        icon: "none",
        title: res ? JSON.stringify(res) : ""
      });
    }
  }
};
</script>
