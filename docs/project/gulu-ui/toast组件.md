## Toast
新建一个toast组件，全局声明这个组件使之成为一个全局组件
1. 如何调用这个toast组件的两种办法
- 方法一
  在toast组件里面，增加Vue的共有属性，一旦这个组件成为全局组件，所有的Vue实例都可以有这个属性
```
  import Vue from 'vue'
  Vue.prototype.$toast=function(){
    console.log('hi')
  }
```
缺点 直接修改vue的共有属性，会有一些问题也许先前已经声明了一个叫做toast的方法
  引入Vue，这个vue的版本也会有问题
  最好的办法使用vue的自定义插件
- 新建一个plugin.js文件
 ```
  export default{
  install(Vue,options){
    Vue.prototype.$toast=function(message){
    console.log(message)
    }
  }
}
全局声明一下使用
import plugin from './plugin.js'
Vue.use(plugin)
```
然后就可以在各个组件里面通过this.$toast来调用此函数。
方法二是更经常采用的方法，用户自己的清楚到底做了什么
动态生成一个vue组件
```
 Vue.prototype.$toast=function(message){
  let Constructor=Vue.extend(Toast)
      let toast=new Constructor
      toast.$slots.default=[message]//保证顺序
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
```
然后vue组件开始正常写
```
 <template>
  <div class="toast">
    <slot></slot>
  </div>
 </template>
 <script>
  export default {
    name: 'GuluToast'
  }
 </script>
```
组件的css可以参考其他组件库样式
### 自动关闭
一般弹窗都会自动关闭，所以实现自动关闭功能
```
props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
}
  mounted () {
      this.execAutoClose()
    },
 methods: {
     execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
          this.$el.remove()
           this.$destroy()
          }, this.autoCloseDelay * 1000)
        }
      },
 }
```
 ### 手动关闭
 ```
    Vue.prototype.$toast = function (message, toastOptions) {
    let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton:  {
            text: '关闭', callback(){
                console.log('用户说他知道啦')
            }
          }
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
 closeButton: {
        type: Object,//如果为对象，默认值变成返回函数
        default () {
          return {
            text: '关闭', callback: undefined
          }
        }
      },
  onClickClose () {
        this.close()//关闭
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)//this === toast实例
        }
      }
    }
```
### 支持html选项
由于slot不支持 v-html,而我们又想要支持这个功能所以
```
 <slot v-if="!enableHtml"></slot>
<div v-html="$slots.default[0]" v-else></div>
 enableHtml: {
        type: Boolean,
        default: false,
      },

```
由于我们不知道弹框的内容是到底多大，所以高度使用最小高度，只要高度不固定那么子元素使用高度100%就会出现问题。为了所以需要解决先前写css样式的时候那条白线消失了，所以只好强制使用js将白线做出来
```
 updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      }

```
### position位置
添加类名
```
   position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
    computed: {
      addClass() {
        return {[`position-${this.position}`]: true}
      }
    },
```
实现只能一个toast 
假设我们不停的点击出现弹框按钮那么就会创建很多虽然位置重叠，但是这个也是不可取的，我们应该实现当第二次点击弹窗的时候把第一次的干掉，然后再新创建
```
import Toast from "./Toast"
function createToast({Vue, message, propsData,onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close',onClose)//当用户自己里面关闭了，我们在外面就不关闭
  document.body.appendChild(toast.$el)
   return toast

}

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, ToastOptions) {
      if (currentToast) {
      currentToast.closeToast()
        currentToast = createToast({Vue, message, propsData:ToastOptions,onClose:()=>{
            currentToast=null
          }})
      } else {
        currentToast = createToast({Vue, message, propsData:ToastOptions,onClose:()=>{
          currentToast=null
          }})
      }

    }
  }
}
```
### 实现进入动画
实现动画的过程中会出现bug，因为我们使用了translateX后面有用translateY覆盖以后,会让动画出现问题
所以最好使用一个容器专门做样式，另一个容器专门做动画。

