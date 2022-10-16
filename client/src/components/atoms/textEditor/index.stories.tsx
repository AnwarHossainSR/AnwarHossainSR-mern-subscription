import { Story, Meta } from '@storybook/react/types-6-0';
import { TextEditor, TextEditorProps } from '.';

export default {
  title: 'components/atoms/textEditor',
  component: TextEditor,
} as Meta;

const Template: Story<TextEditorProps> = args => <TextEditor {...args} />;

export const TextEditors = Template.bind({});

TextEditors.args = {
  value: '',
  label: 'Message',
  placeholder: 'Write down your code...',
  isCustomEditor: true,
  labelColor: "black-active",
  labelFontWeight: "bold",
  setFieldValue: () => {},
};
