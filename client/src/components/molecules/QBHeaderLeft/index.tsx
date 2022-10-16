import { Text } from 'components/atoms/text';
import { IMAGES } from 'settings/settings';


export interface QBHeaderLeftProps {
  isImage: boolean,
  headerText: string;
  bodyTextOne: string;
  bodyTextTwo: string;
}
export const QBHeaderleft: React.FC<QBHeaderLeftProps> = ({ isImage, headerText, bodyTextOne, bodyTextTwo }) => {
  return (
    <div className="m-QBHeaderleft">
      <div className="m-QBHeaderleft__header">
        <Text
          type="font18"
          children={headerText}
          fontWeight="bold"
          color="black-active"
          lineHeight="line25"
          textAlign="left"
        />
      </div>
      <div className="m-QBHeaderleft__group">
       {isImage && <img className="m-QBHeaderleft__group__image" src={IMAGES.checkmark} alt="checkmark_image" />}

        <div className="m-QBHeaderleft__group__text">
          <Text
            type="font14"
            children={bodyTextOne}
            fontWeight="bold"
            color="green"
            lineHeight="line20"
            textAlign="left"
          />
          <Text
            type="font14"
            children={bodyTextTwo}
            fontWeight="regular"
            color="gray-light"
            lineHeight="line20"
            textAlign="left"
          />
        </div>
      </div>
    </div>
  );
};
