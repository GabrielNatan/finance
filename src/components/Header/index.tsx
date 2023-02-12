import {
  Container,
  ContIcon,
  PageTitle,
  Notification
} from './style'
import { FaBell } from 'react-icons/fa'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from '../../hooks/useTheme'

interface HeaderProps {
  page: string
}

export const Header = ({ page = '' }: HeaderProps) => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Container>
    <PageTitle>
      {page}
    </PageTitle>
    <Notification>
      <ContIcon onClick={toggleTheme}>
        {theme === 'light'
          ? <RiSunLine size={20} color="#AAA"/>
          : <RiMoonLine size={20} color="#AAA"/>
        }
      </ContIcon>
      <ContIcon>
        <FaBell size={20} color="#AAA"/>
      </ContIcon>
    </Notification>
  </Container>
  )
}
