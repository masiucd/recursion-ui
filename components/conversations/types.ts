export interface Conversation {
  id: number
  parentId: number | null
  text: string
  type: "food" | "sport"
  name: string
}
export interface ConversationNode extends Conversation {
  children: ConversationNode[]
}
export interface State {
  item: ConversationNode | null
  isDialogOpen: boolean
}
export type Action =
  | {type: "OPEN_DIALOG"; item: ConversationNode}
  | {type: "CLOSE_DIALOG"}
