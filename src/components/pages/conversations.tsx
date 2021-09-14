import React from "react"

import {tree} from "../../util/make-tree-structure"
import Conversations from "../conversations"

console.log("tree", tree)
const ConversationsPage = () => {
  return (
    <div>
      <Conversations />
    </div>
  )
}

export default ConversationsPage
