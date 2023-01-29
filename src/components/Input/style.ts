import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InputText = styled.input`
    padding: 5px 10px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.borderColor};
`
export const Text = styled.label`

`
