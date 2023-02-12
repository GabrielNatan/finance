import { Avatar } from '../../components/Avatar'
import {
  Container,
  HeaderStyle,
  ContAvatar,
  ContBalance,
  Text,
  Money,
  Image,
  InputAndOutput,
  Tab,
  Main,
  Left,
  Right,
  ContainerCards
} from './style'
import { FaEye } from 'react-icons/fa'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

import { Card } from '../../components/Card'
import { useAuth } from '../../hooks/useAuth'
import { List } from '../../components/List'
import { Header } from '../../components/Header'

export const Home = () => {
  const { user } = useAuth()
  const image = user.photoURL !== null && user.photoURL !== '' ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  return (
    <Container>
      <Header page='Dashboard'/>
      <HeaderStyle>
        <ContAvatar>
            <Avatar
                 width={60}
                 height={60}
                 src={image}
            />
        </ContAvatar>
        <ContBalance>
          <Text>Balance <Image><FaEye size={20} color="#AAA"/></Image></Text>
          <Money>U$ 3,700.00 </Money>
        </ContBalance>
        <InputAndOutput>
          <Tab type='success'><AiOutlineArrowDown size={12} color="green"/> U$ 190.00</Tab>
          <Tab type='error'><AiOutlineArrowUp size={12} color="red"/> U$ 2,014.00</Tab>
        </InputAndOutput>
      </HeaderStyle>
      <Main>
        <Left>
          <ContainerCards>
            <Card
              text="aqui"
              onClick={() => {}}
              icon={<AiOutlineArrowDown size={25}/>}
            />
              <Card
              text="aqui"
              onClick={() => {}}
              icon={<AiOutlineArrowDown size={25}/>}
            />
              <Card
              text="aqui"
              onClick={() => {}}
              icon={<AiOutlineArrowDown size={25}/>}
            />
              <Card
              text="aqui"
              onClick={() => {}}
              icon={<AiOutlineArrowDown size={25}/>}
            />
          </ContainerCards>
          <List/>
        </Left>
        <Right>

        </Right>
      </Main>
    </Container>
  )
}
