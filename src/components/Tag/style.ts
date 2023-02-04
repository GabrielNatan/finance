import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    border-left: 3px solid red;
    background-color: ${({ theme }) => theme.backgroundTag};
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.strong`
    color: ${({ theme }) => theme.color};
`

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.color};
`
