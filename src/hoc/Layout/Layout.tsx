import { LayoutProps } from "../../types/types"
import { FC, useEffect } from "react"
import { Tree } from "../../components/Tree/Tree"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchTreeData } from "../../store/actions/tree"
import { TreeOptions } from "../../components/TreeOptions/TreeOptions"
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
const TreeOptionsContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 0 0 10px;
  display: flex;
  flex-direction: column;
`
const Title = styled.p`
  margin: 10px 0;
  fint-size: 16px;
`

const Layout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { treeData } = useAppSelector(state => state.tree)
  const { name } = useAppSelector(state => state.tree)
  const { itemProperties } = useAppSelector(state => state.tree)

  useEffect(() => {
    fetchTreeData(dispatch)
  }, [dispatch])

  return (
    <Container>
      <TreeContainer>
        <Tree data={treeData} />
      </TreeContainer>
      <TreeOptionsContainer>
        <Title>{name ? name : "Выберите элемент из дерева"}</Title>
        <TreeOptions />
      </TreeOptionsContainer>
    </Container>
  )
}

export default Layout