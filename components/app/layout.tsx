import {css} from "@emotion/css"
import {FC, Fragment} from "react"

const mainStyles = css`
  max-width: 100rem;
  margin: 1rem auto;
`

const Layout: FC = ({children}) => (
  <Fragment>
    <main css={mainStyles}>{children}</main>
  </Fragment>
)

export default Layout
