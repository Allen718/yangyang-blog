### 组件input的学习回顾笔记
解决bug 由于在上传npm 时创建一个index.js导致现在运行parcel的时候
#### 需求分析
 分析input输入框的需求分析，应该有focus， hover ,readonly 与disabled 
#### 开始写代码
1. 新建一个input的组件，然后`template里面有一个input 一个div包裹`变为display:inline-block
2. 书写样式，使用变量定义样式
```
 $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  ```
  3. 一个默认值，value外部传入
   ```
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
   <g-input value="lisa" disabled ></g-input>//由于disabled与readonly都是布尔值，所以直接将`:disabled='true'`,同理readonly也是。
   <g-input value="李四" readonly ></g-input>
```
4. 让Input支持事件。
```
 @change="$emit('change',$event)" @input="$emit('input',$event.target.value)"
@blur="$emit('blur',$event)" @focus="$emit('focus',$event)"
```