import { type FieldErrorsImpl, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { type FormDataOptions, type FormData } from '../../interface'
import { Container, Title, Form, Navigation } from './style'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { toggleToken } = useAuth()
  const { login } = useApi()
  const navigate = useNavigate()

  const sendForm = async (data: any) => {
    const { email, password } = data
    try {
      await login(email, password)
      toggleToken()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  function validateFields (name: FormDataOptions, erros: Partial<FieldErrorsImpl<FormData>>) {
    const object: FormData = { email: '', password: '' }

    if (erros?.email?.type === 'required') {
      object.email = 'Email is required'
    }

    if (erros?.password?.type === 'required') {
      object.password = 'Password is required'
    }

    return object
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(sendForm)}>
        <Title>Sign in</Title>
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
        <Button
          text="Entrar"
          type="submit"
        />
        <Navigation to="/create-account">
          Not registered yet? create an account.
        </Navigation>
      </Form>
    </Container>
  )
}
