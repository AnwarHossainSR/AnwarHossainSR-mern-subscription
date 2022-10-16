import { Story, Meta } from '@storybook/react/types-6-0';
import { Note, NoteProps } from '.';
import { ICONS } from '../../../settings/settings';

export default {
  title: 'components/atoms/Note',
  component: Note,
  argTypes: { handleClick: { action: 'handleClick' } },
} as Meta;

const Template: Story<NoteProps> = args => <Note {...args} />;

export const NoteText = Template.bind({});
NoteText.args = {
  note: 'Note: Only .txt file is allowed for input/output file upload.',
  iconSrc: ICONS.crossIcon,
  altTag: 'Cross Icon',
};

