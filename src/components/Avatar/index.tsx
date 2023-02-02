import { ContImage, Image } from './style'

interface AvatarProps {
  src: string
  alt: string
  width: string | number
  height: string | number
}
export const Avatar = ({ src, alt, width, height }: AvatarProps) => {
  return (
    <ContImage width={width} height={height}>
      <Image src={src} alt={alt} />
    </ContImage>
  )
}
