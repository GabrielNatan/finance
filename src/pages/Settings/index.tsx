import { Avatar } from '../../components/Avatar'
import {
  Container,
  Title,
  Main,
  Top,
  ContAvatar,
  Info,
  Name,
  Activated,
  ContBottomInfo,
  TagTitle,
  TagText
} from './style'
// import { useTheme } from '../../hooks/useTheme'
import { useAuth } from '../../hooks/useAuth'

export const Settings = () => {
  // const { toggleTheme, theme } = useTheme()
  const { user } = useAuth()
  const image = user.photoURL !== null ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  return (
    <Container>
      <Title>Profile</Title>
      <Main>
        <Top>
          <ContAvatar>
            <Avatar
              height={150}
              width={150}
              alt="legal"
              src={image}
              />
          </ContAvatar>
          <Info>
            <Name>Gabriel Natan</Name>
            <Activated>Activated : 30 days</Activated>
            <ContBottomInfo>
              <TagTitle>Phone number</TagTitle>
              <TagText>(11)99999-9999</TagText>
            </ContBottomInfo>
          </Info>
        </Top>
      </Main>
    </Container>
  )
}
