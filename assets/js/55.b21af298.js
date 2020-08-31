(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{401:function(l,a,s){"use strict";s.r(a);var t=s(42),e=Object(t.a)({},(function(){var l=this,a=l.$createElement,s=l._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[s("h2",{attrs:{id:"项目介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[l._v("#")]),l._v(" 项目介绍")]),l._v(" "),s("p",[l._v("使用学过的css,html和js等前端技术，实现一个手机与浏览器都兼容的类似于谷歌的一个导航，界面简洁友好，方便快速。")]),l._v(" "),s("h3",{attrs:{id:"项目使用技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目使用技术"}},[l._v("#")]),l._v(" 项目使用技术")]),l._v(" "),s("ul",[s("li",[l._v("figma")]),l._v(" "),s("li",[l._v("html")]),l._v(" "),s("li",[l._v("css")]),l._v(" "),s("li",[l._v("parcel实时预览")]),l._v(" "),s("li",[l._v("iconfont 矢量图标库")]),l._v(" "),s("li",[l._v("jQuery")]),l._v(" "),s("li",[l._v("js技术")])]),l._v(" "),s("h3",{attrs:{id:"实现过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[l._v("#")]),l._v(" 实现过程")]),l._v(" "),s("ol",[s("li",[l._v("使用figma作图工具事先粗略设计出移动端页面效果图\n"),s("img",{attrs:{src:"/docs/.vuepress/public/image/1597648926(1).png",alt:"效果图"}}),l._v("\nfigma作图工具，支持上传图片，也支持各种移动端与电脑页面尺寸，效果图还会自动生成代码，是一个不错的做网页设计的软件。作为非专业设计师，像背景色这类颜色的设置最好仿其他网站，使用图片的放大与缩小时按住shift键防止图片变形")])]),l._v(" "),s("h2",{attrs:{id:"项目实现过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目实现过程"}},[l._v("#")]),l._v(" 项目实现过程")]),l._v(" "),s("ol",[s("li",[l._v("写HTML和CSS")])]),l._v(" "),s("ul",[s("li",[l._v("有了效果图，我们就能根据效果图写出HTML的框架，可以使用语义化标签，使得更加容易理解，可以使用语义化样式命名。")]),l._v(" "),s("li",[l._v("防止视口在移动端被放大缩小，抄淘宝的移动端关于视口部分代码。（自己记不准，且容易出错）")]),l._v(" "),s("li",[l._v("使用"),s("code",[l._v("parcel")]),l._v("实现网页的实时预览")]),l._v(" "),s("li",[l._v("根据设计图写css样式，掌握css中常用的布局方式，此项目我用到了flex布局，颜色的设置直接抄写设计稿中代码。谨慎添加高度，最好用内容撑开高度。")])]),l._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[l._v("图标的导入\n在iconfont.cn图标库中找到自己想要的图标的，加入购物车，然后新建一个项目将图标放入，选择symbol,查看在线链接，然后复制链接使用js导入，点击帮助—>代码应用 至symbol应用，根据文档步骤完成添加。注意图标应用后使用parcel可以成功查看，但双击查看网页是否成功不保证。")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v('<style type="text/css">\n    .icon {\n       width: 1em; height: 1em;\n       vertical-align: -0.15em;\n       fill: currentColor;\n       overflow: hidden;\n    }\n</style>\n具体应用位置，xxx代表图标名称\n<svg class="icon" aria-hidden="true">\n    <use xlink:href="#icon-xxx"></use>\n</svg>\n')])])]),s("ol",{attrs:{start:"3"}},[s("li",[l._v("图片的引入，对于图片尺寸的过大可以设置图片的最大宽度与高度\n"),s("code",[l._v("img {max-width: 100%;max-height: 100%;}")])]),l._v(" "),s("li",[l._v("搜索栏的完善，使用一个"),s("code",[l._v("<form>")]),l._v("标签，添加上"),s("code",[l._v('method=get， action="https:www.baidu.com/s"')]),l._v("，使用"),s("code",[l._v("<a>")]),l._v("标签包裹"),s("code",[l._v("div")]),l._v("实现点击"),s("code",[l._v("div")]),l._v("跳转到其他页面。")]),l._v(" "),s("li",[l._v("手机端测试")])]),l._v(" "),s("ul",[s("li",[l._v("使用ipconfig查看终端")]),l._v(" "),s("li",[l._v("然后用手机输入，加上端口号 ，用手机查看。")])]),l._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[l._v("jQuery")])]),l._v(" "),s("ul",[s("li",[l._v("引入jQuery可以将JQuery下载后引入，或许使用入 jQuery CDN 加速 [BootCDN](https://www.bootcdn.cn/jquery/）是一个更明智的选择。")]),l._v(" "),s("li",[l._v("事件的监听，对点击添加按钮进行事件监听")]),l._v(" "),s("li",[l._v("对用户输入的url的合理性进行判断与优化。")]),l._v(" "),s("li",[l._v("增加节点，完成添加按钮的添加功能")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v('$(\'.addButton\').on("click", fn => {\n    let url = window.prompt(\'请问你要增加的网址是\')\n    if (url.indexOf(\'http\') !== 0) {\n        url = "https://" + url\n    }\n     const $li = $(`<li>\n                    <div class="site">\n                    <div class="logo">${url[0]}</div>\n                    <div class="link">${url)}</div>\n                </div>\n     </li>`).insertBefore($lastLi)\n')])])]),s("ol",{attrs:{start:"7"}},[s("li",[l._v("使用hashMap localStorage")])]),l._v(" "),s("ul",[s("li",[l._v("增加新的网站后，一旦刷新或跳转以后便失效了，为了保存新增加的这些节点，使用一个数组来存储这些数据。")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v(' const hashMap = [\n    { logo: \'A\',logoType:"text" ,url: "https://www.acfun.cn" },\n    { logo: "B", logoType:"image",url: \'https://www.bilibili.com\' }]\n')])])]),s("ul",[s("li",[l._v("遍历这个数组")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v('const render=()=>{ hashMap.forEach(node => {\n   const $li = $(`\n       <li>\n         <a href="${node.url}">\n           <div class="site">\n             <div class="logo">${node.logo[0]}</div>\n             <div class="link">${simplifyUrl(node.url)}</div>\n           </div>\n         </a>\n       </li>\n `).insertBefore($lastLi)})}\n')])])]),s("ul",[s("li",[l._v("当我们对添加按钮这个时间监听就不再是新建一个节点，改为对hashMap进行添加和遍历来实现效果")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("$('.addButton').on(\"click\", fn => {\n   let url = window.prompt('请问你要增加的网址是')\n   if (url.indexOf('http') !== 0) {\n       url = \"https://\" + url\n   }\n   console.log(url)\n\n   hashMap.push({ logo: simplifyUrl(url)[0],logoType:\"text\",url: url })\n   render()\n})\n")])])]),s("p",[l._v("上面代码有一个问题，每次点击添加按钮会将之前已经渲染在页面的，再次渲染，所以必须要解决这个问题，解决的思路就是在遍历hashMap时将之前渲染在页面的节点移除，利用"),s("code",[l._v("remove()")]),l._v("具体代码"),s("code",[l._v("$siteList.find('li:not(.last)').remove()")])]),l._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[l._v("使用localStorage")])]),l._v(" "),s("ul",[s("li",[l._v("当我们要离开和关闭页面以后，为了保存我们增加的节点，我们需要将hashMap这个数组保存下来，需要使用浏览器的localStorage.")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("window.onbeforeunload = () => {//首先对页面的关闭事件监听，\n    console.log('页面要关闭了')//可以开启 Preserve log 查看\n    const string = JSON.stringify(hashMap)//localStorage只保存字符串，将数组转为字符串\n    localStorage.setItem('x', string)//将这个字符串命名，放进localStorage里面。\n}\n")])])]),s("ul",[s("li",[l._v("要调用这个数组")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("const x = localStorage.getItem('x')//将字符串取出来\nconst xObject = JSON.parse(x)//将取出来的字符串变成数组\nconst hashMap = xObject || [\n    { logo: 'A', url: \"https://www.acfun.cn\" },\n    { logo: \"B\", url: 'https://www.bilibili.com' }]\n")])])]),s("ul",[s("li",[s("p",[l._v("localStorage的数据不会轻易丢失，以下情况会丢失")]),l._v(" "),s("p",[l._v("清除 cookie 时 localstorage 就删除了")]),l._v(" "),s("p",[l._v("或存储硬盘满了，也可能会删除 localstorage")]),l._v(" "),s("p",[l._v("或使用无痕窗口")]),l._v(" "),s("h2",{attrs:{id:"项目优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[l._v("#")]),l._v(" 项目优化")]),l._v(" "),s("p",[l._v("一个项目总是有许多不完美的地方，那么就得慢慢去完善和优化这个项目，最好的方法就是订一个小目标然后去实现它，永远记住没有完美，不要出现明显bug就可以了。")]),l._v(" "),s("ol",[s("li",[l._v("将显示在页面的url字母缩短，将"),s("code",[l._v("https://")]),l._v("去掉，测试时输入长网址显示效果不理想，所以一起优化了，代码如下")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("simplifyUrl = (url) => {\n return url.replace('https://', '')\n     .replace('http://', '')\n     .replace('www.', '')\n     .replace('/\\/.*', '')//长网址时将/后面的也给删掉\n")])])])])]),l._v(" "),s("p",[l._v("}")]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v('然后改一下 `<div class="link">${simplifyUrl(node.url)}</div>`\n2. 处理logo 我们需要出现在页面的logo的字母是正确的，如果全是字母的话，那么就可以去掉原先hashMap里面的logoType\n- 删掉 localstorage里面的储存的内容，将页面跳转时储存的函数禁用，删掉 localstorage里面的数据，刷新页面就可以。\n- 调用`simplifyUrl(url)[0]`\n- 小写改成大写 ,可以用css控制，当然也可以直接在js里面控制`simplifyUrl(url)[0].toUpperCase()`,也可以是`.logo{ text-transform: uppercase;}`\n  3. 删除功能 我们需要新增，当然有时也需要有删除功能\n  - 做一个删除按钮图样，图标同样可以使用iconfont矢量图标库的，引入方法如上，\n  -```\n   const $li = $(`<li>\n       \n                     <div class="site">\n                    <div class="logo">${node.logo}</div>\n                    <div class="link">${simplifyUrl(node.url)}</div>\n                    <div class="close">\n                    <svg class="icon">\n                    <use xlink:href="#icon-remove"></use>\n                </svg>\n                </div>\n                </div>\n            \n        </li>`).insertBefore($lastLi)\n')])])]),s("ul",[s("li",[l._v("位置就利用css定位相关知识调就可以")]),l._v(" "),s("li",[l._v("但是此时点击这个关闭小按钮，页面也会跳转，至于原因就是根据DOM事件模型中冒泡原理，尝试阻止冒泡(即下面代码),结果并不理想，只好尝试将a标签换掉，换个方法跳转页面")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("$li.on('click','.close',(e)=>{\n  console.log('阻止冒泡')\n  e.stopPropagation()\n})\n")])])]),s("ul",[s("li",[l._v("使用js对"),s("code",[l._v("li")]),l._v("标签做事件委托和监听")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v('$li.on("click", () => {\n            window.open(node.url)\n        })\n        $li.on("click", \'.close\', (e) => {\n\n            e.stopPropagation()\n                      render()\n        })\n')])])]),s("ul",[s("li",[l._v("在hashMap中扎到相应的节点，并删掉，那么我们需要知道index,所以在hashMapforEach时 ，我们应该添个index")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v('const render=()=>{ hashMap.forEach((node,index) => {\n   const $li = $(`\n       <li>\n         <a href="${node.url}">\n           <div class="site">\n             <div class="logo">${node.logo[0]}</div>\n             <div class="link">${simplifyUrl(node.url)}</div>\n           </div>\n         </a>\n       </li>\n `).insertBefore($lastLi)\n $li.on("click", () => {\n           window.open(node.url)\n       })\n       $li.on("click", \'.close\', (e) => {\n\n           e.stopPropagation()\n           hashMap.splice(index, 1)\n                     render()\n       })\n       })\n }\n')])])]),s("ol",{attrs:{start:"4"}},[s("li",[l._v("PC端网页样式优化，前面所做一切都是关于移动端的一些设置，i")])]),l._v(" "),s("ul",[s("li",[l._v("使搜索栏的宽度固定，位置居中，使用媒体查询功能")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("@media(min-width:500px){\n   .searchForm{ \n       max-width: 400px;\n       margin-left:auto;\n       margin-right:auto;\n   }\n  \n")])])]),s("ul",[s("li",[l._v("一般PC端的页面宽度都是固定的，推荐使用最大宽度")]),l._v(" "),s("li",[l._v("然后关于平均布局时，关于各个盒子的间距问题需要使用到负margin解决")])]),l._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[l._v("删除按钮的一个优化，当鼠标移动到盒子上时再显示这个删除按钮，利用display属性实现")]),l._v(" "),s("li",[l._v("键盘事件，可以键盘上按下一个按键，如果这个字母和logo的字母的小写一样便自动跳转到对应页面。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);