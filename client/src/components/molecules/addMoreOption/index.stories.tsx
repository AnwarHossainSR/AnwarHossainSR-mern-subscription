import { Meta, Story } from '@storybook/react/types-6-0';
import { ICONS } from 'settings/settings';
import { AddMoreOption, AddMoreOptionProps } from '.';

export default {
  title: 'components/molecules/addMoreOption',
  component: AddMoreOption,
} as Meta;

const Template: Story<AddMoreOptionProps> = args => <AddMoreOption {...args} />;

export const AddMoreOptionTemplate = Template.bind({});
AddMoreOptionTemplate.args = {
  icon: ICONS.plusGreenIcon,
  text: 'Add More Option',
};
