import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.shadowColor} ;
`
export const Header = styled.div`
    padding: 70px 0 40px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
export const ContImage = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 5px solid black;
    overflow: hidden;
`
export const Avatar = styled.img`
    width: 100%;
    height: 100%;
`

export const Name = styled.p`
    font-size: 16px;
`

export const Nav = styled.nav`
    flex: 1;
    padding-left: 40px;
`

export const List = styled.ol`
    list-style: none;
`

export const ListItem = styled.li`
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const Bottom = styled.div`
    padding-left: 40px;
    cursor: pointer;
`

export const Config = styled.p`
    padding: 20px 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
`