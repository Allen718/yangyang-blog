### popover组件回顾
#### 新建一个vue组件Popover.vue
1. 分析应该有一个文本框和一个类似按钮的东西，当点击按钮的时，就弹出一段内容，所以分析应该有两个插槽，一个用于放类似按钮的东西，另一个插槽放类似文本框的东西，默认隐藏状态，当点击就弹出 
   ```
   <div >
    <div class='content-wrapper'>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
  ```
  2. 控制文本框是否被看见，声明一个内部的data数据visible,默认为false，当点击就让visible变成true，然后div(class='content-wrapper')使用条件判断
    ```
   <div @click='xxx'>
    <div v-if="visible" class="content-wrapper" >
      <slot name="content"></slot>
    </div>
    <slot></slot>
    </div>
     data() {
      return {
        visible: false
      }
      methods:{
          xxx(){
              this.visible=!(this.visible)
          }
      }
    ```
 3. 定位一下文本框的位置,使用position定位，`bottom:100%`,表示出现在父元素的上方。
 4. 需求分析，当我们点击一下，出现文本框以后，如果此时我们再点击网页的其他地方是否这个文本框应该消失，当然是应该消失，实现在
```
  xxx(){
              this.visible=!(this.visible)
                  if (this.visible === true) {
                      document.body.addEventListener('click',()=>{
                          this.visible===false
                      })
                  }
          }
```
运行代码以后发现弹框出不来，原因就是当我们点击时先把visible变成true,有立马将其变为了false,这要变成一个异步的过程才对，首先将visible变成true,下一个队列任务再做事件监听的点击，使用setTimeout.
```
if (this.visible === true) {
                 setTimeout(()=>{document.body.addEventListener('click',()=>{
                          this.visible===false
                      })}.0)     
                  }
```

5. 点击发现问题，body的范围太小，需要将监听的是document.addEventListener,当再次点击出现问题，文本框不弹出来了，通过log 发现当再点击的时候，触发两个事件监听，本身的xxx,其次的docuemnt的事件监听，并且随着多次的点击发现事件监听数越来越多，原来是因为每一次将visible变为true就添加了一个事件监听，所以需要每次事件监听以后及时移除事件监听，为了移除事件监听，我们将事件监听的箭头函数变为了了一个具名函数，并且绑定了this
```
 xxx() {
        this.visible = !(this.visible)
        console.log('第一次点击')
        if (this.visible === true) {
          setTimeout(()=>{
            document.addEventListener("click", function x()  {
              this.visible = false
              document.removeEventListener('click',x)
              console.log('下一个')
          }.bind(this))
          },0)
        }
```
运行依然失败，通过log查找原因，怀疑是没有成功移除事件监听，分析原因是因为function绑定了this返回的是一个新的函数，所以还是单独声明一下这个函数,然后使用。
```
 let eventHandler = () => {
              console.log('点击body就关闭popover')
                  this.visible = false
                console.log('删除监听器')
                  document.removeEventListener('click',eventHandler)
                }                            
```
6. 当点击文本框的时候，有时候需要复制其中内容，我们希望文本框并不要消失，所以我们需要阻止事件的冒泡，不要进行监听,后面发现有bug，如果阻止了冒泡，那么使用者就不能做事件监听了，因为并不冒泡了。
   ```
    <div class="popover" @click.stop="xxx">
    <div v-if="visible" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
    </div>
  ```
 7. 由于如果在组件`<g-popover></g-popover>`外面添加`overflow:hidden`可能会影响弹出框，甚至看不见弹出框，最好的方式就是不让这个弹出框呆在`<g-popover></g-popover>`.为了得到this.$refs.contentWrapper，需要使用v-show,v-show就是元素存在页面，不太好，还是改用v-if，当div(class="content-wrapper)出现在页面以后，我么再移动这个div.所以还是在当visible变为true的时候再去拿这个this.$refs.contentWrapper
   ```
    <div v-show=" visible" class="content-wrapper" @click.stop ref="contentWrapper">
      <slot name="content"></slot>
    </div>
     mounted(){
   setTimeout(()=>{
         document.body.appendChild(this.$refs.contentWrapper)
    },1000)

    ```
 8. 关于内容定位可能会出现的bug我们可以获取到触发器的位置，然后再使用相对定位让内容出现在触发器的正上方,可能会出现bug,有滚动条出现的时侯，触发器的位置是相对于屏幕顶部的位置，getBoundingClientRect得到的是元素相对于可视窗口顶部的距离而content的相对定位是相对于body的位置，所以需要加上一个window.scrollX与 window.scrollY.有的浏览器会出现问题，需要自己谷歌搜索元素如何相对于document定位。
 ```
     this.visible = !(this.visible)
            if (this.visible === true) {
              setTimeout(() => {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + "px"
                this.$refs.contentWrapper.style.top = top + window.scrollY + "px"
                  

 ```
9. 解决关于冒泡事件的bug问题
   假设阻止事件冒泡，当点击这个content内容时确实内容不会关闭，但是如果有其他的事件监听也许会出现bug,比如关闭弹窗功能，所以最好不要阻止事件冒泡
 ```
    if (this.$refs.triggerWrapper.contains(e.target)) {
            this.visible = !(this.visible)
            if (this.visible === true) {
              setTimeout(() => {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + "px"
                this.$refs.contentWrapper.style.top = top + window.scrollY + "px"
                let eventHandler = (e) => {
                  if (this.$refs.contentWrapper.contains(e.target)) {
                  } else {
                    this.visible = false
                    document.removeEventListener("click", eventHandler)
                  }
                }
 ```
 此时有个bug就是当我们点价触发器以后，document已经监听，我们不点击外面再次点击触发器，弹窗关闭，但是监听器并没有移除，所以应该是只要弹窗关闭，那么必须移除监听器，所以将移除监听器放在关闭函数里面             
```
 methods: {
      positionContent() {
          document.body.appendChild(this.$refs.contentWrapper)
          let { left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + "px"
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px"

        },
      eventHandler(e) {
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper.contains(e.target))||this.$refs.popover.contains(e.target)) {
        } else {
          this.close()
        }
      },
      open() {
        this.visible=!this.visible
        setTimeout(() => {
          this.positionContent()
          document.addEventListener("click", this.eventHandler)
        }, 0)
      },
      close(){
        this.visible=false
        document.removeEventListener("click", this.eventHandler)
      },
      Click(e) {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          if (this.visible === true) {
            this.close()
          }else{
            this.open()
          }
        }


      }
    },
```
 10. 开始书写修改弹框的样式，要让弹框看起来正常，参考其他组件库的样式，考虑当弹框提示内容很多的时候，规定一下弹框的最大宽度，如果是英文单词呢使用word-break:break-all.这一部分的样式十分复杂，具体就看代码实现，应用到了表驱动编程。
 11. hover还是click
 为了实现到底是点击还是hover需要这样做
 ```
  trigger:{
        type:String,
        default:'click',
        validator(value){
          return['click','hover'].indexOf(value)>=0
        }
      }
    computed:{
      openEvent(){
        if(this.trigger==='click')
        { return 'click'}else{
          return 'mouseenter'
        }

      },
      closeEvent(){
        if(this.trigger==='click')
        { return 'click'}else{
          return 'mouseLeave'
        }
      }
    },
     mounted() {
      if(this.openEvent==='click'){
        this.$refs.popover.addEventListener('click',this.Click)
      }else{
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
```
 12. 在一个组件里面有插槽，如果我们想插槽里面的东西暴露给外面，我们可以这样做
```
 <slot name="content" :close="this.close"></slot>
 在外面用slot-scope接收
 <template name='content' slot-scope="{close}">
 ```