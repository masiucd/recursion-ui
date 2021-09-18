export interface Item {
  id: number
  parentId: number | null
  text: string
}
export interface Node extends Item {
  hasChildren: boolean
  children: Item[]
}
