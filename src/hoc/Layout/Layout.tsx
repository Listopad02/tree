import { LayoutProps } from "../../types/types"
import { FC, useEffect } from "react"
import { Tree } from "../../components/Tree/Tree"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchTreeData } from "../../store/actions/tree"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  border-radius: 7px;
  width: 80%;
  background: #fff;
`

const Layout: FC<LayoutProps> = ({ children }) => {
  const { treeData } = useAppSelector(state => state.tree)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchTreeData(dispatch)
  }, [dispatch])

  return (
    <Container>
      <Tree data={treeData} />
    </Container>
  )
}

export default Layout