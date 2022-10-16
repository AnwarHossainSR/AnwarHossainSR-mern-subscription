import { Story, Meta } from '@storybook/react/types-6-0';
import { FileInput, fileInputProps } from './Index';

const Template: Story<fileInputProps> = args => <FileInput {...args} />;

export default {
  title: 'components/atoms/fileInput',
  component: FileInput,
} as Meta;

export const fileInputSample = Template.bind({});
fileInputSample.args = {
  componentType: 'fileInput',
  placeholder: 'No file chosen',
  fileInputFontSize: 'small',
};
