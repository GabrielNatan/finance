import styled from 'styled-components'
interface ContImageProps {
  width: string | number
  height: string | number
  src: string | undefined
}
export const ContImage = styled.div<ContImageProps>`
    width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};
    height: ${({ height }) => typeof height === 'string' ? height : `${height}px`};
    border-radius: 50%;
    border: 3px solid black;
    overflow: hidden;
    background-image: url(${({ src }) => src});
    background-position: center center;
    background-size:cover;
    background-repeat: no-repeat;
    @media screen and (min-width: 768px) {
      border: 5px solid black;
    }
`
