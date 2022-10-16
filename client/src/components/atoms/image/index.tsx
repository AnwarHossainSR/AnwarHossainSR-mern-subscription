export interface ImageProps {
  imageSrc: string;
  size: 'xSmall' | 'small' | 'medium' | 'xMedium' | 'large' | 'xLarge' | 'xxLarge';
  radius?: 'round' | 'semiRound';
  border?: 'light' | 'dark';
  altTag?: string;
  isHover?: boolean;
}

export const Image: React.FC<ImageProps> = ({ imageSrc, size, radius, border, altTag, isHover }) => {
  return (
    <img
      className={`a-img a-img--${radius} 
        a-img--${size} 
        a-img--${border} 
        a-img--${radius}
        ${isHover && "a-img--hover"}`}
      src={imageSrc}
      alt={altTag}
    />
  );
};
