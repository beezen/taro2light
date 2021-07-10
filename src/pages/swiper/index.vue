<template>
  <view>
    <view class="demo-swiper">
      <text>swiper 1</text>
      <swiper
        class="demo-swiper-module"
        indicator-color="#999"
        indicator-active-color="#333"
        circular
        autoplay
      >
        <swiper-item>
          <view class="demo-swiper-module-item demo-swiper-module-1">1</view>
        </swiper-item>
        <swiper-item>
          <view class="demo-swiper-module-item demo-swiper-module-2">2</view>
        </swiper-item>
        <swiper-item>
          <view class="demo-swiper-module-item demo-swiper-module-3">3</view>
        </swiper-item>
      </swiper>
    </view>
    <view class="demo-swiper">
      <text>swiper 2</text>
      <swiper
        class="demo-swiper-module"
        indicator-color="#999"
        indicator-active-color="#333"
        circular
        indicator-dots
        autoplay
      >
        <swiper-item>
          <image
            src="https://via.placeholder.com/200"
            class="demo-swiper-module-item"
          />
        </swiper-item>
        <swiper-item>
          <image
            src="https://via.placeholder.com/200"
            class="demo-swiper-module-item"
          />
        </swiper-item>
        <swiper-item>
          <image
            src="https://via.placeholder.com/200"
            class="demo-swiper-module-item"
          />
        </swiper-item>
      </swiper>
    </view>
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
