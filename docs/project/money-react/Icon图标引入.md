## 引入icon图标
  - 当成图片方式来引入，缺点就是不能修改图标的颜色
  ```
  import x from 'icons/money.svg'
  <img src={x} alt/>
  ```
  - React没有配置文件，但是为了使用Icon图标我们需要修改配置文件，把需要提交的文件提交一下，使用`npm run eject`命令将配置文件手动提出来。更改webpackcon.config.json配置文件，具体操作看`svg-sprite-loader`,找到webpackcon.config.json然后在里面找到约在350行加上 ,`npm install svg-sprite-loader -D,npm install svgo-loader -D`,
  ```
  oneOf: [//350行
            {
              test: /\.svg$/,
              use: [
                { loader: 'svg-sprite-loader', options: {  } },
                {
                  loader: 'svgo-loader', options: {
                    plugins: [
                      {removeAttrs: {attrs: 'fill'}}
                    ]
                  }
                }
              ]
            },
            使用方法
             import x from 'icons/money.svg'
             console.log(x)
             <svg>
             <use xlinkHref="#money">
             <svg>
             
  ```
  如果并不使用console.log(x),发现图标消失了，原理和Tree Shaking有关，声明一个变量但是不使用，编译时直接删掉，为了解决bug，需要使用require来引入。
  
4.为了解决引入图标的麻烦与重复，创建Icon组件，将引入icon图标封装成一个组件，然后给组件使用。
```
import React from 'react';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);//
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props = {
  name: string
}
const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};

export default Icon;
```
运行时` __WebpackModuleApi`会报错，需要安装` npm install --dev @types/webpack-env@1.15.1`.