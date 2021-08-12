import {css} from "@emotion/css"
import React, {FC, useState} from "react"

import data from "./data/tree-data.json"

const getTreeData = () => {
  return data.map((x) => ({
    ...x,
    hasChildren: data.filter((item) => item.parentId === x.id).length > 0,
  }))
}

interface Item {
  id: number
  text: string
  parentId: number
  hasChildren: boolean
}

interface WrapperProps {
  item: Item
  level: number
}
const Wrapper: FC<WrapperProps> = ({item, level, children}) => {
  const [on, setOn] = useState(false)

  return (
    <div
      className={css`
        background: none;
        border: none;
        margin-left: ${level * 25}px;
      `}>
      <p>{item.text}</p>
      {children}
    </div>
  )
}

interface TreeProps {
  treeData: Item[]
  parentId?: number
  level?: number
}
const Tree = ({treeData, parentId = 0, level = 0}: TreeProps) => {
  const items = treeData
    .filter((item) => item.parentId === parentId)
    .sort((a, b) => (a.text > b.text ? 1 : -1))
  if (!items.length) return null
  return items.map((item) => (
    <div key={item.id}>
      <Wrapper level={level} item={item}>
        <Tree treeData={treeData} parentId={item.id} level={level + 1} />
      </Wrapper>
    </div>
  ))
}

const App = () => {
  return (
    <div>
      <Tree treeData={getTreeData()} />
    </div>
  )
}

export default App
