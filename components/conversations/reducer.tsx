import {Action, State} from "./types"

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        isDialogOpen: true,
        item: action.item,
      }
    case "CLOSE_DIALOG":
      return {
        ...state,
        isDialogOpen: false,
        item: null,
      }

    default:
      return state
  }
}
