import { type UseFormRegister } from 'react-hook-form'
import { type FieldsTypes, type TypeOfFields } from '../../interface'
import { Container, Title, SubTitle, Input } from './style'

interface TagProps {
  title: string
  message: string | undefined
  text: string
  edit: boolean
  color?: string
  register: UseFormRegister<FieldsTypes>
  typeOfFields: TypeOfFields
}

export const Tag = ({ title, text, edit, message, color = '#CCC', register, typeOfFields }: TagProps) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      {edit
        ? <>
          <Input {...register(typeOfFields)} message={(message === undefined || message !== '')}/>
          {message}
        </>
        : <SubTitle>{text}</SubTitle>
      }
    </Container>
  )
}
