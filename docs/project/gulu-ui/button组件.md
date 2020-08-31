## 创建Button 组件
创建一个button按钮，先使用js创建。
```
Vue.component('g-button',{
  template:`
    <button>hi</button>`

})
```
1. 书写button的样式，由于我们做的button 要通用最好不要将宽高这些写死，而是变成变量。
```
 --button-height: 32px;
      --font-size: 14px;
.g-button {
      font-size: var(--font-size);
      height: var(--button-height);
          }
```
安装parcel 打包工具，npm install -D parcel-bundler,-D的意思是开发者使用
将button按钮组合起来。成为一个单文件组件，使得app.js成为入口
2. 使用parcel 来运行我们的项目 具体位置在'./node_modules/.bin/parcel index.html
页面不显示按钮，使用的vue 版本有问题，将package.json 文件添加一个
 ```
 "alias": {
  
    "vue":"./node_modules/vue/dist/vue.common.js"
 }
 ```
  然后再次运行 ./node_modules/.bin/parcel index.html --no-cache 
   button 按钮的内容应该使用插槽，不能写死这个按钮。 
  3.  引入svg 图标,设置一下icon样式，关于icon的名字应该有外部数据，使用props传入` <use :xlink:href="#i-${name}"></use> `
   4. 让用户可以自定义引入的icon图标到底是放在左边，还是右边，再来一个`propsprops:['name','iconPosition']`然后`:class="{[icon-${iconPosition}]:true} `通过css让图标的位置交换，flex布局中有一个叫做order的属性。
   5.  在vue中有一个功能叫做,验证器验证外部传值的正确性
   ```
       iconPosition:{
       type:String,
       default:'left',
       validator(value){
      return value === 'left' || value === 'right'
       }//可以让外部输入不对的情况下报错
    ```
6.  用到icon的地方较多，将icon 封装成一个单独的vue组件,在app.js声明一下成为全局通用，名字外部传值。 
7. 增加显示菊花状态，即加载中状态，采用动画声明一个动画
@keyframes spin {
   0%{transform: rotate(0deg)}

  100%{transform:rotate(360deg);
  }}
.loading{
      animation: spin 1s infinite linear;
    }

8. 给button 添加点击事件，当button 被点击时才会出现菊花状态
```
<button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
 <icon  v-if="loading"   class="loading icon" name="load-5"></icon>
    <icon class=" icon"  v-if='icon&&!loading' :name='icon'></icon>
  <g-button icon="setting" icon-position="left" :loading="loading3" @click="loading3=!loading3">
    按钮
  </g-button>
```
单元测试 npm i -D chai 然后开始书写单元测试,开始的时候就用简单的块隔开
import chai from 'chai'//npm install -D chai
import spies from 'chai-spies'//npm install -D chai-spies
chai.use(spies)
const expect = chai.expect
{
const div = document.createElement('div')
document.body.appendChild(div)
const Constructor = Vue.extend(Button)
const vm = new Constructor({
  propsData: {
    icon: 'settings'
  }
})
vm.$mount(div)
let svg = vm.$el.querySelector('svg')
let {order} = window.getComputedStyle(svg)
expect(order).to.eq('1')
vm.$el.remove()
vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})//声明这个间谍函数
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}

