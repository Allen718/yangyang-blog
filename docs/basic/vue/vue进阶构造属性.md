## mixin extend
例子,假如在一个页面有五个子组件，我们希望在这五个组件里面创建时打印出我出生了，然后消失的时候打印出我死亡，并记录一下，存在的时间，我们可以这样做,
```
<template>
  <div>Child1</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Child1"
    };
  },
 created(){
     console.log(
          if (!this.name) {
      throw new Error("need name");
    }
    this.time = new Date();
    console.log(`${this.name}出生了`);
     )
 }
 beforeDestroy() {
    const now = new Date();
    console.log(`${this.name}死亡了，共生存了 ${now - this.time} ms`);
  }
};
</script>
父组件
<template>
  <div id="app">
    <Child1 v-if="child1Visible"/>
    <button @click="child1Visible = false">x</button>
    <Child2 v-if="child2Visible"/>
    <button @click="child2Visible = false">x</button>
    <Child3 v-if="child3Visible"/>
    <button @click="child3Visible = false">x</button>
    <Child4 v-if="child4Visible"/>
    <button @click="child4Visible = false">x</button>
    <Child5 v-if="child5Visible"/>
    <button @click="child5Visible = false">x</button>
  </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import Child3 from "./components/Child3.vue";
import Child4 from "./components/Child4.vue";
import Child5 from "./components/Child5.vue";
export default {
  name: "App",
  data() {
    return {
      child1Visible: true,
      child2Visible: true,
      child3Visible: true,
      child4Visible: true,
      child5Visible: true
    };
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5
  }
};
</script>
```
那么五个孩子是不是需要在这五个组件里面都要写，这样太重复了，最好的办法就是使用mixin ,将五个组件里面都需要的全都提出来，成为公共的。
然后子组件里面
```
<template>
  <div>Child1</div>
</template>
<script>
import log from "../mixins/log.js";
export default {
  data() {
    return {
      name: "Child1"
    };
  },
  mixins: [log]
};
</script>
```
这个公共的部分
```
const log = {
  data() {
    return {
      name: undefined,
      time: undefined
    };
  },
  created() {
    if (!this.name) {
      throw new Error("need name");
    }
    this.time = new Date();
    console.log(`${this.name}出生了`);
  },
  beforeDestroy() {
    const now = new Date();

    console.log(`${this.name}死亡了，共生存了 ${now - this.time} ms`);
  }
};

export default log;
```
## 使用extend
1. 创建一个extend.js文件，内为：
   ```
   const myvue =Vue.extend(
       { data() {
    return {
      name: undefined,
      time: undefined
    };
  },
  created() {
    if (!this.name) {
      throw new Error("need name");
    }
    this.time = new Date();
    console.log(`${this.name}出生了`);
  },
  beforeDestroy() {
    const now = new Date();

    console.log(`${this.name}死亡了，共生存了 ${now - this.time} ms`);
  }}
   )
   ```
   使用方法
   ```
   import myvue from '../vue.js'
   extends:myvue
   ```
 
   

