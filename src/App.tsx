import styled from "@emotion/styled"
import React from "react"

import Tree from "./components/rec/Tree"
import {getTreeData} from "./util/getData"

const Container = styled.main`
  max-width: 900px;
  min-height: 100vh;
  margin: 2rem auto;
`

const App = () => (
  <div>
    <Container>
      <Tree treeData={getTreeData()} />
    </Container>
  </div>
)

export default App
