import Vue from "vue";
import "./app.less";
try {
  __base__.DEBUG_MODE = true;
} catch (err) {}

const App = {
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  }
};

export default App;
