

1. 知识点 - map方法, index

    取到data.js的数组了，怎么使用的问题

    dataArray.map(传参)
            除了map还有forEach, flatMap 等等一些函数操作

    传参就是传 const (item, index) => {要做什么} 的函数

2. React 的组件状态/state

    2.1 claim 
    import { useState } from 'react'
    const [albumIndex, updateAlbumIndex] = React.useState(0);

    2.2 call
    const {updateAlbumIndex} = props;
    props.updateAlbumIndex

    2.3 pass data/func to component
        `throught <Label attr={`anything you want to pass`} />`


