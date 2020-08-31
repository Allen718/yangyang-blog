### 开始制作button组件
1. 在lib目录下新建一个Button.vue组件，然后在Button-demo组件引入，需求分析，这个button按钮可以是链接，可以是文字，可以 click、focus、鼠标悬浮，可以改变 size：大中小，可以禁用（disabled），可以加载中（loading）
2. 想api,支持点击，focus，mouseOver,文字，图标或是链接，尺寸的大中小，不可用状态，加载中状态。
3.开始写代码， 让Button支持@click @focus @mouseover，在vue3中的自定义组件使用@click,@focus @mouseover会自动将这些事件绑定到最外层元素上，就拿Button组件举例来说，
```
<Button @click="onClick" @focus="onClick" @mouseenter="onClick">你好</Button> 
  setup(){
      const onClick=()=>{
        console.log('hi')
      }
      return{onClick}
    }

```
此时当我们点击页面按钮，就会执行`console.log('hi')`,但如果在Button组件里面的结构是
```
<div>
    <button >
      <slot/>
    </button>
  </div>
  ```
  此时是将click focus绑定在div元素上的，但其实我们想要的是绑在button元素上面，具体步骤
  - 首先让div元素不在具有继承性` inheritAttrs:false`,然后将需要继承的东西挂在button元素上` <button v-bind="$attrs">`
  - 如果我们想要div元素继承一些，button元素再继承一些，那么也是可以做到的，
  ```
  <div @click="onClick">
    <button v-bind="rest">
      <slot/>
    </button>
  setup(props,context){
      const {onClick,onFocus,onMouseOver,...rest}=context.attrs
      return {onClick,rest}
    }
    
   ```
  总结：默认所有属性都绑定到根元素
使用 `inheritAttrs: false` 可以取消默认绑定
使用 `$attrs` 或者 `context.attrs` 获取所有属性
使用` v-bind="$attrs"` 批量绑定属性
使用 `const {size, level, ...xxx} = context.attrs` 将属性分开
   
 4. 关于props与attrs的区别，props 要先声明才能取值，attrs 不用先声明
props 不包含事件，attrs 包含props 没有声明的属性，会跑到 attrs 里
props 支持 string 以外的类型，attrs 只有 string 类型,例如props支持boolean
5. 让button 支持theme属性，初步设定按钮支持三种，一种普通按钮 一种为文本按钮，还有一种跳转按钮。
```
props:{
theme:{
        type:String,
        default:'button'
      }
}
:class="`theme-${theme}`如果不传默认值，就写成下面这种
:class="{[`theme-${theme}`]:theme}"
```
6.给button 添加基本样式,一些css样式的解释 `white-space: nowrap;` `& + & {
      margin-left: 8px;    }`两个buton

7. ui库的css使用注意事项，不要使用scoped,因为data-v-xxx中的xxx每次运行可能不同，必须输出稳定不变的class选择器，方便使用者覆盖，在我们造组件的过程中，给各元素命名的时候最好加上前缀，免得被使用者覆盖。
8. css最小影响原则，在我们创建这些个组件的时候，我们都默认是`border-box;padding:0;margin:0`但是如果使用者并不设置这样的话就很可能使得我们写的组件的样式出现问题，这当然是我们不乐意看见的，并且我们需要防止出现这个问题，所以新建一个专门给组件添加样式的文件，gulu.scss,然后将我们组件初始化的样式都放进这个文件里面，然后再main.ts文件中引入即可。
9. 然后开始然button组件支持第一个属性，就是theme，根据我们所设想的应该有不同按钮，文字类型，链接类型，还有图标类型，基本上这些都要靠css实现，所以我们要给不同的theme添加不同类名，通过类名来添加样式。后面的size disabled level loading 属性都是这一套路。
```
 props: {
      icon:{
        type:String,

      },
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading:{
        type:Boolean,
        default:false
      }
    },
    setup(props) {
      const {theme, size, level,loading,icon} = props;
      const classes = computed(() => {
        return {
          [`gulu-theme-${theme}`]: theme,
          [`gulu-size-${size}`]: size,
          [`gulu-level-${level}`]: level,
          [`gulu-loading`]:loading
        };
      });

      return {classes};
    },
  ```

      



