import { type FieldErrorsImpl, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { type FormDataOptions, type FormData } from '../../interface'
import { Container, Title, Form, Navigation, ContainerInput } from './style'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'
import { Alert } from '../../components/Alert'
import { useState } from 'react'
import { Loading } from '../../components/Loading'

interface AlertState {
  message: string
  type: 'success' | 'error'
}

export const CreateAccount = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { toggleToken } = useAuth()
  const navigate = useNavigate()
  const { createUser } = useApi()
  const [activeAlert, setActiveAlert] = useState(false)
  const [message, setMessage] = useState<AlertState>({ message: '', type: 'success' })
  const [loading, setLoading] = useState(false)

  const sendForm = async (data: any) => {
    const { email, password, name, lastName, confirmPassword } = data
    setLoading(true)
    try {
      if (confirmPassword !== password) {
        setActiveAlert(true)
        setMessage({ message: 'The passwords do not match', type: 'error' })
        return
      }
      await createUser(name, lastName, email, password)
      toggleToken()
      navigate('/')
      setMessage({ message: 'Usuario cadastrado com sucesso', type: 'success' })
    } catch (error) {
      console.log('ERRO=> ', error)
      setMessage({ message: 'Usuario não adastrado, tente novamente.', type: 'error' })
      setActiveAlert(true)
    } finally {
      setLoading(false)
    }
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
      <Alert
        onClose={() => { setActiveAlert(false) }}
        type={message.type}
        active={activeAlert}
        message={message.message}
      />
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
          type="submit"
          disabled={false}
        >
          {loading ? <Loading/> : 'Create user'}
        </Button>
        <Navigation to="/login">
          Already have an account?
        </Navigation>
      </Form>
    </Container>
  )
}
