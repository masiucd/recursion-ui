import {css} from "@emotion/react"
import {FC, Fragment} from "react"

import Header from "./header"

const mainStyles = css`
  max-width: 100rem;
  margin: 1rem auto;
`

const Layout: FC = ({children}) => (
  <Fragment>
    <Header />
    <main css={mainStyles}>{children}</main>
  </Fragment>
)

export default Layout
