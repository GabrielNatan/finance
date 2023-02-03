import { type FieldErrorsImpl, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { type FormDataOptions, type FormData } from '../../interface'
import { Container, Title, Form, Navigation } from './style'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { Loading } from '../../components/Loading'
import { useState } from 'react'
import { Alert } from '../../components/Alert'

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { toggleToken } = useAuth()
  const { login } = useApi()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [activeAlert, setActiveAlert] = useState(false)

  const sendForm = async (data: any) => {
    const { email, password } = data
    setLoading(true)

    try {
      await login(email, password)
      toggleToken(true)
      navigate('/')
      localStorage.setItem('user', 'true')
    } catch (error) {
      setActiveAlert(true)
    } finally {
      setLoading(false)
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

        <Alert
          onClose={() => { setActiveAlert(false) }}
          active={activeAlert}
          type='error'
          message="Verifique email e senha"
        />

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
          type="submit"
          disabled={loading}
        >
          {loading ? <Loading/> : 'Entrar'}
        </Button>
        <Navigation to="/create-account">
          Not registered yet? create an account.
        </Navigation>
      </Form>
    </Container>
  )
}
