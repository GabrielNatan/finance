import {
  Container,
  Header,
  Name,
  Nav,
  List,
  ListItem,
  Bottom
} from './style'
import { AiOutlineSetting } from 'react-icons/ai'
import { TfiWallet } from 'react-icons/tfi'
import { BiTransfer } from 'react-icons/bi'

import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'

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
            <NavLink
              to="/"
              className={({ isActive }) => {
                console.log('isActive ', isActive)
                return isActive ? 'active' : undefined
              }}

            >
              <TfiWallet size={20} /> Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/transactions"
              className={({ isActive }) => {
                console.log('isActive ', isActive)
                return isActive ? 'active' : undefined
              }}

            >
              <BiTransfer size={20} /> Transactions
            </NavLink>
          </ListItem>
        </List>
      </Nav>
      <Bottom>
        <NavLink
          to="/settings"
          className={({ isActive }) => {
            console.log('isActive ', isActive)
            return isActive ? 'active' : undefined
          }}
          >
          <AiOutlineSetting size={20} /> Settings
        </NavLink>
      </Bottom>
    </Container>
  )
}
