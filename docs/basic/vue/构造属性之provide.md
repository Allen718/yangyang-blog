## provide和inject
举例子学习，一个父组件，五个子组件，如果想要在子组件里面读取和修改这个父组件里面的数据需要怎么做，通过provide和inject 

```
<template>
  <div :class="`app theme-${themeName} fontSize-${fontSizeName}`">
    <Child1/>
    <button>x</button>
    <Child2/>
    <button>x</button>
    <Child3/>
    <button>x</button>
    <Child4/>
    <button>x</button>
    <Child5/>
    <button>x</button>
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
  provide() {
    return {
      themeName: this.themeName,
      fontSizeNmae: this.fontSizeName,
      changeTheme: this.changeTheme, // 如果不生效，刷新一下 codesandbox
      changeFontSize: this.changeFontSize
    };
  },
  data() {
    return {
      themeName: "blue", // 'red'
      fontSizeName: "normal" // 'big' | 'small'
    };
  },
  methods: {
    changeTheme() {
      if (this.themeName === "blue") {
        this.themeName = "red";
      } else {
        this.themeName = "blue";
      }
    },
    changeFontSize(size) {
      if (["normal", "big", "small"].indexOf(size) === -1) {
        throw new Error(`wront size: ${size}`);
      }
      this.fontSizeName = size;
    }
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
子组件
<template>
  <div>
    <button @click="changeTheme">换肤</button>
    <button @click="changeFontSize('big')">大字</button>
    <button @click="changeFontSize('small')">小字</button>
    <button @click="changeFontSize('normal')">正常字</button>
  </div>
</template>
<script>
export default {
  inject: ["themeName", "changeTheme", "changeFontSize"]
};
</script>
```


