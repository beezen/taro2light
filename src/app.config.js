export default {
  pages: [
    "pages/index/index",
    "pages/list/index",
    "pages/swiper/index",
    "pages/picker/index",
    "pages/storage/index",
    "pages/chart/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "DEMO",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assert/01.png",
        selectedIconPath: "assert/01.png",
      },
      {
        pagePath: "pages/list/index",
        text: "列表",
        iconPath: "assert/02.png",
        selectedIconPath: "assert/02.png"
      }
    ]
  }
};
