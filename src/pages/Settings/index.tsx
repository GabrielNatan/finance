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
  ContButtons,
  ContEdit,
  Input
} from './style'
import { useAuth } from '../../hooks/useAuth'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { FaCamera } from 'react-icons/fa'
import { useState } from 'react'
import { useApi } from '../../hooks/useApi'
import { lightTheme } from '../../style/theme'
export const Settings = () => {
  const { user } = useAuth()
  const { updateUser } = useApi()
  const [file, setFile] = useState<File>()
  const [update, setUpdate] = useState<boolean>(false)
  async function uploadImage (event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    const selectedFiles = files as FileList
    setFile(selectedFiles?.[0])
  }

  async function updatePerfil () {
    if (file !== undefined) {
      await updateUser(file)
    }
  }

  return (
    <Container>
      <Title>Profile</Title>
      <Main>
        <Top>
          <ContAvatar >
            <Avatar
              height={150}
              width={150}
              src={user.photoURL !== null ? user.photoURL : ''}
              />
              {update && <ContEdit htmlFor='upload'>
                <FaCamera color='#6587FF' size={20}/>
              </ContEdit>}
              <Input id='upload' name='upload' type="file" onChange={uploadImage}/>
          </ContAvatar>
          <Info>
            <Name>{user.displayName}</Name>
            <Activated>Activated : {user.activated}</Activated>
            <ContBottomInfo>
              <ContTag>
                <TagTitle>Email</TagTitle>
                <TagText>{user.email !== null ? user.email : '--'}</TagText>
              </ContTag>
              <ContTag>
                <TagTitle>Phone number</TagTitle>
                <TagText>{user.phoneNumber !== null ? user.phoneNumber : '--'}</TagText>
              </ContTag>
            </ContBottomInfo>
          </Info>
        </Top>

        <Bottom>
          <ContTagsInfo>
            <Tag color={lightTheme.green} title="Address" text={user.email !== null ? user.email : ''} edit={update} />
            <Tag color={lightTheme.green} title="City" text={user.email !== null ? user.email : ''} edit={update} />
            <Tag color={lightTheme.green} title="State/Country" text={user.email !== null ? user.email : ''} edit={update} />
          </ContTagsInfo>
          <ContTagsInfo>
            <Tag color={lightTheme.roxo} title="Address" text={user.email !== null ? user.email : ''} edit={update} />
            <Tag color={lightTheme.roxo} title="City" text={user.email !== null ? user.email : ''} edit={update} />
            <Tag color={lightTheme.roxo} title="State/Country" text={user.email !== null ? user.email : ''} edit={update} />
          </ContTagsInfo>
          <ContTagsInfo>
            <Tag color={lightTheme.red} title="Address" text={user.email !== null ? user.email : ''} edit={update} />
            <Tag color={lightTheme.red} title="City" text={user.email !== null ? user.email : ''} edit={update} />
            <Tag color={lightTheme.red} title="State/Country" text={user.email !== null ? user.email : ''} edit={update} />
          </ContTagsInfo>

        </Bottom>

        <ContButtons>
          <div style={{ width: 100 }}>
            <Button onclick={() => { setUpdate(!update) }} type='button' disabled={false} >{update ? 'Cancel' : 'Edit'}</Button>
          </div>
         {update && <div style={{ width: 100 }}>
            <Button onclick={updatePerfil} type='button' disabled={false} >Concluir</Button>
          </div>}
        </ContButtons>

      </Main>
    </Container>
  )
}
