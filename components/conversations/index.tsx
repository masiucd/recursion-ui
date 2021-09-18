import styled from "@emotion/styled"
import {colorsMain, elevations} from "@styles/styles"
import React, {Fragment, useReducer} from "react"

import conversationsdata from "../../data/conv-data.json"
import MessageDialog from "./message.dialog"
import {reducer} from "./reducer"
import {Conversation, ConversationNode} from "./types"

function makeTreeConversations(
  data: Conversation[],
  parentId: null | number = null,
): Array<ConversationNode> {
  return data
    .filter((node) => node.parentId === parentId)
    .reduce((tree: Array<ConversationNode>, node: Conversation) => {
      return [
        ...tree,
        {...node, children: makeTreeConversations(data, node.id)},
      ]
    }, [])
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  display: flex;
  flex-flow: column wrap;
`

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`

const Conversations = () => {
  const xs = makeTreeConversations(conversationsdata as Conversation[])
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
        {xs.map((item, i) => (
          <Box key={item.id}>
            <p>
              message: <span>{i + 1}</span>
            </p>
            <p>
              {" "}
              subject: <span>{item.type}</span>
            </p>

            <button
              onClick={() => {
                dispatch({type: "OPEN_DIALOG", item})
              }}
            >
              View message
            </button>
          </Box>
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default Conversations
