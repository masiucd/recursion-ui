import {css} from "@emotion/react"
import {FC, Fragment} from "react"

import Header from "./header"

const mainStyles = css`
  /* max-width: 10rem; */
  /* margin: 1rem auto; */
  border: 1px solid #3232;
  /* background: red; */
`

const Layout: FC = ({children}) => (
  <Fragment>
    <Header />
    <main css={mainStyles}>{children}</main>
  </Fragment>
)

export default Layout
