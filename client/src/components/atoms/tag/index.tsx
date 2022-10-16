import React, { ButtonHTMLAttributes } from "react";
type InheritedProps =
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick"
  >;
export interface TagProps extends InheritedProps {
  color: 'white' | 'black' | 'darkGrey' | 'semiBlack' | 'semiGrey';
  fontWeight: 'regular' | 'medium' | 'bold';
  backgroundColor: 'secondary' | 'dark' | 'lightWarning' | 'success' | 'warning' | 'muted' | 'mutedLight' | 'white';
  children: string;
  radius?: 'lightRound' | 'semiRound' | 'round';
  border?: 'light' | 'dark' | 'none' | 'lightBlue';
  fontSize: 'small' | 'medium',
  padding?: 'padSmall' | 'padMedium' | 'padLarge' | 'padSemiLarge',
  isHover?: boolean;
  imageSrc?: string;
  altr?: string;
  isCross?: boolean;
  imageSize?: 'smallImage' | 'mediumImage',
  handleClick?: () => void,
}

export const Tag: React.FC<TagProps> = ({ children, radius, border, isHover, color, backgroundColor, fontWeight, fontSize, padding, imageSrc, altr, isCross, imageSize, handleClick }) => {
  return (
    <div
      className={`a-tag a-tag--${radius}
        a-tag--${border}
        a-tag--${radius}
        a-tag--${color}
        a-tag--${backgroundColor}
        a-tag--${fontWeight}
        a-tag--${fontSize}
        a-tag--${padding}
        ${isHover && "a-tag--hover"}
        ${isCross && "a-tag--alignDisplay"}
        `}
    >
      {children}
      {isCross && <img onClick={handleClick} className={`a-tag--${imageSize}`} src={imageSrc} alt={altr} />}
    </div>
  );
};

