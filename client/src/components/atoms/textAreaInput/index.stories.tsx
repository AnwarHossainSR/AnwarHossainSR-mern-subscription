import { Story, Meta } from '@storybook/react/types-6-0';
import { TextAreaInput, textAreaInputProps } from './index';

const Template: Story<textAreaInputProps> = args => <TextAreaInput {...args} />;

export default {
  title: 'components/atoms/textAreaInput',
  component: TextAreaInput,
} as Meta;

export const textAreaWithSmallHeight = Template.bind({});
textAreaWithSmallHeight.args = {
  placeholder: 'Reply here...',
  textareaHeight: 'smallHeight',
  setValue: () => {},
};

export const textAreaWithMediumHeight = Template.bind({});
textAreaWithMediumHeight.args = {
  placeholder: 'Write here',
  textareaHeight: 'mediumHeight',
  setValue: () => {},
};

export const textAreaWithLargeHeight = Template.bind({});
textAreaWithLargeHeight.args = {
  placeholder: 'Write down your code...',
  textareaHeight: 'largeHeight',
  setValue: () => {},
};
