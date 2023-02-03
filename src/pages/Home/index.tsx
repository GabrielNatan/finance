import { Avatar } from '../../components/Avatar'
import {
  Container,
  Notification,
  Header,
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
  ContainerCards,
  ContainerCreditCard
} from './style'
import { FaEye, FaBell } from 'react-icons/fa'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from '../../hooks/useTheme'
import { Card } from '../../components/Card'
import { useAuth } from '../../hooks/useAuth'
import { List } from '../../components/List'
import { CreditCard } from '../../components/CreditCard '

export const Home = () => {
  const { toggleTheme, theme } = useTheme()
  const { user } = useAuth()
  const image = user.photoURL !== null ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  return (
    <Container>
      <Notification>
        {theme === 'light'
          ? <RiSunLine onClick={toggleTheme} size={20} color="#AAA"/>
          : <RiMoonLine onClick={toggleTheme} size={20} color="#AAA"/>
        }
        <FaBell onClick={toggleTheme} size={20} color="#AAA"/>
      </Notification>
      <Header>
        <ContAvatar>
            <Avatar
                 width={60}
                 height={60}
                 src={image}
                 alt="user avatar"
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
      </Header>
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
          <ContainerCreditCard>
            <CreditCard/>
            <CreditCard/>
            <CreditCard/>
          </ContainerCreditCard>
        </Right>
      </Main>
    </Container>
  )
}
