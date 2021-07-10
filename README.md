# Taro 与 Light 小程序

## 启动

```bash
yarn # 安装依赖 (或 npm install )
yarn dev:weapp # 启动 taro 服务(或 npm run dev:weapp)
yarn dev:light # 启动 Light 服务(或 npm run dev:light)
```

## Taro 介绍

Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

[Taro 参考文档](http://taro-docs.jd.com/taro/docs/README)

## Light 介绍

Light 小程序与微信小程序使用同样的工作原理，将执行进程与渲染进程分离，分别以 JSCore 和 Webview 充当执行进程和渲染进程的执行载体。但是又存在一些不同点。

Light 小程序支持微信小程序语法，编译后的小程序同时支持在微信小程序平台和 Light App 环境中运行。

[Light 小程序参考文档](https://document.lightyy.com/zh-cn/docs/miniapp/reference/index.html)

## Taro 与 Light 小程序

Light 小程序支持微信小程序语法，通过 CLI 能够将微信小程序直接编译生成的 Light 小程序,它能够直接在 Light App 环境中运行。

Taro 在 Light 小程序体系中扮演的是一个上层框架的角色，使用 Taro 能够帮助你更快捷的编写微信小程序以及同构 H5 项目或更多端,而 Light 小程序是专注于解析微信小程序语法（说明：可以使用原生微信语法编写小程序，也可以使用 Taro 或更多的框架编写小程序，并不做限制）。

## 标准化方向

1. 团队统一使用 Taro vue 语法，官方文档链接：[http://taro-docs.jd.com/taro/docs/vue](http://taro-docs.jd.com/taro/docs/vue)

2. Taro 版本采用 3.x（注：建议用最新，3.0 以上支持 vue 语法编写）,并不对具体版本做特殊要求。说明：Light 小程序底层是对微信小程序语法标准的全面支持，而 Taro 框架体系是把 DSL 语言转变为微信小程序语法的一种方案，我们不会对工具有过多的限制，拥抱社区。如果您发现 Taro 框架部分功能没有支撑到微信小程序，可以提交 PR 到社区来解决。

## 调试技巧

1. 使用 Taro 多端同步调试

参考 Taro 官方：[http://taro-docs.jd.com/taro/docs/envs-debug](http://taro-docs.jd.com/taro/docs/envs-debug)

2. 结合 Light 小程序的调试模式

`说明：目前 Light 小程序暂未提供配合 Taro 使用的项目脚手架，因为我们的目的不是把 Taro 作为一个捆绑框架使用，我们的目标是兼容所有的上层框架。`

为了能让 Taro 项目方便快捷的与 Light 小程序体系结合，目前临时方案可做如下的配置修改：

light 配置文件

```json
// light.project.json

{
  "prject": "miniprogram",
  "type": "miniprogram",
  "dist": "build",
  "plugins": ["miniprogram"]
}
```

taro 配置文件

```javascript
// config/index.js

const config = {
  sourceRoot: "src",
  outputRoot: "dist/light/src", // 输出符合 light 项目的工程结构，注：如果该项目为多端同构项目，此处可以根据环境变量，做不同的输出结构配置
  copy: {
    patterns: [{ from: "light.project.json", to: "dist/light/project.json" }], // 复制 light 项目配置文件，到 light 工程
    options: {},
  },
};
```

第一步：运行 Taro 项目。

```bash
yarn dev
# 或 npm run dev
```

第二步：在 Taro 输出小程序的位置下 (例：`dist/light`) 运行 Light 监听。

`说明：也可以在 npm script 上添加便捷脚本 例如："dev:light": "cd dist/light && light release -wb 3000"`

```bash
light release -wb 3000
```

第三步：修改 Taro 项目，实时编译到 Light 项目，Light 监听并实时渲染到浏览器或 Light View。

（最后：更多 Light 小程序的调试技巧可参考，Light 官方文档）
