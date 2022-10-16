import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';
import { useEffect } from 'react';
import { defaultScroll, disableScroll } from './method';
import { ICONS } from 'settings/settings';

export interface ModalShowProps {
  isModalShow: boolean;
  title: string;
  body: string;
  btnText: string;
  btnColor: 'bgGreen' | 'bgOrange' | 'bgRed' | 'bgGrayLight' | 'bgPrimaryTwo' | 'primary';
  modalToggle: () => void;
  isSuccess: () => void;
}

export const ModalShow = ({
  isModalShow,
  title,
  body,
  btnText,
  btnColor = 'bgRed',
  modalToggle,
  isSuccess,
}: ModalShowProps) => {
  useEffect(() => {
    isModalShow ? disableScroll() : defaultScroll();
  }, [isModalShow]);
  return (
    <>
      <div className={`m-modalShow ${isModalShow ? 'm-modalShow--active' : 'm-modalShow--hide'}`}>
        <div className="m-modalShow__modal">
          <div className="m-modalShow__modal__header">
            <div className="m-modalShow__modal__header__title">
              <Text color="black-active" fontWeight="bold" lineHeight="line22" type="font16" textAlign="left">
                {title}
              </Text>
            </div>
            <div className="m-modalShow__modal__header__icon" onClick={() => modalToggle()}>
              <img className="m-modalShow__modal__header__icon__cross" src={ICONS.crossIcon} />
            </div>
          </div>
          <div className="m-modalShow__modal__divider"></div>
          <div className="m-modalShow__modal__body">
            <Text color="black-active" fontWeight="regular" lineHeight="line22" type="font16" textAlign="center">
              {body}
            </Text>
          </div>
          <div className="m-modalShow__modal__divider"></div>
          <div className="m-modalShow__modal__footer">
            <div className="m-modalShow__modal__footer__btn">
              <div className="m-modalShow__modal__footer__btn--cancel" onClick={() => modalToggle()}>
                <Button
                  children="Cancel"
                  type="outlined"
                  isFullWidth={false}
                  color="secondaryTwo"
                  variant="medium"
                  isRounded={false}
                  borderless={false}
                  isSemiRounded={false}
                />
              </div>
              <div className="m-modalShow__modal__footer__btn--delete" onClick={() => isSuccess()}>
                <Button
                  children={btnText}
                  isFullWidth={false}
                  bgColor={btnColor}
                  variant="medium"
                  isRounded={false}
                  borderless={false}
                  isSemiRounded={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
