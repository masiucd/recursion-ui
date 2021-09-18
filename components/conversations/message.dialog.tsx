import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {bgNuisances, colorsMain, elevations} from "@styles/styles"
import {FC, Fragment, useEffect, useState} from "react"
import Modal from "react-modal"

import {ConversationNode} from "./types"

if (typeof window !== "undefined") {
  Modal.setAppElement(document.body)
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "600px",
    overflow: "scroll",
  },
}

interface Props {
  isDialogOpen: boolean
  closeDialog: () => void
  item: ConversationNode | null
}

function useExpended(
  id: number,
): [(id: number) => void, (id: number) => boolean] {
  const [state, setState] = useState<Array<number>>([])
  const isExpended = (id: number): boolean => state.includes(id)
  const toggleExpended = (id: number) => {
    setState((prev) => {
      return isExpended(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    })
  }
  useEffect(() => {
    setState([id])
  }, [id])
  return [toggleExpended, isExpended]
}

const MessageDialog: FC<Props> = ({isDialogOpen, closeDialog, item}) => {
  const [toggleExpended, isExpended] = useExpended(item?.id ?? 0)
  const items = [item] as ConversationNode[]
  return (
    <Modal
      isOpen={isDialogOpen}
      onRequestClose={closeDialog}
      style={customStyles}
    >
      <Conversation
        items={items}
        isExpended={isExpended}
        toggleExpended={toggleExpended}
      />
    </Modal>
  )
}

interface RowProps {
  node: ConversationNode
  isExpended: (id: number) => boolean
  toggleExpended: (id: number) => void
}

const contentStyles = css`
  border: 1px solid ${colorsMain.highlight};
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 0.35rem;
  }
`
const RowStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  cursor: pointer;
  padding: 0.5rem;

  p {
    span {
      color: ${colorsMain.primary};
    }
  }
  &:hover {
    background-color: ${bgNuisances.bg100};
    box-shadow: ${elevations.md};
  }
`
const messageStyles = css`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`
const Row: FC<RowProps> = ({children, node, isExpended, toggleExpended}) => (
  <Fragment>
    <div css={contentStyles}>
      <RowStyles onClick={() => toggleExpended(node.id)}>
        <p>
          Name: <span>{node.name}</span>
        </p>
        <p>
          Subject: <span>{node.type}</span>
        </p>
      </RowStyles>
      {isExpended(node.id) && (
        <div css={messageStyles}>
          {" "}
          <p>{node.text}</p>
        </div>
      )}
    </div>
    {children}
  </Fragment>
)

interface ConversationProps {
  items: ConversationNode[]
  level?: number
  parentId?: number | null
  isExpended: (id: number) => boolean
  toggleExpended: (id: number) => void
}
const Conversation: FC<ConversationProps> = ({
  items,
  parentId = null,
  level = 0,
  isExpended,
  toggleExpended,
}): JSX.Element[] | any => {
  const nodes = items.filter(
    (item: ConversationNode) => item?.parentId === parentId,
  )
  if (!items) return null
  return nodes.map((node: ConversationNode) => (
    <Row
      key={node.id}
      node={node}
      isExpended={isExpended}
      toggleExpended={toggleExpended}
    >
      <Conversation
        items={node.children}
        level={level + 1}
        parentId={node.id}
        isExpended={isExpended}
        toggleExpended={toggleExpended}
      />
    </Row>
  ))
}
export default MessageDialog
