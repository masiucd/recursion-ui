/* eslint-disable no-unused-vars */
import React, {FC, useEffect, useState} from "react"

import {ConversationItemWithChildren} from "../../util/make-tree-structure"
import conversations from "../pages/conversations"

interface ConversationsProps {
  conversations: Array<ConversationItemWithChildren>
  id: number
}
interface Props {
  conversations: Array<ConversationItemWithChildren>
  parentId?: null | number
  level?: number
  isExpended?: (id: number) => boolean
  toggleExpended?: (id: number) => void
}

// eslint-disable-next-line no-unused-vars
function useExpended(id: number): [(id: number) => void, (id: number) => void] {
  const [expendedList, setExpendedList] = useState<Array<number>>([])

  useEffect(() => {
    setExpendedList([id])
  }, [])

  const isExpended = (id: number): boolean => expendedList.includes(id)

  const toggleExpended = (id: number): void => {
    setExpendedList((prev) =>
      isExpended(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
    )
  }

  return [toggleExpended, isExpended]
}

const Conversations: FC<ConversationsProps> = ({conversations}) => {
  const [toggleExpended, isExpended] = useExpended(conversations[0].id)
  return (
    <>
      <TreeConversations
        conversations={conversations}
        // @ts-ignore
        isExpended={isExpended}
        toggleExpended={toggleExpended}
      />
    </>
  )
}

// @ts-ignore
const TreeConversations: FC<Props> = ({
  conversations,
  parentId = null,
  level = 0,
  isExpended,
  toggleExpended,
}) => {
  const nodes = conversations.filter(
    (node) => node.parentId === parentId,
  ) as Array<ConversationItemWithChildren>

  if (!nodes) return null
  return nodes.map((item: ConversationItemWithChildren) => (
    <div key={item.id}>
      {/* @ts-ignore */}
      {isExpended(item.id) && item.title}
      <TreeConversations
        conversations={item.children as Array<ConversationItemWithChildren>}
        parentId={item.id}
        level={level + 1}
        isExpended={isExpended}
      />
    </div>
  ))
}
export default Conversations
