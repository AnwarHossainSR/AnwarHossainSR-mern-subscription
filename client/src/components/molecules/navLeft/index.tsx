import { Text } from 'components/atoms/text';

export interface NavLeftProps {
  pathTexts: string[];
  titleText: string;
}

export const NavLeft = ({ pathTexts, titleText }: NavLeftProps) => {
  return (
    <>
      <div className="m-navLeft">
        {pathTexts.map((text, index) =>
          index !== pathTexts.length - 1 ? (
            <div className="m-navLeft__pathText">
              <Text
                key={index}
                type="font12"
                children={text}
                fontWeight="regular"
                color="gray-light"
                lineHeight="line18"
                textAlign="left"
              />
              <Text
                key={index}
                type="font12"
                children="/"
                fontWeight="regular"
                color="primary"
                lineHeight="line18"
                textAlign="left"
              />
            </div>
          ) : (
            <div className="m-navLeft__pathText">
              <Text
                key={index}
                type="font12"
                children={text}
                fontWeight="regular"
                color="primary"
                lineHeight="line18"
                textAlign="left"
              />
            </div>
          )
        )}
      </div>
      <Text
        type="font24"
        children={titleText}
        fontWeight="bold"
        color="black-active"
        lineHeight="line33"
        textAlign="left"
      />
    </>
  );
};
