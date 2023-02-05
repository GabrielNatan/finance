import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.buttonPrimary};
    background-color: ${({ theme }) => theme.buttonPrimary};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
`
