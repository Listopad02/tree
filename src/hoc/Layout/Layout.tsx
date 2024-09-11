import { LayoutProps, Node } from "../../types/types"
import { FC, useEffect, useRef } from "react"
import { Tree } from "../../components/Tree/Tree"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchTreeData } from "../../store/actions/tree"
import { TreeOptions } from "../../components/TreeOptions/TreeOptions"
import { ButtonComponent } from "../../components/Button/Button"
import { downloadFile, uploadFile } from "../../utils/functions"
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
  border-right: 1px solid #ccc;
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
const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 50%;
`
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`

const Layout: FC<LayoutProps> = () => {
  const dispatch = useAppDispatch()
  const { treeData } = useAppSelector(state => state.tree)
  const { name } = useAppSelector(state => state.tree)
  const { treeModifiedData }: { treeModifiedData: Node[] | [] } = useAppSelector(state => state.tree)
  const inputRef = useRef(null)

  useEffect(() => {
    fetchTreeData(dispatch)
  }, [dispatch])

  return (
    <Container>
      <TreeContainer>
        <Tree data={treeModifiedData.length ? treeModifiedData : treeData} />
      </TreeContainer>
      <TreeOptionsContainer>
        <ControlsContainer>
        <Title>{name ? name : "Выберите элемент из дерева"}</Title>
          <ButtonsContainer>
            <ButtonComponent 
              text="Скачать файл" 
              type="primary" 
              action="download" 
              onClick={() => downloadFile(treeModifiedData.length ? treeModifiedData : treeData)}
            />
              <ButtonComponent 
                text="Загрузить файл" 
                type="default" 
                action="upload" 
              >
                <input
                  hidden
                  accept=".json"
                  type="file"
                  onChange={(e) => uploadFile(e, dispatch)}
                  ref={inputRef}
                />
              </ButtonComponent>
          </ButtonsContainer>
        </ControlsContainer>
        <TreeOptions />
      </TreeOptionsContainer>
    </Container>
  )
}

export default Layout