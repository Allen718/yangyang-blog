1. .sync 修饰符。它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。常用与类似场景假设父亲手里有一万块，他对儿子说你可以花我这个钱，但是钱呢在我这里，儿子想要花钱怎么办，钱不在儿子身上，他必须要通知他的父亲他要花钱，让他爸爸给钱，然后他才可以成功花钱。
```
<template>
<div class="app">
App.vue 我现在有 {{total}}
<hr>
<Child :money="total" v-on:update:money="total = $event" style=" border: 3px solid green;"/>
</div>
</template>
<script>
vue.components(id:'Child',{
template:'
<div class="child">
{{money}}
<button @click="$emit('update:money', money-100)">
<span>花钱</span>
</button>
</div>',
props: ["money"],
,})
export default {
data() {
return { total: 10000 };
},
</script>
<style>
.app {
border: 3px solid red;
padding: 10px;
}
</style>
```

效果图

分析，绿框里面的数据1000不是子组件传入的，使用外部传值实现，那子组件自然是没办法修改这个数据。本例子中子组件想要通过点击花钱这个按钮来实现修改这个10000，显然直接减是做不到的，可以通过`this.$emit`去通知父组件，把要做的事情传参，父组件通过`$event`可以获取到这个消息，接收到参数信息，然后由他来修改这个数据。
上面这种场景由于很常见，作者大大就发明了`:money.sync="total"`, 这个语法糖替代`:money="total" v-on:update:money="total = $event"`
 






