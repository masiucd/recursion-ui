import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

import Layout from "./components/app/layout"
import Routes from "./routes"

const App = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
)

export default App
