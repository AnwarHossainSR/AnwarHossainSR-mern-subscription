import { LOGO } from '../../../settings/settings';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo,LogoProps } from '.';

export default {
  title: 'components/atoms/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const LogoBjit= Template.bind({});
LogoBjit.args = {
  imageSrc: LOGO.logo,
  altTag: 'bjit logo',
};
