import { Meta, Story } from '@storybook/react/types-6-0';
import { QuestionSetHeader, questionSetHeaderProps } from '.';
import { ICONS } from 'settings/settings';

export default {
  title: 'components/molecules/questionSetHeader',
  component: QuestionSetHeader,
} as Meta;

const Template: Story<questionSetHeaderProps> = args => <QuestionSetHeader {...args} />;

export const HeaderQuestionSet = Template.bind({});
HeaderQuestionSet.args = {
  headerText: 'Smart_CBT',
  markLabel: 'Total marks:',
  markValue: '',
  alternateHeaderText: 'No Question Set',
  alternateValue: '00',
  arrowImage: ICONS.downArrowMediumIcon
};
