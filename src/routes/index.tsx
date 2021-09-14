import React, {Fragment, lazy, Suspense} from "react"
import {Route, Switch} from "react-router-dom"

const Home = lazy(() => import("../components/pages/home"))
const FolderStructure = lazy(() => import("../components/pages/folder-structure"))
const Conversations = lazy(() => import("../components/pages/conversations"))

const Routes = () => {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/folder" component={FolderStructure} />
          <Route exact path="/conversations" component={Conversations} />
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default Routes
