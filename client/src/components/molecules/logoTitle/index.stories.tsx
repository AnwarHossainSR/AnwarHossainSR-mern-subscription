import { Story, Meta } from '@storybook/react/types-6-0';
import { LogoTitle, LogoTitleProps } from '.';

export default {
  title: 'components/molecules/LogoTitle',
  component: LogoTitle,
  argTypes: { handleClick: { action: 'handleClick' } },
} as Meta;

const Template: Story<LogoTitleProps> = args => <LogoTitle {...args} />;

export const LogoAndTitle = Template.bind({});
LogoAndTitle.args = {
  title: 'SMART CBT',
};
