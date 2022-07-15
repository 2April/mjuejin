# juejin


## 运行

```
yarn install

yarn start
```

## 实现的功能

* 无限滚动列表
* 浏览历史记录
* 因为不知道如何在 react 中实现状态保持，因此利用 `display: none` 隐藏组件，让进入详情页退回列表页时，停留在离开列表页时的浏览位置上
* 回到顶部

## 遇到的问题

1. react 官方没有实现状态保持，因此在实现返回列表页时，停留在之前的位置这一功能上没有好的实现办法。
   * 有想过直接手动保存状态，但是当加载列表过多时，这种方法肯定有问题，因此没做考虑。
   * 第二个想法是实现 `vue` 里面的 `keep-alive` ，因此查找 `react` 类似组件，比如 `react-activation`、`react-router-cache-route` 等等。 想学习这些组件的源码自己仿写一个，但一看就知道已经超出了我的知识范围。
   * 第三个就算将路由的不匹配行为 **由卸载改为隐藏** ，但这时候又出现第二个问题

2. 因为无限滚动组件中是在 `componentDidMount` 开启监听事件， `componentWillUnmount` 关闭监听事件，因此当路由不匹配行为 **由卸载改为隐藏** 后，`componentWillUnmount` 也就不存在了。因此在详情页滚动时，会造成列表页数据加载。
   * 因此给无限滚动组件传递一个 `props: listenScroll`，这个值为 `this.props.match` 当路由不匹配时则告知无限滚动组件不监听滚动。

3. `react` 中 `setState` 由于是异步的，因此在获取数据后，不能通过 `this.state` 马上拿到数据，导致第一次渲染时报错。
   * 先设置一个状态值 `isLoading` ，根据这个状态值判断是渲染 `loading` 还是渲染组件。

## 待完善

* 懒加载
* 骨架屏
* keep-alive
