import styled from 'styled-components'

export const Container = styled.div`
    width: 100px;
    padding: 10px;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    @media screen and (min-width: 768px){
        padding: 20px;
    }
`
