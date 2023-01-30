import styled from 'styled-components'

interface InputTextProps {
  message: boolean
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InputText = styled.input<InputTextProps>`
    padding: 5px 10px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-color: ${({ theme, message }) => message ? theme.red : theme.borderColor};
    outline-color: ${({ theme, message }) => message ? theme.red : theme.borderColor};
    background-color: ${({ theme }) => theme.backgroundSecondary};
    &:-webkit-autofill {
        -webkit-box-shadow: 0px 0px 0px 30px ${({ theme }) => theme.backgroundSecondary} inset;
        -webkit-text-fill-color: ${({ theme }) => theme.color} !important;
    }

`
export const Text = styled.label`

`

export const MessageError = styled.div`
    color: ${({ theme }) => theme.red};
    font-size: 14px;
`
