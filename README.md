# apple-basket-redux
![](https://raw.githubusercontent.com/ckinmind/apple-basket-redux/master/src/images/appleBasket.gif)

一个微型的在react中应用redux的demo演示, 在线访问[https://ckinmind.github.io/apple-basket-redux/](https://ckinmind.github.io/apple-basket-redux/),

## 技术栈
- React.js with ES6
- Redux for predictable state
- Redux-thunk for middleware
- immutable for persistent data
- fetch for request / jQuery for ajax
- Webpack for building tool

## 项目说明
- 本项目来自文章[《实例讲解基于 React+Redux 的前端开发流程》](https://segmentfault.com/a/1190000005356568)
- 原文章没有提供完整的实现代码，本项目是原文章的完整实现
- 摘苹果的ajax请求地址使用的hackernews的api,只是为了让请求走通，数据还是自己mock
- npm安装依赖过程可能会遇到的问题以及不靠谱解决方案, 查看[issue 12](https://github.com/ckinmind/apple-basket-redux/issues/12)

## 版本更新(查看Branch / Tags)
- **[v1.4]**: 使用fetch替换jQuery的ajax, 详细更新说明 [issue 11](https://github.com/ckinmind/apple-basket-redux/issues/11)
- **[v1.3]**: 增加immutable.js, 改变对象拷贝的方式, 详细更新说明 [issue 8](https://github.com/ckinmind/apple-basket-redux/issues/8)
- **[v1.2]**: 增加异步action的完整实现(使用redux-thunk),  详细更新说明 [issue 5](https://github.com/ckinmind/apple-basket-redux/issues/5)
- **[v1.1]**: 变成只有两个动作，且去除异步请求部分的演示版本, 详细更新说明 [issue 2](https://github.com/ckinmind/apple-basket-redux/issues/2)
- **[v1.0]**: 基本同文章提供的代码一致, 详细更新说明 [issue 1](https://github.com/ckinmind/apple-basket-redux/issues/1)

## 如何开始
```js
> git clone https://github.com/ckinmind/apple-basket-redux.git
> cd apple-basket-redux
> npm install
> npm start
```

## 问题收录
- 异步action的问题(引入redux-thunk), 查看 [issue 6](https://github.com/ckinmind/apple-basket-redux/issues/6)
- webpack打包html中图片的问题,  查看 [issue 7](https://github.com/ckinmind/apple-basket-redux/issues/7)
- 关于immutable.js的使用,  查看 [issue 9](https://github.com/ckinmind/apple-basket-redux/issues/9)
- 关于fetch的使用, 查看 [issue 10](https://github.com/ckinmind/apple-basket-redux/issues/10)