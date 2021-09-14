import styled from "@emotion/styled"
import React from "react"

import {getTreeData} from "../../util/getData"
import Tree from "../folder/Tree"

const Page = styled.section`
  max-width: 1000px;
  min-height: 100vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
`

const Container = styled.main`
  width: 100%;
  padding: 1rem;
`

const FolderStructurePAge = () => {
  return (
    <Page>
      <h1>Folder structure</h1>
      <Container>
        <Tree treeData={getTreeData()} />
      </Container>
    </Page>
  )
}

export default FolderStructurePAge
