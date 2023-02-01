import { Container, ContainerAlert, Close } from './style'
import { lightTheme } from '../../style/theme'
import { IoMdClose } from 'react-icons/io'
interface AlertProps {
  message: string
  type: 'success' | 'error'
  active: boolean
  onClose: () => void
}
export const Alert = ({ message, type, active, onClose }: AlertProps) => {
  return (
    <ContainerAlert active={active}>
        <Close onClick={onClose}>
            <IoMdClose size={20} color={type === 'success' ? lightTheme.green : lightTheme.red}/>
        </Close>
        <Container
            color={type === 'success' ? lightTheme.green : lightTheme.red}
            cBacground={type === 'success' ? lightTheme.green30 : lightTheme.red30}
        >
            {message}
        </Container>
    </ContainerAlert>
  )
}
