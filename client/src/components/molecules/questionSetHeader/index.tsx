import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';
import { ICONS } from 'settings/settings';
export interface questionSetHeaderProps {
  headerText?: string;
  markLabel: string;
  markValue?: string;
  alternateHeaderText: string;
  alternateValue: string;
  arrowImage: string;
}
export const QuestionSetHeader: React.FC<questionSetHeaderProps> = ({
  headerText,
  markLabel,
  markValue,
  alternateHeaderText,
  alternateValue,
  arrowImage,
}) => {
  return (
    <div className="m-questionSetHeader">
      <div className="m-questionSetHeader__title">
        <Text
          type="font18"
          children={headerText ? headerText : alternateHeaderText}
          fontWeight="medium"
          color={headerText?"black-active":"slate-gray"}
          lineHeight="line25"
          textAlign="left"
        />
      </div>
      <div className="m-questionSetHeader__group">
        <div className="m-questionSetHeader__group__textGroup">
          <div className="m-questionSetHeader__group__textGroup__label">
            <Text
              type="font15"
              children={markLabel}
              fontWeight="regular"
              color="black-active"
              lineHeight="line21"
              textAlign="left"
            />
          </div>
          <div className="m-questionSetHeader__group__textGroup__value">
            <Text
              type="font15"
              children={headerText && markValue ? markValue : alternateValue}
              fontWeight="bold"
              color="cinnabar"
              lineHeight="line25"
              textAlign="left"
            />
          </div>
        </div>

        <Button
          bgColor="bgRed"
          color="secondaryTwo"
          imgSrc={ICONS.saveIcon}
          type="outlined"
          variant="iconSmall"
          children="Save"
          fontWeight="regular"
        />
        <Button bgColor="bgGrayLighter" imgSrc={arrowImage} variant="iconLarge" />
      </div>
    </div>
  );
};
