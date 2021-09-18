import styled from "@emotion/styled"
import {colorsMain, elevations} from "@styles/styles"

import conversationsdata from "../../data/conv-data.json"

function reducer(state: any, action: any) {
  //
}
interface Conversation {
  id: number
  parentId: number | null
  text: string
  type: "food" | "sport"
}
interface ConversationNode extends Conversation {
  id: number
  parentId: number | null
  text: string
  type: "food" | "sport"
  children: ConversationNode[]
}
function makeTreeConversations(
  data: Conversation[],
  parentId: null | number = null,
): Array<ConversationNode> {
  return data
    .filter((node) => node.parentId === parentId)
    .reduce((tree: any, node: Conversation) => {
      return [
        ...tree,
        {...node, children: makeTreeConversations(data, node.id)},
      ]
    }, [])
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 1rem auto;
`

const Conversations = () => {
  const xs = makeTreeConversations(conversationsdata as Conversation[])
  return (
    <Wrapper>
      {xs.map((x, i) => (
        <div key={x.id}>
          <p>message {i + 1}</p>
          <p>{x.type}</p>
          <button>View message</button>
        </div>
      ))}
    </Wrapper>
  )
}

export default Conversations
