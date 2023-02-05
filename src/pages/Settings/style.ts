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
    padding: 80px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) {
    
    }
`

export const Top = styled.div`
    display: flex;
    gap: 40px;
`
export const ContAvatar = styled.div`
    position: relative;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ContTag = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.h1`
    font-weight: 500;
    font-size: 60px;
    line-height: 60px;
`
export const Activated = styled.div`
    font-size: 20px;
`
export const ContBottomInfo = styled.div`
    display: flex;
    gap: 50px;
    padding: 30px 0;
`
export const TagTitle = styled.div`

`
export const TagText = styled.div`

`
export const Bottom = styled.div`
    padding: 40px 0;
    display: flex;
    gap: 40px;
`
export const ContTagsInfo = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;

`

export const ContButtons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-start;
`
