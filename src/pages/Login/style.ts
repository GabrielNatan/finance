import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 530px;
    padding: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.shadowColor};
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.color};
    font-size: 25px;
`

export const Navigation = styled(Link)`
    color: ${({ theme }) => theme.active};
    text-decoration: none;
    text-align: center;

`
