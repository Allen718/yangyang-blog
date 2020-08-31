## redux
1. 在项目中我们会经常设计到组件之间相互通信，如果父子之间或是爷孙之间，兄弟之间通信还好，可以通过简单的props可以实现，但是如果各个组件关系复杂，那么这种通过props通信的办法就是不可取的，那我们可以找个地方存放一些共享数据而已，大家都可以获取到，也都可以进行修改，仅此而已。那放在一个全部变量里面行不行 行，当然行，但是太不优雅，也不安全，因为是全局变量嘛，谁都能访问、谁都能修改，有可能一不小心被哪个小伙伴覆盖了也说不定。
2. redux的作用
- 存放一个数据对象 
- 外界能访问到这个数据
- 外界也能修改这个数据
- 当数据有变化的时候，通知订阅者
3. redux的三个核心api
- store 它由Redux提供的createStore(reducer， defaultState) 这个方法生成，生成三个方法，getState()获取数据,dispatch()修改数据，它是发出 Action 的唯一方法,subscrible() 注册订阅函数。设置监听函数，一旦 State 发生变化，就自动执行这个函数。要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
- reducer是一个纯函数，它根据previousState和action计算出新的state。reducer(previousState,action)
- action本质上是一个JavaScript对象，其中必须包含一个type字段来表示将要执行的动作，其他的字段都可以根据需求来自定义。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store
  ### React-Redux
  Redux 本身和React没有关系，只是数据处理中心，是React-Redux让他们联系在一起。React-rRedux提供两个方法：connect和Provider。
  

