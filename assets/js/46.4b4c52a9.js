(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{358:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vuex全局数据管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex全局数据管理"}},[t._v("#")]),t._v(" vuex全局数据管理")]),t._v(" "),a("ol",[a("li",[t._v("vuex应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。采用CRM学习法来学习这个")]),t._v(" "),a("li",[t._v("在store目录下新建一个叫做index.ts的文件，然后根据vuex官网的代码，复制并运行")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport Vuex from 'vuex'\nVue.use(Vuex)\nconst store = new Vuex.Store({\n  state: {\n    count: 0//相当于这是一个数据\n  },\n  mutations: {\n    increment (state) {\n      state.count++//相当于修改数据的方法\n    }\n  }，\n })\nconsole.log(this.state.count)//读取这个数据\nstore.commit('increment')//调用这个方法\n使用store.mutations.increament()不可以，因为没有设计this这个对象\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("如果我们想要在别的组件对这个数据进行读与修改，应该采用什么办法呢")])]),t._v(" "),a("ul",[a("li",[t._v("在别的组件里面引用这个store对象，然后在computed属性里面读这个属性，"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" import store from '@/store/index.ts'\n computed: {\n   count() {\n     return store.count;\n   },\n")])])])]),t._v(" "),a("li",[t._v("在store/index.html有一句"),a("code",[t._v("Vue.use(Vuex)")]),t._v("这句话的意思就是把 store 绑到 Vue.prototype.$store = store上，那么我们在组件里面只需要用this.$store就能访问到store对象，并不需要，我们再自己引入了。")])]),t._v(" "),a("h3",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("p",[t._v("开始在项目中使用vuex做全局数据管理，开始改代码，首先修改记账页面相关代码，")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  state: {\n  recordList: [] as RecordItem[]\n    },\n mutations: {\n  fetchRecords(state) {\n    state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];\n  },\n  createRecord(state, record) {\n    const record2: RecordItem = clone(record);\n    record2.createdAt = new Date();\n    state.recordList.push(record2);\n    store.commit('saveRecords')\n  },\n  saveRecords(state) {\n    window.localStorage.setItem('recordList',\n      JSON.stringify(state.recordList));\n  },\n  money.vue中\n   computed: {\n    recordList() {\n      return this.$store.state.recordList;\n    }\n  }\n    created(){\n    this.$store.commit('fetchRecords')\n  }\n  saveRecord() {\nthis.$store.commit('createRecord', this.record)\n  }\n")])])]),a("h3",{attrs:{id:"tags-vue组件里面使用vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags-vue组件里面使用vuex"}},[t._v("#")]),t._v(" tags.vue组件里面使用vuex")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" computed: {\n         tagList() {\n        return this.$store.state.tagList;\n      }\n    }\n      created() {\n      this.$store.commit('fetchTags');\n    }\n     create() {\n      const name = window.prompt('请输入标签名');\n      if (!name) { return window.alert('标签名不能为空'); }\n       this.$store.commit('createTag', name);\n    }\n    在store/index.ts将tagList的一系列操作写进来\n     state: {\n    tagList: [] as Tag[],\n  },\n   mutations: {\n     fetchTags(state) {\n      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');\n    },\n    createTag(state, name: string) {\n      const names = state.tagList.map(item => item.name);\n      if (names.indexOf(name) >= 0) {\n        window.alert('标签名重复了');\n        return 'duplicated';\n      }\n      const id = createId().toString();\n      state.tagList.push({id, name: name});\n      store.commit('saveTags');\n      window.alert('添加成功');\n      return 'success';\n    },\n    saveTags(state) {\n      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));\n    }\n  }\n")])])]),a("h3",{attrs:{id:"label-vue组件使用vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label-vue组件使用vuex"}},[t._v("#")]),t._v(" label.vue组件使用vuex")]),t._v(" "),a("p",[t._v("由于label.vue和tags.vue都会用到创建标签这个函数，可以考虑使用vue中的mixin,具体操作方法如下，新建一个mixin目录，然后命名一个叫做tagHelper.ts文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  import Vue from 'vue';\n   import Component from 'vue-class-component';\n   @Component\n  export class TagHelper extends Vue {\n   createTag() {\n   const name = window.prompt('请输入标签名');\n   if (!name) { return window.alert('标签名不能为空'); }\n   this.$store.commit('createTag', name);\n }\n }\n       export default TagHelper;\n    在src/label.vue中\n  import {mixins} from 'vue-class-component';\n import TagHelper from '@/mixins/TagHelper'\n export default class Labels extends mixins(TagHelper) {\n  //直接就可以使用了createTag函数了\n  }\n")])])]),a("h3",{attrs:{id:"editlabel-vue-使用-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editlabel-vue-使用-vuex"}},[t._v("#")]),t._v(" EditLabel.vue 使用 Vuex,")]),t._v(" "),a("p",[t._v("首先我们需要找到那个正在被我们编辑的标签的信息，首先在全局数据管理index.ts中定义并声明一下"),a("code",[t._v("currentTag: undefined as Tag")]),t._v(",vuex中的 mutations中的函数不能设置返回值，这是无效的，")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" setCurrentTag(state, id: string) {\n      state.currentTag = state.tagList.filter(t => t.id === id)[0];\n    },\n    在组件EditLabel.vue,使用computed:{tag(){\n    return{\n      this.$store.state.currentTag;\n    }}}\n   失败，所以想要拿到currentTag,通过以一系列查资料，想要拿到这个currentTag进行一系列操作的话，只能通过get tag(){\n   return{\n      this.$store.state.currentTag;\n    }\n   }\n   需要将所有用到computed的地方全都改成get.money.vue,Tags.vue,Label.vue\n   用到了，需要修改一下。\n")])])]),a("p",[t._v("继续修改EditLabel.vue组件，在index.ts里面将updataTag，removeTag方法放进去，")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  updateTag(state, payload: { id: string, name: string }//代表类型) {//函数只能接受两个参数，state是固定的，所以假如多个参数，就需要合并\n      const {id, name} = payload;\n      const idList = state.tagList.map(item => item.id);\n      if (idList.indexOf(id) >= 0) {\n        const names = state.tagList.map(item => item.name);\n        if (names.indexOf(name) >= 0) {\n          window.alert('标签名重复了');\n        } else {\n          const tag = state.tagList.filter(item => item.id === id)[0];\n          tag.name = name;\n          store.commit('saveTags');\n        }\n      }\n    },\n     removeTag(state, id: string) {\n      let index = -1;\n      for (let i = 0; i < state.tagList.length; i++) {\n        if (state.tagList[i].id === id) {\n          index = i;\n          break;\n        }\n      }\n      if (index >= 0) {\n        state.tagList.splice(index, 1);\n        store.commit('saveTags');\n        router.back();//由于没有this,就不可以使用this.$router,自己引入一下router\n      } else {\n        window.alert('删除失败');\n      }\n\n    },\n   \n")])])]),a("h3",{attrs:{id:"修复刷新页面就变成404的bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复刷新页面就变成404的bug"}},[t._v("#")]),t._v(" 修复刷新页面就变成404的bug,")]),t._v(" "),a("p",[t._v("主要是因为在"),a("code",[t._v("this.$store.commit('setCurrentTag', id);")]),t._v("默认已经取到TagList，但实际有可能还没有拿到TagList,所有需要先"),a("code",[t._v("this.$store.commit('fetchTags');")]),t._v(",然后就不会出现刷新页面出现404报错了。")]),t._v(" "),a("ol",[a("li",[t._v("使用vuex就是数据放进这个叫state对象里面，对数据的操作可以放进mutation里面，然后关于里面的函数不要使用返回值，拿不到的，接受的参数也是有限制的，一个叫state,即上面的数据，然后第二个通常叫做payload.在其他组件里面想要使用读取这个数据与对这个数据操作的方法，使用的是，读采用computed:{},如果报错就使用get(){},r对数据的操作方法的使用采用this.$store.commit('xxx',payload)。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);