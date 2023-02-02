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

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Avatar
          width={90}
          height={90}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="user avatar"
        />
        <Name>Gabriel Natan</Name>
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
