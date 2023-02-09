import styled from 'styled-components'
interface InputTextProps {
  message: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100px;
    border-left: 5px solid ${({ color }) => color};
    background-color: ${({ theme }) => theme.backgroundTag};
    padding:  0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.strong`
    color: ${({ theme }) => theme.color};
    margin-bottom: 5px;
`

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.color};
    margin-top: 10px;
`
export const Input = styled.input<InputTextProps>`
 width: 100%;
    padding: 5px 10px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-color: ${({ theme, message }) => message ? theme.red : theme.borderColor};
    outline-color: ${({ theme, message }) => message ? theme.red : theme.borderColor};
    background-color: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.color};

    &:-webkit-autofill {
        -webkit-box-shadow: 0px 0px 0px 30px ${({ theme }) => theme.backgroundSecondary} inset;
        -webkit-text-fill-color: ${({ theme }) => theme.color} !important;
    }


`
