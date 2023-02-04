import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Title = styled.h1`

`
export const Main = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    @media screen and (min-width: 768px) {
    
    }
`

export const Top = styled.div`

`
export const ContAvatar = styled.div`

`
export const Info = styled.div`

`
export const Name = styled.div`

`
export const Activated = styled.div`

`
export const ContBottomInfo = styled.div`

`
export const Tag = styled.div`

`
export const TagText = styled.div`

`
