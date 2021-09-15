import Layout from "@components/app/layout"
import GlobalStyles from "@components/styles/global.styles"
import type {AppProps} from "next/app"
import {Fragment} from "react"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
export default MyApp
