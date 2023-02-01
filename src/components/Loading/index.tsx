import { Container, Dot } from './style'

export const Loading = () => {
  return (
        <Container>
            <Dot delay={0}/>
            <Dot delay={150}/>
            <Dot delay={300}/>
        </Container>
  )
}
