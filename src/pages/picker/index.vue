<template>
  <view class="page-body">
    <view class="page-section">
      <text>地区选择器</text>
      <view>
        <picker mode="selector" :range="selector" @change="onChange">
          <view class="picker"> 当前选择：{{ selectorChecked }} </view>
        </picker>
      </view>
    </view>
    <view class="page-section">
      <text>时间选择器</text>
      <view>
        <picker mode="time" @change="onTimeChange">
          <view class="picker"> 当前选择：{{ timeSel }} </view>
        </picker>
      </view>
    </view>
    <view class="page-section">
      <text>日期选择器</text>
      <view>
        <picker mode="date" @change="onDateChange">
          <view class="picker"> 当前选择：{{ dateSel }} </view>
        </picker>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selector: ["美国", "中国", "巴西", "日本"],
      selectorChecked: "美国",
      timeSel: "12:01",
      dateSel: "2018-04-22"
    };
  },
  methods: {
    onChange: function(e) {
      this.selectorChecked = this.selector[e.detail.value];
    },

    onTimeChange: function(e) {
      this.timeSel = e.detail.value;
    },

    onDateChange: function(e) {
      this.dateSel = e.detail.value;
    }
  }
};
</script>
