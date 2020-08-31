## React虚拟dom
### 虚拟DOM
 虚拟DOM就是使用javascript对象来展示真实的dom,他与将来要渲染到页面的DOM一一对应，虚拟DOM只保留了真实DOM节点的一些基本属性（type props），和节点之间的层次关系(children)，它相当于建立在javascript和DOM之间的一层“缓存”DOM。在React中babel-loader会使用react.createElement把jsx文件变成一个包含属性孩子的数据对象，就是一个虚拟DOM.然后通过render的方法将虚拟dom渲染成真的DOM,放入页面，当我们使用setState就会执行render，执行DOMdiff 给旧的DOM打上补丁。
### diff算法
React需要同时维护两棵虚拟DOM树：一棵表示当前的DOM结构，另一棵在React状态变更将要重新渲染时生成。React通过比较这两棵树的差异，决定是否需要修改DOM结构，以及如何修改。这种算法称作Diff算法。
#### 具体过程
会对新旧两棵树做深度优先遍历，避免对两棵树做完全比较，因此算法复杂度可以达到O(n)。然后给每个节点生成一个唯一的标志：在遍历的过程中，每遍历到一个节点，就将新旧两棵树作比较，并且只对同一级别的元素进行比较。
1. 不同类型的元素举个例子，当一个元素从`<a>'变成'<img>'，从'<p>变成<h2>'，或从 '<Button>变成<div>`，都会触发一个完整的重建流程：该节点以及该节点的子节点，都会被销毁，之后创建新的节点。即 removeChild() -> appendChild() 或者 setInnerHTML()。
2. 当比对两个相同类型的元素时，React 会保留当前 DOM节点和子节点，仅比对及更新有改变的属性。
通过比对这两个元素，React 知道只需要修改 DOM 元素上的 className 属性。即 removeAttribute() -> setAttribute() 或者 setAttribute()。对于style标签会做特殊处理，进一步比较style标签里面具体的
例子
```
<div className="before" title="stuff" />
<div className="after" title="stuff" />
```
3.  文本节点的话react会修改 nodeValue/textContent.
4.  移动、删除、新增子节点
在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。在子元素列表末尾新增元素时,
5.  React 支持 key 属性。当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。以下例子在新增 key 之后使得之前的低效转换变得高效：
```
<ul>
  <li key="1">你好</li>
  <li key="2">你好吗</li>
</ul>

<ul>
  <li key="1">你好吗</li>
  <li key="3">你好</li>
  <li key="2">很好</li>
</ul>
```
Diff算法通过比较得知，key为'3'的元素是新增的，key为'1'和'2'的元素仅仅是移动了位置，所以可以调用insertBefore()来插入节点。
#### 生成key的注意点
- key在列表中应当具有唯一性，但不需要全局唯一。
- key应当具有稳定性，一个节点在确定key之后就不应当变更key（除非你希望它重新渲染）。不稳定的 key（比如在 render() 中通过 Math.random() 生成的 ）会导致许多组件实例和 DOM 节点被不必要地重新创建，这可能导致性能下降和子组件中的状态丢失。

