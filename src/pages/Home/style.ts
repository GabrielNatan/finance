import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
`

export const Notification = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
`
export const Header = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 0 0 60px 60px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    padding: 20px 30px 50px 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    @media screen and (min-width: 768px) {
        border-radius: 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        padding: 20px 40px;
    }
`

export const ContAvatar = styled.div`
    display: initial;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const ContBalance = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    line-height: 35px;
    font-weight: 500;
    color: ${({ theme }) => theme.color};

    @media screen and (min-width: 768px) {
        font-weight: bold;
        font-size: 35px;
        line-height: 55px;
    }
`

export const Money = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 40px;
    line-height: 45px;
    font-weight: bold;
    color: ${({ theme }) => theme.color};

    @media screen and (min-width: 768px) {
        font-weight: 500;
        font-size: 35px;
        line-height: 55px;
    }
`

export const Image = styled.div`

`

export const InputAndOutput = styled.div`
   display: none;
   @media screen and (min-width: 768px) {
        display: flex;
        gap: 20px;
    }
`

export const Tab = styled.div<{ type: 'success' | 'error' }>`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme, type }) => type === 'success' ? theme.green : theme.red};
    background-color: ${({ theme, type }) => type === 'success' ? theme.green30 : theme.red30};
`

export const Main = styled.div`

`

export const Left = styled.div`

`

export const Right = styled.div`

`
