import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    gap: 10px;
`
export const Notification = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    gap: 10px;
`

export const ContIcon = styled.h1`
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`

export const PageTitle = styled.h1`
    color: ${({ theme }) => theme.color};
`
