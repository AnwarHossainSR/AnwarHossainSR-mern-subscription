import { Text } from 'components/atoms/text';
import { Icon } from 'components/atoms/icon';
import { ICONS } from '../../../settings/settings';
import { useState } from 'react';

export interface MenuProps {
  iconSrc: string;
  menuName: string;
  handleClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({ iconSrc, menuName, handleClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="m-menu"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onMouseEnter={handleClick}
    >
      <div className="m-menu__content">
        <div className="m-menu__content__menuIcon">
          <Icon activeIcon="iconColorWhite" changeColor={isHover} icon={iconSrc} size="mXMedium" />
        </div>
        <Text
          color={isHover ? 'black-active' : 'white'}
          fontWeight="bold"
          lineHeight="line21"
          type="font14"
          textAlign="left"
        >
          {menuName}
        </Text>
      </div>
      <div className="m-menu__arrowIcon">
        <Icon icon={ICONS.questionBankRighArrowIcon} size="sMedium" />
      </div>
    </div>
  );
};
