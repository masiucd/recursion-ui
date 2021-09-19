import styled from "@emotion/styled"
import {Fragment, useMemo, useReducer} from "react"

import conversationsdata from "../../data/conv-data.json"
import {columnsData} from "./common"
import MessageDialog from "./message.dialog"
import {reducer} from "./reducer"
import Table from "./table"
import {Conversation, ConversationNode} from "./types"

function makeTreeConversations(
  data: Conversation[],
  parentId: null | number = null,
): Array<ConversationNode> {
  return data
    .filter((node) => node.parentId === parentId)
    .reduce(
      (tree: Array<ConversationNode>, node: Conversation) => [
        ...tree,
        {...node, children: makeTreeConversations(data, node.id)},
      ],
      [],
    )
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  display: flex;
  flex-flow: column wrap;
`

const Conversations = () => {
  const columns = useMemo(() => columnsData, [])

  const data = useMemo(
    () =>
      makeTreeConversations(conversationsdata as Conversation[]).map(
        (item) => ({
          ...item,
          viewMessage: "View message",
        }),
      ),
    [],
  )

  const [{item, isDialogOpen}, dispatch] = useReducer(reducer, {
    item: null,
    isDialogOpen: false,
  })

  return (
    <Fragment>
      <MessageDialog
        isDialogOpen={isDialogOpen}
        item={item}
        closeDialog={() => {
          dispatch({type: "CLOSE_DIALOG"})
        }}
      />
      <Wrapper>
        <Table
          data={data}
          columns={columns}
          openDialog={(item) => {
            dispatch({type: "OPEN_DIALOG", item})
          }}
        />
      </Wrapper>
    </Fragment>
  )
}

export default Conversations
