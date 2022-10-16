import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'components/atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  children: 'Include Image',
  checked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  children: 'Include Image',

};
