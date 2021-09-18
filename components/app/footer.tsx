import {css} from "@emotion/react"
import {elevations, sizes} from "@styles/styles"
import React from "react"

const Footer = () => {
  return (
    <footer
      css={css`
        min-height: ${sizes.footerHeight};
        box-shadow: ${elevations.inner};
        display: flex;
        align-items: center;
      `}
    >
      <h3>Recursion with React</h3>
    </footer>
  )
}

export default Footer
