import { Sidebar } from '../../components/Sidebar'
import { Page, Container, ContSidebar } from './style'

interface TemplateDefaultProps {
  children: JSX.Element
}

export const TemplateDefault = ({ children }: TemplateDefaultProps) => {
  return (
        <Page>
          <ContSidebar>
            <Sidebar/>
          </ContSidebar>
          <Container>
            {children}
          </Container>
        </Page>
  )
}
