import {
  Container,
  Header,
  Name,
  Nav,
  List,
  ListItem,
  Bottom,
  Config,
  Navigation
} from './style'
import { AiOutlineSetting } from 'react-icons/ai'
import { TfiWallet } from 'react-icons/tfi'
import { GrTransaction } from 'react-icons/gr'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/useAuth'

export const Sidebar = () => {
  const { user } = useAuth()
  const image = user.photoURL !== null ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  return (
    <Container>
      <Header>
        <Avatar
          width={90}
          height={90}
          src={image}
        />
        <Name>{user.displayName}</Name>
      </Header>
      <Nav>
        <List>
          <ListItem>
            <Navigation to="/">
              <TfiWallet size={20} /> Home
            </Navigation>
          </ListItem>
          <ListItem>
            <Navigation to="/transactions">
              <GrTransaction size={20} /> Transactions
            </Navigation>

          </ListItem>
        </List>
      </Nav>
      <Bottom>
        <Config to="/settings">
          <AiOutlineSetting size={20} /> Settings
        </Config>
      </Bottom>
    </Container>
  )
}
