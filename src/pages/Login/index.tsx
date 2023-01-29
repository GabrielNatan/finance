import { type FieldErrorsImpl, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { type FormData } from '../../interface'
import { Container, Title, Form, Navigation } from './style'

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const sendForm = (data: any) => {
    console.log(data)
    console.log(errors)
  }

  function validateFields (name: 'email' | 'password', erros: Partial<FieldErrorsImpl<FormData>>) {
    if (erros[name] == null || erros[name] === undefined) { return '' }

    if (erros?.email?.type === 'required') {
      return 'Email is required'
    }

    if (erros?.password?.type === 'required') {
      return 'Password is required'
    }

    return ''
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
        <Navigation to="/">
          Create account
        </Navigation>
      </Form>
    </Container>
  )
}
