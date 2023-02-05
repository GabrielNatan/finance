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
  TagText,
  ContTag,
  Bottom,
  ContTagsInfo,
  ContButtons
} from './style'
// import { useTheme } from '../../hooks/useTheme'
import { useAuth } from '../../hooks/useAuth'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
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
              <ContTag>
                <TagTitle>Email</TagTitle>
                <TagText>email@email.dev.com.br</TagText>
              </ContTag>
              <ContTag>
                <TagTitle>Phone number</TagTitle>
                <TagText>(11)99999-9999</TagText>
              </ContTag>
            </ContBottomInfo>
          </Info>
        </Top>

        <Bottom>
          <ContTagsInfo>
            <Tag/>
            <Tag/>
            <Tag/>
          </ContTagsInfo>
          <ContTagsInfo>
            <Tag/>
            <Tag/>
            <Tag/>
          </ContTagsInfo>
          <ContTagsInfo>
            <Tag/>
            <Tag/>
            <Tag/>
          </ContTagsInfo>

        </Bottom>

        <ContButtons>
          <div style={{ width: 100 }}>
            <Button type='button' disabled={false} >Edit</Button>
          </div>
          <div style={{ width: 100 }}>
            <Button type='button' disabled={false} >Cancel</Button>
          </div>
        </ContButtons>

      </Main>
    </Container>
  )
}
