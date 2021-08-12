import {css} from "@emotion/css"
import React, {FC, useState} from "react"

import File from "./components/icons/File"
import Folder from "./components/icons/Folder"
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
  const [isOn, setIsOn] = useState(false)
  const icon = item.hasChildren ? isOn ? <Folder /> : <Folder /> : <File />
  return (
    <section>
      <button
        onClick={() => setIsOn((p) => !p)}
        className={css`
          display: flex;
          margin-left: ${level * 20}px;
          margin-bottom: 8px;
          background: none;
          min-width: 5rem;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        `}>
        <span
          className={css`
            font-size: 0.8rem;
          `}>
          {item.text}
        </span>
        {icon}
      </button>
      {isOn && <div>{children}</div>}
    </section>
  )
}

interface TreeProps {
  treeData: Item[]
  parentId?: number
  level?: number
}
const Tree: FC<TreeProps> = ({treeData, parentId = 0, level = 0}) => {
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
