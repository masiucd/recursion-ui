import React from "react"

interface Item {
  title: string
  children: Item[]
}

const items: Array<Item> = [
  {
    title: "src",
    children: [
      {
        title: "js",
        children: [
          {
            title: "helpers",
            children: [],
          },
          {
            title: "math",
            children: [],
          },
        ],
      },
      {
        title: "lib",
        children: [{title: "DB", children: []}],
      },
      {
        title: "styles",
        children: [
          {
            title: "fonts",
            children: [],
          },
        ],
      },
    ],
  },
]

interface Props {
  items: Item[]

  depth: number
}
const Tree = ({items, depth}: Props) => {
  if (!items || !items.length) {
    return null
  }
  return (
    <>
      {items.map((item) => (
        <div key={item.title}>
          <div style={{marginLeft: depth * 15}}>
            <p>{item.title}</p>
          </div>
          <Tree items={item.children} depth={depth + 1} />
        </div>
      ))}
    </>
  )
}

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Tree items={items} depth={0} />
    </div>
  )
}

export default App
