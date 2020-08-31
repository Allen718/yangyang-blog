## vuex全局数据管理
1. vuex应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。采用CRM学习法来学习这个
2. 在store目录下新建一个叫做index.ts的文件，然后根据vuex官网的代码，复制并运行
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0//相当于这是一个数据
  },
  mutations: {
    increment (state) {
      state.count++//相当于修改数据的方法
    }
  }，
 })
console.log(this.state.count)//读取这个数据
store.commit('increment')//调用这个方法
使用store.mutations.increament()不可以，因为没有设计this这个对象
```
3. 如果我们想要在别的组件对这个数据进行读与修改，应该采用什么办法呢
- 在别的组件里面引用这个store对象，然后在computed属性里面读这个属性，
   ```
    import store from '@/store/index.ts'
    computed: {
      count() {
        return store.count;
      },
   ```
- 在store/index.html有一句`Vue.use(Vuex)`这句话的意思就是把 store 绑到 Vue.prototype.$store = store上，那么我们在组件里面只需要用this.$store就能访问到store对象，并不需要，我们再自己引入了。
  
### 应用
 开始在项目中使用vuex做全局数据管理，开始改代码，首先修改记账页面相关代码，
  ```
    state: {
    recordList: [] as RecordItem[]
      },
   mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
    money.vue中
     computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
      created(){
      this.$store.commit('fetchRecords')
    }
    saveRecord() {
  this.$store.commit('createRecord', this.record)
    }
   ```
### tags.vue组件里面使用vuex
```
 computed: {
         tagList() {
        return this.$store.state.tagList;
      }
    }
      created() {
      this.$store.commit('fetchTags');
    }
     create() {
      const name = window.prompt('请输入标签名');
      if (!name) { return window.alert('标签名不能为空'); }
       this.$store.commit('createTag', name);
    }
    在store/index.ts将tagList的一系列操作写进来
     state: {
    tagList: [] as Tag[],
  },
   mutations: {
     fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags');
      window.alert('添加成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  }
 ```
 ### label.vue组件使用vuex
  由于label.vue和tags.vue都会用到创建标签这个函数，可以考虑使用vue中的mixin,具体操作方法如下，新建一个mixin目录，然后命名一个叫做tagHelper.ts文件
 ```
   import Vue from 'vue';
    import Component from 'vue-class-component';
    @Component
   export class TagHelper extends Vue {
    createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) { return window.alert('标签名不能为空'); }
    this.$store.commit('createTag', name);
  }
  }
        export default TagHelper;
     在src/label.vue中
   import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper'
  export default class Labels extends mixins(TagHelper) {
   //直接就可以使用了createTag函数了
   }
 ```
### EditLabel.vue 使用 Vuex,
首先我们需要找到那个正在被我们编辑的标签的信息，首先在全局数据管理index.ts中定义并声明一下`currentTag: undefined as Tag`,vuex中的 mutations中的函数不能设置返回值，这是无效的，
```
 setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    在组件EditLabel.vue,使用computed:{tag(){
    return{
      this.$store.state.currentTag;
    }}}
   失败，所以想要拿到currentTag,通过以一系列查资料，想要拿到这个currentTag进行一系列操作的话，只能通过get tag(){
   return{
      this.$store.state.currentTag;
    }
   }
   需要将所有用到computed的地方全都改成get.money.vue,Tags.vue,Label.vue
   用到了，需要修改一下。
```
 继续修改EditLabel.vue组件，在index.ts里面将updataTag，removeTag方法放进去，
```
  updateTag(state, payload: { id: string, name: string }//代表类型) {//函数只能接受两个参数，state是固定的，所以假如多个参数，就需要合并
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
     removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();//由于没有this,就不可以使用this.$router,自己引入一下router
      } else {
        window.alert('删除失败');
      }

    },
   
```
 ### 修复刷新页面就变成404的bug,
  主要是因为在`this.$store.commit('setCurrentTag', id);`默认已经取到TagList，但实际有可能还没有拿到TagList,所有需要先`this.$store.commit('fetchTags');`,然后就不会出现刷新页面出现404报错了。
  1. 使用vuex就是数据放进这个叫state对象里面，对数据的操作可以放进mutation里面，然后关于里面的函数不要使用返回值，拿不到的，接受的参数也是有限制的，一个叫state,即上面的数据，然后第二个通常叫做payload.在其他组件里面想要使用读取这个数据与对这个数据操作的方法，使用的是，读采用computed:{},如果报错就使用get(){},r对数据的操作方法的使用采用this.$store.commit('xxx',payload)。
      
 
