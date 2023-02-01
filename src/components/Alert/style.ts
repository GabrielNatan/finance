import styled from 'styled-components'

interface ContainerProps {
  cBacground: string
  color: string
}
export const ContainerAlert = styled.div<{ active: boolean }>`
    width: 100%;
    max-width: 530px;
    height: ${({ active }) => active ? '60px' : '0px'};
    overflow: hidden;
    transition: 300ms;
    position: relative;
`

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 60px;
    color: ${({ color }) => color};
    border: 2px solid ${({ color }) => color};
    background-color: ${({ cBacground }) => cBacground};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Close = styled.div`
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 20px;
`
