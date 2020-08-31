(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{366:function(n,t,e){"use strict";e.r(t);var o=e(42),r=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"react-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-router"}},[n._v("#")]),n._v(" React Router")]),n._v(" "),e("ol",[e("li",[n._v("安装路由"),e("code",[n._v("npm install react-router-dom,npm install @types/react-router-dom")]),n._v(",直接上官网看例子抄代码来学习。在App.tsx文件中，将官网例子copy下来，然后修改")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import React from "react";\nimport {\n HashRouter as Router,\n  Switch,\n  Route,\n  Redirect,\n} from "react-router-dom";\nexport default function App() {\n  return (\n    <Router>\n      <div>\n        <nav>\n          <ul>\n            <li>\n              <Link to="/">Home</Link>\n            </li>\n            <li>\n              <Link to="/about">About</Link>\n            </li>\n            <li>\n              <Link to="/users">Users</Link>\n            </li>\n          </ul>\n        </nav>\n         <Switch>\n          <Route path="/about">\n            <About />\n          </Route>\n          <Route path="/users">\n            <Users />\n          </Route>\n          <Route path="/">\n            <Home />\n          </Route>\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n\nfunction Home() {\n  return <h2>Home</h2>;\n}\n\nfunction About() {\n  return <h2>About</h2>;\n}\n\nfunction Users() {\n  return <h2>Users</h2>;\n}\n')])])]),e("p",[n._v("首先将抄下来的代码运行，然后看看页面出现了什么效果，大概就会明白，这其中的代码的意思,大概就是上面li标签里面就是跳转页面的导航，而下面switch里面对应的应该就是路径和相应的组件。")]),n._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[n._v("开始修改，根据设计稿主页面，一个记账页面，一个标签页面，和一个统计页面，然后再来一个404页面，并将默认进入页面设置为记账页面，开始在上面代码上来做修改，")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  height: 100vh;\n  display:flex;\n  flex-direction: column;\n`;\nconst Main = styled.div`\n  flex-grow: 1;\n  overflow: auto;\n`;\nconst Nav = styled.nav`\n  border: 1px solid blue;\n  > ul {\n    display:flex;\n    > li{\n      width: 33.3333%;\n      text-align:center;\n      padding: 16px;\n    }\n  }\n`;\n\nfunction App() {\n  return (\n    <Router>\n      <Wrapper>\n        <Main>\n          <Switch>\n            <Route path="/tags">\n              <Tags/>\n            </Route>\n            <Route path="/money">\n              <Money/>\n            </Route>\n            <Route path="/statistics">\n              <Statistics/>\n            </Route>\n            <Redirect exact from="/" to="/money"/>\n            <Route path="*">\n              <NoMatch/>\n            </Route>\n          </Switch>\n        </Main>\n        <Nav>\n          <ul>\n            <li>\n              <Link to="/tags">标签页</Link>\n            </li>\n            <li>\n              <Link to="/money">记账页</Link>\n            </li>\n            <li>\n              <Link to="/statistics">统计页</Link>\n            </li>\n          </ul>\n        </Nav>\n      </Wrapper>\n    </Router>\n  );\n}\n\nfunction NoMatch() {\n  return (\n    <div>页面不存在，你丫输错地址了吧！</div>\n  );\n}\n\nfunction Statistics() {\n  return <h2>统计页面</h2>;\n}\n\nfunction Tags() {\n  return <h2>标签页面</h2>;\n}\n\nfunction Money() {\n  return <h2>记账页面</h2>;\n}\n\n')])])]),e("p",[n._v("上面这种布局是存在问题的，所有的页面都会出现导航栏，就连404页面都会出现导航栏，这不是我们希望的，应该将导航栏单独做成组件，然后再具体的页面引入。")]),n._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[n._v("新建一个叫做Nav.tsx文件来写导航栏的内容")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import styled from 'styled-components';\nimport {Link} from 'react-router-dom';\nimport React from 'react';\nconst NavWrapper = styled.nav`\n  line-height: 24px;\n  box-shadow: 0 0 3px rgba(0,0,0,0.25);\n  > ul {\n    display:flex;\n    > li{\n      width: 33.3333%;\n      text-align:center;\n      padding: 16px;\n    }\n  }\n`;\n")])])]),e("p",[n._v("router 有两种模式History和hash,没有后台服务器就别用History,使用Hash模式。")])])}),[],!1,null,null,null);t.default=r.exports}}]);