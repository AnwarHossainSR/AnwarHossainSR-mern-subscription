import { Logo } from 'components/atoms/logo';
import { Text } from 'components/atoms/text';
import { LOGO } from '../../../settings/settings';
export interface LogoTitleProps {
  title: string;
  handleClick?: () => void;
}
export const LogoTitle: React.FC<LogoTitleProps> = ({ title, handleClick }) => {
  return (
    <div className="m-logoTitle" onClick={handleClick}>
      <div className="m-logoTitle__logo">
        <Logo altTag="bjit logo" imageSrc={LOGO.logo} />
      </div>

      <Text color="white" fontWeight="bold" lineHeight="line26" type="font17" textAlign="left">
        {title}
      </Text>
    </div>
  );
};

