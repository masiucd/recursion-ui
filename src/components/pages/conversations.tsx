import React from "react"

import {tree} from "../../util/make-tree-structure"
import Conversations from "../conversations"

const ConversationsPage = () => {
  return (
    <div>
      <Conversations conversations={tree} />
    </div>
  )
}

export default ConversationsPage
