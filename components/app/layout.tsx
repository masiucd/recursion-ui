import {css} from "@emotion/react"
import {FC, Fragment} from "react"

import Footer from "./footer"
import Header from "./header"

const mainStyles = css`
  max-width: 90rem;
  margin: 1rem auto;
  min-height: calc(100vh - 20rem);
`

const Layout: FC = ({children}) => (
  <Fragment>
    <Header />
    <main css={mainStyles}>{children}</main>
    <Footer />
  </Fragment>
)

export default Layout
