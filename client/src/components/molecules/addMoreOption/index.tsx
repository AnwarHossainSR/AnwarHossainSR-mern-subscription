import { Icon } from 'components/atoms/icon';
import { Text } from 'components/atoms/text';
export interface AddMoreOptionProps {
  icon?: string;
  text: string;
}

export const AddMoreOption: React.FC<AddMoreOptionProps> = ({ icon, text }) => {
  return (
    <div className="m-addMoreOption">
      <div className="m-addMoreOption__displayItem">
        <Icon icon={icon} size="xLMedium" />

        <div className="m-addMoreOption__displayItem__icon">
          <Text color="green" fontWeight="regular" lineHeight="line20" type="font14" textAlign="center">
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
};
