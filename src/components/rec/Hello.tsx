import {css} from "@emotion/css"
import React from "react"

const SayHello = ({msg, times = 0}: {msg: string; times?: number}) => {
  if (times === 5) {
    return null
  }
  return (
    <div
      className={css`
        margin-left: ${times * 15}px;
        box-shadow: -3px 1px 2px 6px #ccc;
      `}>
      <p>Hello</p>
      <SayHello msg={msg} times={times + 1} />
    </div>
  )
}

export default SayHello
