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
    width: 100%;
    max-width: 530px;
    padding: 45px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    @media screen and (min-width: 768px){
        width: 530px;
        padding: 40px;    
        box-shadow: 0px 0px 4px ${({ theme }) => theme.shadowColor};
        background-color: ${({ theme }) => theme.backgroundSecondary};
    }
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
