import {css} from "@emotion/css"
import styled from "@emotion/styled"
import React, {FC, useState} from "react"

import File from "../icons/File"
import FolderClosed from "../icons/FolderClosed"
import FolderOpen from "../icons/FolderOpen"

const buttonStyles = (level: number) => css`
  display: flex;
  margin-left: ${level * 30}px;
  margin-bottom: 12px;
  background: none;
  min-width: 12rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  outline: none;
  border: 2px solid #0b51d3;
  padding: 0.2rem;
  border-radius: 5px;
  box-shadow: 1px 2px #ccc;
`

const Icon = styled.span`
  margin-left: 0.4rem;
`
const Text = styled.span`
  font-size: 1.2rem;
`
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
  const icon = item.hasChildren ? isOn ? <FolderOpen /> : <FolderClosed /> : <File />
  return (
    <section>
      <button onClick={() => setIsOn((p) => !p)} className={buttonStyles(level)}>
        <Text>{item.text}</Text>
        <Icon>{icon}</Icon>
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
  if (!items || !items.length) return null
  return items.map((item) => (
    <div key={item.id}>
      <Wrapper level={level} item={item}>
        <Tree treeData={treeData} parentId={item.id} level={level + 1} />
      </Wrapper>
    </div>
  ))
}

export default Tree
