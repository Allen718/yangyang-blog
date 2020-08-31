(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{372:function(n,t,e){"use strict";e.r(t);var a=e(42),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"标签编辑页面的制作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签编辑页面的制作"}},[n._v("#")]),n._v(" 标签编辑页面的制作")]),n._v(" "),e("p",[n._v("1.首先根据设计出图实现标签编辑页面的ui，大概分为三部分,一个顶部的导航栏，一个标签列表，然后一个删除按钮，顶部导航栏是一个图标，一个文字，使用flex布局，左边一个icon,然后中间文字，为了布局，在右边添加一个icon占位但是并不要出现一个icon图片。为了实现这个功能需要对引入icon的组件做一下修改")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("type Props = {\n   name?: string\n}\nconst Icon = (props: Props) => {\n  return (\n    <svg className=\"icon\">\n      {props.name && <use xlinkHref={'#' + props.name}/>}\n    </svg>\n  );\n};\n")])])]),e("p",[n._v("由于button按钮不仅在这个组件里使用，在标签页面也会使用到button组件，一个应用里面所有的按钮应该是同一规格，所以将button做成一个单独的组件，供使用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import styled from 'styled-components';\nconst Button = styled.button`\n  font-size: 18px; border: none; padding: 8px 12px;\n  background: #f60; border-radius: 4px;\n  color: white;\n`;\nexport {Button}\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("创建单独的Input组件，由于input组件也是会多次用到，所以将input组件封装一下，避免重复。优化代码")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import React from 'react';\nimport styled from 'styled-components';\nconst Label = styled.label`\n    display:flex;\n    align-items: center;\n    > span { margin-right: 16px; white-space: nowrap; }\n    > input {\n      display:block;\n      width: 100%;\n      height: 72px;\n      background: none;\n      border: none;\n    }\n`;\ntype Props = {\n  label: string;\n} & React.InputHTMLAttributes<HTMLInputElement>;//声明类型，新知识，多看\nconst Input: React.FC<Props> = (props) => {\n  const {label, children, ...rest} = props;\n  return (\n    <Label>\n      <span>{props.label}</span>\n      <input {...rest} />\n    </Label>\n  );\n};\n\nexport {Input};\n使用例子\n <Input label=\"备注\" type=\"text\" value={note} onChange={onChange}/>\n")])])]),e("p",[n._v("引入这些组件在EditTag里面以后，然后整合，书写css样式，完成标签编辑页面的UI.")]),n._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[n._v("完成标签编辑页面的修改标签的功能，修改标签这个功能应该放在useTag里面，然后导出使用")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(' const findTagIndex = (id: number) => {\n   let result = -1;\n   for (let i = 0; i < tags.length; i++) {\n     if (tags[i].id === id) {\n       result = i;\n       break;\n     }\n   }\n   return result;\n };\n const updateTag = (id: number, obj: { name: string }) => {\n     const index = findTagIndex(id);\n   // 深拷贝 tags 得到 tagsClone\n   const tagsClone = JSON.parse(JSON.stringify(tags));\n   // 把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}\n   tagsClone.splice(index, 1, {id: id, name: obj.name});\n   setTags(tagsClone);\n };\n return {tags, setTags, findTag, updateTag, findTagIndex};\n};\n在EditeTag.tsx引用\nconst {findTag, updateTag} = useTags();\n let {id: idString} = useParams<Params>();\n const tag = findTag(parseInt(idString));\n    <Input label="标签名" type="text" placeholder="标签名"\n              value={tag.name}\n              onChange={(e) => {\n                updateTag(tag.id, {name: e.target.value});\n              }}\n       />\n')])])]),e("ol",{attrs:{start:"4"}},[e("li",[n._v("完成标签编辑页面的删除功能，思路基本和标签修改的思路差不多")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" const deleteTag = (id: number) => {\n // 获取你要删的 tag 的下标\n const index = findTagIndex(id);\n // 深拷贝 tags 得到 tagsClone\n const tagsClone = JSON.parse(JSON.stringify(tags));\n // 把 tagsClone 的第 index 删掉\n tagsClone.splice(index, 1);\n setTags(tagsClone);\n};\nreturn {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};\n};\n")])])]),e("p",[n._v("应用\n<Button onClick={() => {\ndeleteTag(tag.id);\n}}>删除标签"),n._v("\n删除了标签这个页面就不存在了，就会出现404，处理一下这个\nconst content=()=>{\nreturn(")]),e("div",[n._v("\n<Input label='标签名'\ntype=\"text\"\nvalue={tag.name}\nonChange={(e)=>{\nupdateTag(tag.id,{name:e.target.value})\n}}/>\n"),e("Center",[n._v("\n<Button onClick={()=>{\ndeleteTag(tag.id)\n}}>删除标签")])],1),n._v(")}"),e("p"),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("   {tag?content():<Center><div> 标签名不存在</div></Center>}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" 5. 支持回退，期望当点击向左的icon图标的时候页面回退，首先icon图标不支持点击，其次回退功能要实现使用那个api\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("Icon.tsx文件\ntype Props = {\n name?: string\n    }\n")])])]),e("p",[n._v("} & React.SVGAttributes"),e("SVGElement",[n._v("\nconst Icon = (props: Props) => {\nconst {name, children, className, ...rest} = props//如果不把className单独提出来，那么\n如果外部传了一个className，\n就会把原本的的className覆盖，如果既不想内部的className被覆盖又想要外部的className\n使用外部工具'npm install classnames,npm install @types/classnames'\nimport cs from 'classnames';\nreturn (\n"),e("svg",{attrs:{className:"icon"}},[n._v("\n<svg className={cs('icon', className)} {...rest}>\n{props.name && <use xlinkHref={'#' + props.name}/>}\n")]),n._v("\n);")])],1),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("然后关于回退，可以使用原生的`window.histoty.back()`,使用history路由的时候，进行回退是不刷新页面的，可以通过network查看，因为页面刷新就意味着新的请求，也可以在入口文件打log的方法验证。本应用是react项目，回退也使用react提供的回退api来实现回退。\n")])])]),e("p",[n._v("import {useParams, useHistory} from 'react-router-dom';\nconst history = useHistory()\nconst onClickBack = ()=>{\nhistory.goBack()\n}")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  \n\n\n  \n      \n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);