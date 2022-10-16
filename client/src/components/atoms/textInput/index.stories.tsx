import { Story, Meta } from '@storybook/react/types-6-0';
import { TextInput, TextInputProps } from './Index';
import { ICONS } from '../../../settings/settings';

export default {
  title: 'components/atoms/textInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = args => <TextInput {...args} />;

export const searchInputWithIcon = Template.bind({});
searchInputWithIcon.args = {
  prefix: ICONS.searchIcon,
  placeholder: 'Type here...',
  inputFontSize: 'small',
  setValue: () => {},
};

export const input = Template.bind({});
input.args = {
  placeholder: 'Type question...',
  inputFontSize: 'medium',
  setValue: () => {},
};

export const inputWithBackgroundAndBorder = Template.bind({});
inputWithBackgroundAndBorder.args = {
  placeholder: 'Type question...',
  inputFontSize: 'medium',
  borderColor: 'green',
  backgroundColor: 'lightGreen',
  setValue: () => {},
};

export const inputWithValue = Template.bind({});
inputWithValue.args = {
  inputFontSize: 'medium',
  value: 'Node js',
  setValue: () => {},
};
