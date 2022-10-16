import { Story, Meta } from '@storybook/react/types-6-0';
import { Toggle, ToggleProps } from '.';

export default {
  title: 'components/atoms/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const ToggleChecked = Template.bind({});
ToggleChecked.args = {
  isChecked: true
}
export const ToggleUnchecked = Template.bind({});
