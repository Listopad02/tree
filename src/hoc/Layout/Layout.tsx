import { LayoutProps } from "../../types/types"
import { FC, useEffect } from "react"
import { Tree } from "../../components/Tree/Tree"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchTreeData } from "../../store/actions/tree"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 7px;
  width: 70%;
  background: #fff;
`
const TreeContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow-y: scroll;
`

const Layout: FC<LayoutProps> = ({ children }) => {
  const { treeData } = useAppSelector(state => state.tree)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchTreeData(dispatch)
  }, [dispatch])

  return (
    <Container>
      <TreeContainer>
        <Tree data={treeData} />
      </TreeContainer>
      <div style={{ width: "70%" }}></div>
    </Container>
  )
}

export default Layout