# react-collapse
一个基于`react`的菜单树组件。

1. `data`的`json`格式：
``` json
[
    { "name": "一层标题1", "id": 1, "parentId": -1 },
    { "name": "一层标题2", "id": 2, "parentId": -1 },
    { "name": "二层标题1", "id": 11, "parentId": 1 },
    { "name": "三层标题1", "id": 111, "parentId": 11 },
    // ...
]
```

2. 引入 `Menu`，`props`传入一个`data`的对象
``` jsx
import data from 'data.json'

<Menu data={data} />
```

3. 使用方式
``` bash
$ git clone git@github.com:GrasFishs/react-collapse.git
```
``` bash
$ npm i && npm start
```