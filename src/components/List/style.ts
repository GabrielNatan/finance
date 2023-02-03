import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.shadowColor} ;
`
export const Title = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.color};
    font-size: 30px;
`

export const ListComponent = styled.ol`
    list-style: none;

`
export const Cont = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const ListItem = styled.div`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Description = styled.div`
 color: ${({ theme, color }) => color !== undefined ? color : theme.secondaryColor};
 font-weight: bold;

`
export const SubTitle = styled.div`
 color: ${({ theme }) => theme.secondaryColor};
`
export const ContIcon = styled.div`
    display: flex;
    align-items: center;
`

export const ContText = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContPayment = styled.div`
    color: ${({ theme, color }) => color !== undefined ? color : theme.color};
    font-weight: bold;
    font-size: 18px;
`
export const PeriodSelector = styled.div`

`
export const DateTime = styled.div`

`
