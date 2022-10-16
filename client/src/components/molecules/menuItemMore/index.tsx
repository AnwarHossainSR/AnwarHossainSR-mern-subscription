import { ICONS } from '../../../settings/settings';
import { Text } from 'components/atoms/text';
import { Icon } from 'components/atoms/icon';
import { useState } from 'react';

export interface MenuItemMoreProps {
  menuTitle: string;
  isActive?: boolean;
  handleClick?: () => void;
}

export const MenuItemMore: React.FC<MenuItemMoreProps> = ({ menuTitle, isActive, handleClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="m-menuItemMore"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onClick={handleClick}
    >
      <Icon icon={ICONS.rightArrowLargeIcon} isHover size="dropDownRighArrow" changeColor={isActive || isHover}  activeIcon="iconColorBlueViolet" />
      <Text
        color={isActive || isHover ? 'primary' : 'black-active'}
        fontWeight="regular"
        lineHeight="line20"
        type="font14"
        textAlign="left"
      >
        {menuTitle}
      </Text>
    </div>
  );
};

