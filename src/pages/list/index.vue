<template>
  <view>
    <list :data="list"></list>
  </view>
</template>

<script>
import List from "@/components/list/index.vue";
import "./index.less";
export default {
  name: "Index",
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  components: {
    List
  }
};
</script>
