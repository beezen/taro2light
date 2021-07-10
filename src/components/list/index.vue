<template>
  <view>
    <view v-for="item in data" :key="item">
      <list-item>{{ item }}</list-item>
    </view>
  </view>
</template>

<script>
import ListItem from "../list-item";
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  components: {
    ListItem
  }
};
</script>
