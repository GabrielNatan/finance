import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.color};

`
export const Main = styled.form`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    padding: 80px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) {
    
    }
`
export const Top = styled.div`
    display: flex;
    gap: 40px;
`
export const ContAvatar = styled.div`
    position: relative;
`

export const Input = styled.input`
     visibility: hidden;
     width: 0;
     height: 0;
`
export const ContEdit = styled.label`
    cursor: pointer;
    background-color: #8BA6FF;
    border: 3px solid #6587FF;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    right: -0px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Name = styled.h1`
    font-weight: 500;
    font-size: 60px;
    line-height: 60px;
    color: ${({ theme }) => theme.color};

`
export const InputName = styled.input<{ error: boolean }>`
    font-weight: 500;
    width: 600px;
    font-size: 60px;
    line-height: 60px;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-color: ${({ theme, error }) => error ? theme.red : theme.borderColor};
    outline-color: ${({ theme, error }) => error ? theme.red : theme.borderColor};
    border-radius: 10px;
`

export const MessageError = styled.div`
    color: ${({ theme }) => theme.red};
`
export const Activated = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.color};
`

export const Bottom = styled.div`
    padding: 40px 0;
    display: flex;
    gap: 40px;
`
export const ContTagsInfo = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;

`

export const ContButtons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-start;
`
