import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title, Form, Navigation } from './style'

export const Login = () => {
  return (
    <Container>
      <Form>
        <Title>Sign in</Title>
        <Input
          text="Email"
          type='email'
        />
        <Input
          text="Password"
          type="password"
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
