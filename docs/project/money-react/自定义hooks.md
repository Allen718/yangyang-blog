## 自定义hooks管理数据
1. 首先将标签列表tagList抽离出来，由于标签页面也会使用到这个标签的数据。src目录下新建一个叫做useTags.tsx文件.
```
import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {tags, setTags};
};

export {useTags};
TagsSection.tsx文件引用
import {useTags} from 'useTags';
 const {tags, setTags} = useTags();
 ```
 2.  封装findTag到自定义useTag里面，既然tags具有id了，修改一下先前路径使用tag来作为这个跳转的路径`<Route exact path="/tags/:id">`,然后link那边也修改一下`<Link to={'/tags/' + tag.id}>`
  `<span className="oneLine">{tag.id}:{tag.name}</span>`
  ```
  import {useState} from 'react';
 import {createId} from 'lib/createId';
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
  const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  return {tags, setTags, findTag};
};
  然后EditeTag.tsx
 import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
type Params = {
  id: string
}
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams();
  const tag = findTag(parseInt(id));
  return (
    };
```