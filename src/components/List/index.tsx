import {
  Container,
  Title,
  ListComponent,
  ListItem,
  ContIcon,
  ContText,
  ContPayment,
  PeriodSelector,
  DateTime,
  Description,
  SubTitle,
  Cont
} from './style'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { lightTheme } from '../../style/theme'
export const List = () => {
  const vari = true
  return (
    <Container>
      <Title>Transactions</Title>
      <PeriodSelector></PeriodSelector>
      <ListComponent>
        <ListItem>
          <Cont>
            <ContIcon>
              {vari
                ? <FaArrowDown size={20} color={lightTheme.green}/>

                : <FaArrowUp size={20} color={lightTheme.red}/>

              }
            </ContIcon>
            <ContText>
                <Description color={vari ? lightTheme.green : lightTheme.red}>Pagamento do curso.</Description>
                <SubTitle>Recebido de All pagaments ltda.</SubTitle>
            </ContText>
          </Cont>
         <DateTime>
              <Description>Data.</Description>
              <SubTitle>22 set 2022 - 18:28</SubTitle>
         </DateTime>

          <ContPayment color={vari ? lightTheme.green : lightTheme.red}>
                R$ 150,00
          </ContPayment>
        </ListItem>

        <ListItem>
          <Cont>
            <ContIcon>
              {vari
                ? <FaArrowDown size={20} color={lightTheme.green}/>

                : <FaArrowUp size={20} color={lightTheme.red}/>
              }
            </ContIcon>
            <ContText>
                <Description color={vari ? lightTheme.green : lightTheme.red}>Pagamento do curso.</Description>
                <SubTitle>Recebido de All pagaments ltda.</SubTitle>
            </ContText>
          </Cont>
         <DateTime>
              <Description>Data.</Description>
              <SubTitle>22 set 2022 - 18:28</SubTitle>
         </DateTime>

          <ContPayment color={vari ? lightTheme.green : lightTheme.red}>
                R$ 150,00
          </ContPayment>
        </ListItem>
      </ListComponent>
    </Container>
  )
}
