export interface Conversion {
  id: number
  title: string
  parentId: null | number
  type: string
  text: string
}
const conversationsList: Array<Conversion> = [
  {
    id: 1,
    title: "I. need help",
    parentId: null,
    type: "customer",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi corporis placeat odio autem sapiente iste tempore magni neque, deserunt nam quae, a nulla voluptates mollitia pariatur similique ad delectus quod?",
  },
  {
    id: 2,
    title: "Let me help you",
    parentId: 1,
    type: "service",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi corporis placeat odio autem sapiente iste tempore magni neque, deserunt nam quae, a nulla voluptates mollitia pariatur similique ad delectus quod?",
  },
  {
    id: 3,
    title: "Explaining",
    parentId: 2,
    type: "customer",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi corporis placeat odio autem sapiente iste tempore magni neque, deserunt nam quae, a nulla voluptates mollitia pariatur similique ad delectus quod?",
  },
  {
    id: 4,
    title: "Final answer",
    parentId: 3,
    type: "service",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi corporis placeat odio autem sapiente iste tempore magni neque, deserunt nam quae, a nulla voluptates mollitia pariatur similique ad delectus quod?",
  },
]

export const makeTreeDataStructure = (
  list: Array<Conversion>,
  parentId: null | number = null,
): Array<Conversion> => {
  const items = list.filter((node) => node.parentId === parentId)
  const result = []
  for (const node of items) {
    result.push({...node, children: makeTreeDataStructure(list, node.id)})
  }
  return result
}

// with reduce
export const makeTreeDataStructureFp = (
  list: Array<Conversion>,
  parentId: null | number = null,
): Array<Conversion> => {
  return list
    .filter((node) => node.parentId === parentId)
    .reduce(
      (tree: Array<Conversion>, node: Conversion) => [
        ...tree,
        {...node, children: makeTreeDataStructure(list, node.id)},
      ],
      [],
    )
}

export const tree = makeTreeDataStructureFp(conversationsList)
