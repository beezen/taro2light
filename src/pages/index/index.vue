<template>
  <view>
    <navigator class="item" url="/pages/swiper/index"
      ><button>跳转 Swiper</button></navigator
    >
    <navigator class="item" url="/pages/picker/index"
      ><button>跳转 Picker</button></navigator
    >
    <navigator class="item" url="/pages/storage/index"
      ><button>跳转 Storage</button></navigator
    >
    <navigator class="item" url="/pages/chart/index"
      ><button>跳转 图表</button></navigator
    >
  </view>
</template>

<script>
import "./index.less";
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>
