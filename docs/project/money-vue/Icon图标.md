### icon图标的引入
 - 在项目中，经常会用到svg图标，iconfont图标库是一个丰富的图标库，直接将下载好的图标像以前引入图片的方式引入，首先我们会看到ts文件的检查报错，无法识别，我们需要在声明文件(shims-vue.d.ts)里去声明一下 svg
```
 declare module "*.svg" {
  const content: string;
  export default content;
}
```
此时我们引入得到的是一个带有svg路径的字符串，也并不能成功引入图标。安装一个叫做`svg-sprite-loader`的loader，然后找到vue.config.js,配置文件，将此文件内容修改为如下：
  
```
const path = require('path')
module.exports = {
  lintOnSave: false,
  chainWebpack:config=>{
    const dir=path.resolve(__dirname,'src/assets/icons')//确定我们的icon全都位于src/assets/icons目录
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()//只包含icons目录
      .use('svg-sprite').loader('svg-sprite-loader').options({extract:false}).end()
      .use('svgo-loader').loader('svgo-loader')
          .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
  
```

- 配置完成以后，然后页面引入icon，例如`import xxx from '@//assets/icons/xxx.svg `我们可以在网页的body标签里面发现svg标签，里面包着一个symbol标签，，如果没出现，终止终端，重启试试看，然后我们就可以在具体使用到这个图标的地方使用
  
```
<svg class="icon">
    <use :xlink:href="'#'+xxx"/>
  </svg>
  ```
基本上通过上面的步骤我们就可以完成图标的引入，但是我么也发现这样做比较麻烦。特别是假如有很多图标需要引入的时候，这就是一个工作量较大，并且重复的工作。
  
- 为了解决图标引入的工作量大，且重复的问题，有一种可以一次性引入全部图标的办法。代码如下
```
  const  importAll=(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext)
  try{importAll(require.context('../assets/icons'//这是存放我们所有svg图标的目录,true,/\.svg$/));
  }catch(error){
    console.log(error)
  }
 ```
  此时我们就会发现svg标签里面出现了多个symbol标签，此时已经将全部icon图标引入了，只需要在使用的地方用上面的使用方法使用即可，不过为了使用方便可以直接封装一个叫做Icon的组件更方便。参考代码如下
 ```
  <template>
  <svg class="icon">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>
<script lang="ts">
  const  importAll=(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext)
  try{importAll(require.context('../assets/icons',true,/\.svg$/));
  }catch(error){
    console.log(error)
  }
  export default {
    name: 'Icon',
    props:['name'],
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```
以后只要哪里需要使用直接引入这个组件，传一下这个图标的标签名name就可以使用了。