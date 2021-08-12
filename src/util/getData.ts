import data from "../data/tree-data.json"

export const getTreeData = () => {
  return data.map((x) => ({
    ...x,
    hasChildren: data.filter((item) => item.parentId === x.id).length > 0,
  }))
}
