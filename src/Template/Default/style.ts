import styled from 'styled-components'

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 768px) {
        padding: 20px 40px;
    }
`
export const ContSidebar = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: initial;
    }
`
