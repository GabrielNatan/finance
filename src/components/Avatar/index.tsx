import { ContImage } from './style'

interface AvatarProps {
  src: string
  width: string | number
  height: string | number
}
export const Avatar = ({ src, width, height }: AvatarProps) => {
  return (
    <ContImage src={src} width={width} height={height}>
    </ContImage>
  )
}
