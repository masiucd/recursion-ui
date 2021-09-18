import styled from "@emotion/styled"
import {FC} from "react"

import data from "../../data/folder-data.json"
import Row from "./row"
import {Item, Node} from "./types"

const formatData = (data: Array<Item>) => {
  return data.map((item: Item) => ({
    ...item,
    hasChildren: data.filter((node) => node.parentId === item.id).length > 0,
    children: data.filter((node) => node.parentId === item.id),
  }))
}

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 1rem auto;
  min-height: 50vh;
`
const foldersData = formatData(data) as Array<Node>
const FolderStructure = () => {
  return (
    <Wrapper>
      <Tree treeData={foldersData} />
    </Wrapper>
  )
}

interface TreeProps {
  treeData: Array<Node>
  parentId?: number | null
  level?: number
}

const Tree: FC<TreeProps> = ({
  treeData,
  parentId = null,
  level = 0,
}): JSX.Element[] | any => {
  const nodes = treeData.filter((node) => node.parentId === parentId)
  return nodes.map((node) => (
    <Row key={node.id} node={node} level={level}>
      <Tree treeData={treeData} parentId={node.id} level={level + 1} />
    </Row>
  ))
}

export default FolderStructure
