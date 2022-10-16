import { mapModifiers } from 'libs/component';

export interface ButtonProps {
  children?: React.ReactNode;
  type?: 'primary' | 'outlined';
  bgColor?: 'bgGreen' | 'bgOrange' | 'bgRed' | 'bgGrayLight' | 'bgGrayLighter' | 'bgPrimaryTwo' | 'primary';
  variant?: 'large' | 'medium' | 'small' | 'iconSmall' | 'iconLarge' | 'iconText';
  color?: 'green' | 'orange' | 'red' | 'secondaryOne' | 'secondaryTwo' | 'primary' | 'grayLight';
  onClick?: () => void;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isRounded?: boolean;
  isSemiRounded?: boolean;
  borderless?: boolean;
  imgSrc?: string;
  fontWeight?: 'bold' | 'mid' | 'regular' | 'semiBold';
  isIconSwitch?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  bgColor,
  color,
  variant,
  children,
  onClick,
  isDisabled = false,
  isFullWidth = false,
  isRounded = false,
  borderless = false,
  isSemiRounded = false,
  imgSrc,
  fontWeight,
  isIconSwitch = false,
}) => {
  let iconWithText = false;
  if (children && imgSrc) {
    iconWithText = true;
  }
  const componentClassName = mapModifiers(
    'a-button',
    type,
    bgColor,
    variant,
    color,
    isFullWidth && 'fullwidth',
    isRounded && 'rounded',
    iconWithText && 'iconWithText',
    borderless && 'borderless',
    !borderless && 'hover',
    isSemiRounded && 'semiRounded',
    fontWeight,
  );
  const className = `${componentClassName}`.trim();
  if (children && imgSrc) {
    return (
      <button className={className} onClick={onClick} disabled={isDisabled}>
        {!isIconSwitch ? (
          <div className="a-button__content">
            <img className="a-button__icon" src={imgSrc} alt="" />
            {children}
          </div>
        ) : (
          <div className="a-button__content">
            {children}
            <img className="a-button__icon" src={imgSrc} alt="" />
          </div>
        )}
      </button>
    );
  } else if (imgSrc) {
    return (
      <button className={className} onClick={onClick} disabled={isDisabled}>
        <img className="a-button__icon" src={imgSrc} alt="" />
      </button>
    );
  } else {
    return (
      <button className={className} onClick={onClick} disabled={isDisabled}>
        {children}
      </button>
    );
  }
};
