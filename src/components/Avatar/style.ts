import styled from 'styled-components'
interface ContImageProps {
  width: string | number
  height: string | number
}
export const ContImage = styled.div<ContImageProps>`
    width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};
    height: ${({ height }) => typeof height === 'string' ? height : `${height}px`};
    border-radius: 50%;
    border: 3px solid black;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      border: 5px solid black;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`
