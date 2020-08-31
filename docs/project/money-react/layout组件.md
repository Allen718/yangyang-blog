## Layout 组件
开始创建layout组件，layout组件主要就是高度为一屏，采用flex布局，上面为内容部分，下面是导航部分，让导航部分的位置始终在底面，
```
function Statistics() {
   return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
```
1. 创建views目录，将四个页面做成单独的四个组件，新建src/views/Money.tsx,src/views/Tags.tsx,src/views/Statistics.tsx,src/views/NoMatch.tsx.
```
import Layout from '../components/Layout';
import React from 'react';

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}

export default Money;
```
2. 导航栏的优化，上面做出来的导航栏，我们发现当点击图标的时候并不能够跳出来，所以考虑，将图标让如link标签里面，这样当地点击图标的时候也能做到跳转，我们希望当选中导航栏的哪一项高亮，将link改成Navlink ,如果引入的图标是自带颜色，那么需要使用一下，svgo-loader处理下，去webpack.config.jon文件中，找到先前配置关于svgo-loader的相关项完成一下配置。
```
<NavLink to="/tags" activeClassName="selected"> <Icon name={'label'}/>标签</NavLink>
&.selected{color:blue;
>.icon{
fill:blue;}
配置文件

  {
                  loader: 'svgo-loader', options: {
                    plugins: [
                      {removeAttrs: {attrs: 'fill'}}
                    ]
                  }
                }
  
  
  ```