import { LayoutProps } from "../../types/types"
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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default Layout