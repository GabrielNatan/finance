import {
  Container,
  Header,
  Name,
  Nav,
  List,
  ListItem,
  Bottom,
  Config
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
          alt={`${user.displayName !== null ? user.displayName : 'user'} avatar`}
        />
        <Name>{user.displayName}</Name>
      </Header>
      <Nav>
        <List>
          <ListItem>
            <TfiWallet size={20} /> Home
          </ListItem>
          <ListItem>
            <GrTransaction size={20} /> Transactions
          </ListItem>
        </List>
      </Nav>
      <Bottom>
        <Config>
          <AiOutlineSetting size={20} /> Settings
        </Config>
      </Bottom>
    </Container>
  )
}
