import {
  Container,
  Header,
  Avatar,
  ContImage,
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

export const Sidebar = () => {
  return (
        <Container>
          <Header>
              <ContImage>
                <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user avatar"/>
              </ContImage>
              <Name>Gabriel Natan</Name>
          </Header>
          <Nav>
            <List>
              <ListItem><TfiWallet size={20} color="black"/> Home</ListItem>
              <ListItem><GrTransaction size={20} color="black"/> Transactions</ListItem>
            </List>
          </Nav>
          <Bottom>
            <Config><AiOutlineSetting size={20} color="black"/> Settings</Config>
          </Bottom>

        </Container>
  )
}
