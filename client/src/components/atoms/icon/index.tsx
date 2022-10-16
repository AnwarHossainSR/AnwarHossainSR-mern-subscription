export interface IconProps {
  icon: any;
  size:
    | 'xSmall'
    | 'xLMedium'
    | 'sMedium'
    | 'mMedium'
    | 'mXMedium'
    | 'sLarge'
    | 'lMedium'
    | 'mediumArrow'
    | 'lMediumArrow'
    | 'eSLarge'
    | 'linebar'
    | 'linebarSmall'
    | 'eLarge'
    | 'eSMedium'
    | 'paginationArrow'
    | 'dropDownRighArrow'
    | 'downArrow'
    | 'searchSmall'
    | 'largeArrowDown';
  isHover?: boolean;
  changeColor?: boolean;
  activeIcon?: 'iconColorWhite' | 'iconColorBlueViolet';
  handleClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ icon, size, isHover, changeColor, activeIcon, handleClick }) => {
  return (
    <figure className={`a-icon a-icon--${size}`}>
      {isHover || changeColor ? (
        <img
          onClick={handleClick}
          className={`a-icon__img--full a-icon__img--hover ${
            changeColor ? `a-icon__img--${activeIcon}` : `a-icon__img--${isHover}`
          }`}
          src={icon}
        />
      ) : (
        <img className={`a-icon__img--full`} src={icon} />
      )}
    </figure>
  );
};
