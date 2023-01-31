import { type FieldErrorsImpl, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { type FormDataOptions, type FormData } from '../../interface'
import { Container, Title, Form, Navigation, ContainerInput } from './style'
import { useNavigate } from 'react-router-dom'

export const CreateAccount = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { toggleToken } = useAuth()
  const navigate = useNavigate()

  const sendForm = (data: any) => {
    toggleToken()
    navigate('/')
  }

  function validateFields (name: FormDataOptions, erros: Partial<FieldErrorsImpl<FormData>>) {
    const object: FormData = { email: '', password: '', lastName: '', confirmPassword: '', name: '' }

    if (erros?.email?.type === 'required') {
      object.email = 'Email is required'
    }

    if (erros?.password?.type === 'required') {
      object.password = 'Password is required'
    }

    if (erros?.confirmPassword?.type === 'required') {
      object.confirmPassword = 'Confirm Password is required'
    }

    if (erros?.name?.type === 'required') {
      object.name = 'Name is required'
    }

    if (erros?.lastName?.type === 'required') {
      object.lastName = 'Last Name is required'
    }
    return object
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(sendForm)}>
        <Title>Create Account</Title>
        <ContainerInput>
          <Input
            text="Name"
            type='text'
            name="name"
            validation={{ required: true }}
            register={register}
            message={validateFields('name', errors)}
          />
          <Input
            text="Last Name"
            type='text'
            name="lastName"
            validation={{ required: true }}
            register={register}
            message={validateFields('lastName', errors)}
          />
        </ContainerInput>
        <Input
          text="Email"
          type='email'
          name="email"
          validation={{ required: true }}
          register={register}
          message={validateFields('email', errors)}
        />
        <Input
          text="Password"
          type="password"
          name="password"
          validation={{ required: true }}
          register={register}
          message={validateFields('password', errors)}
        />
        <Input
          text="Confrim password"
          type='password'
          name="confirmPassword"
          validation={{ required: true }}
          register={register}
          message={validateFields('confirmPassword', errors)}
        />
        <Button
          text="Entrar"
          type="submit"
        />
        <Navigation to="/login">
          Already have an account?
        </Navigation>
      </Form>
    </Container>
  )
}
