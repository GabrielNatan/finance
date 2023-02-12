import { Avatar } from '../../components/Avatar'
import {
  Container,
  Main,
  Top,
  ContAvatar,
  Info,
  Name,
  InputName,
  Activated,
  Bottom,
  ContTagsInfo,
  ContButtons,
  ContEdit,
  Input,
  MessageError
} from './style'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../hooks/useAuth'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { FaCamera } from 'react-icons/fa'
import { useState } from 'react'
import { useApi } from '../../hooks/useApi'
import { lightTheme } from '../../style/theme'
import { useForm } from 'react-hook-form'
import { type TypeOfFields, type FieldsTypes } from '../../interface'
import { Header } from '../../components/Header'

export const Settings = () => {
  const { user } = useAuth()
  const { updateUser } = useApi()
  const [file, setFile] = useState<File>()
  const [update, setUpdate] = useState<boolean>(false)

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email()
  })

  const { register, handleSubmit, formState: { errors } } = useForm<FieldsTypes>({
    defaultValues: {
      name: user.displayName,
      email: user.email,
      jobTitle: '',
      apt: '',
      city: user.phoneNumber,
      countryRegion: user.phoneNumber,
      phoneNumber: user.phoneNumber,
      state: user.phoneNumber,
      streetAddress: user.phoneNumber,
      zipCode: user.phoneNumber
    },
    resolver: yupResolver(schema)
  })

  async function uploadImage (event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    const selectedFiles = files as FileList
    setFile(selectedFiles?.[0])
  }

  async function updateImagePerfil () {
    if (file !== undefined) {
      await updateUser(file)
    }
  }

  const sendForm = async (data: any) => {
    console.log(data)
    await updateImagePerfil()
  }

  const verifyErrorMessage = (field: TypeOfFields) => {
    if (errors[field] === undefined) return ''
    const obj = errors[field]
    if (obj?.message === undefined) return ''

    return obj.message
  }

  return (
    <Container>
      <Header page='Profile'/>
      <Main onSubmit={handleSubmit(sendForm)}>
        <Top>
          <ContAvatar>
            <Avatar
              height={150}
              width={150}
              src={user.photoURL !== null ? user.photoURL : ''}
            />
            {update && (
              <ContEdit htmlFor="upload">
                <FaCamera color="#6587FF" size={20} />
              </ContEdit>
            )}
            <Input
              id="upload"
              name="upload"
              type="file"
              onChange={uploadImage}
            />
          </ContAvatar>
          <Info>
            {update
              ? <>
                <InputName error={errors?.name?.message !== undefined} type="text" {...register('name')}/>
                <MessageError>{errors?.name?.message}</MessageError>
              </>
              : <Name>{user.displayName}</Name>
            }
            <Activated>Activated : {user.activated}</Activated>
          </Info>
        </Top>

        <Bottom>
          <ContTagsInfo>
            <Tag
              color={lightTheme.green}
              title="Email"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('email')}
              register={register}
              typeOfFields="email"
            />
            <Tag
              color={lightTheme.green}
              title="Phone Number"
              text={user.phoneNumber !== null ? user.phoneNumber : '--'}
              edit={update}
              message={verifyErrorMessage('phoneNumber')}
              register={register}
              typeOfFields="phoneNumber"
            />
            <Tag
              color={lightTheme.green}
              title="Job title"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('jobTitle')}
              register={register}
              typeOfFields="jobTitle"

            />
          </ContTagsInfo>
          <ContTagsInfo>
            <Tag
              color={lightTheme.roxo}
              title="Street address"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('streetAddress')}
              register={register}
              typeOfFields="streetAddress"
            />
            <Tag
              color={lightTheme.roxo}
              title="Country/Region"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('countryRegion')}
              register={register}
              typeOfFields="countryRegion"
            />
            <Tag
              color={lightTheme.roxo}
              title="Apt, suite"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('apt')}
              register={register}
              typeOfFields="apt"
            />
          </ContTagsInfo>
          <ContTagsInfo>
            <Tag
              color={lightTheme.red}
              title="City"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('city')}
              register={register}
              typeOfFields="city"
            />
            <Tag
              color={lightTheme.red}
              title="State"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('state')}
              register={register}
              typeOfFields="state"
            />
            <Tag
              color={lightTheme.red}
              title="Zip code"
              text={user.email !== null ? user.email : ''}
              edit={update}
              message={verifyErrorMessage('zipCode')}
              register={register}
              typeOfFields="zipCode"
            />
          </ContTagsInfo>
        </Bottom>

        <ContButtons>
          <div style={{ width: 100 }}>
            <Button
              onclick={() => {
                setUpdate(!update)
              }}
              type="button"
              disabled={false}
            >
              {update ? 'Cancel' : 'Edit'}
            </Button>
          </div>
          {update && (
            <div style={{ width: 100 }}>
              <Button type="submit" disabled={false}>
                Concluir
              </Button>
            </div>
          )}
        </ContButtons>
      </Main>
    </Container>
  )
}
