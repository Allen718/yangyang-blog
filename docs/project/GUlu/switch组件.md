### 开始第一个轮子，switch组件
1. 在components新建一个Switch-demo的组件，并为它添加路径，在main.ts的文件里面关于router添加路径与组件，并使它能够访问到。将关于vue router内容
抽离为一个单独的ts文件。并在docs组件里使用routerview标签，给出相应的渲染区域。
```
import {createRouter, createWebHashHistory} from "vue-router";
import home from "./views/home.vue";
import docs from "./views/docs.vue";
import SwitchDemo from "./components/Switch-demo.vue";
const history = createWebHashHistory()
  export const router = createRouter({
  history: history,
  routes: [{ path: '/', component: home },
    { path: '/docs', component: docs ,children:[
        {path:'',component:DocsDemo},//默认显示页面
        {path:'switch',component:SwitchDemo},//swith页面
       
```
2. 在src目录下新建一个lib 目录，创建Switch.vue.switch表示在两种状态间切换时用到的开关选择器。api设计当value为'true'或是true时表示开，其余值都为关。
```
<Switch value="true" /> value 为字符串 "true"
<Switch value="false" /> value 为字符串 "false"
<Switch :value="  true  " /> value 为布尔值 true
<Switch :value="  false  " /> value 为布尔值 false
```
3.开始写代码，先写html再写css 最后再写js ,参考其他网站的switch ,基本上都是一个一个button按钮，里面再有一个小圆圈，为一个span标签，关于html和css都是可以参考其他网站样式的
4. houver之后右滚，可以修改相对定位，hover之后修改left的值，采用计算`left:calc(100% -#{$h} -2px)`,添加上动画使用css transition.
5. switch 正常应该是点击以后右滚，开始实现此功能，首先，需要一个数据，点击后修改数据，来切换。在switch组件里面定义一个数据，当点击修改数据，通过给组件添加类的方式修改样式。
代码实现,
```
<button @click="toggle" :class="{checked}"> <span></span> </button>
 setup(){
    const checked = ref(false)
    const toggle = ()=>{
      checked.value = !checked.value
    }
    return {checked, toggle}
  }
  ```
一个switch的功能就实现了，但请注意一个问题，用户使用了这个组件，用户就不能修改这个默认的状态，假设我们设置默认为关闭的状态但是使用者想要默认开启状态做不到，并且添加功能也不现实。

6. 上面分析，switch组件存在着问题，switch 组件控制开关的数据应该由外部传入，并不应该是内部数据，所以需要使用到vue3的props,在Switch-demo组件里传入数据，switch组件接受数据然后做出反应
```
<Switch :value="y" @input="y=$event" />
 setup(){
     const y=ref(false)
    return{y}
  }
  switch组件
   <button @click="toggle" :class="{checked:value}"> <span></span> </button>
    setup(props, context){
    const toggle = ()=>{
      context.emit('input', !props.value)//与vue2有区别this.$emit() 
    }
  ```
    
  7. vue3的v-model，数据双向绑定，vue3已经取消.sync修饰符，如果想要使用数据双向绑定首先事件触发的事件名固定格式`context.emit('update:value', !props.value)`,然后监听` <Switch v-model:value="y"/>`
  8. 整理代码，组件基本完成
  


        
        
