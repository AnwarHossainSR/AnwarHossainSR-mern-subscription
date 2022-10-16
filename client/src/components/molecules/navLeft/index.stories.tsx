import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLeft, NavLeftProps } from '.';

export default {
  title: 'components/molecules/NavLeft',
  component: NavLeft,
} as Meta;

const Template: Story<NavLeftProps> = args => <NavLeft {...args} />;

export const createQuestion = Template.bind({});
createQuestion.args = {
  pathTexts: ['Home', 'Question Bank', 'Questions', 'Create'],
  titleText: 'Create Question',
};

export const questionList = Template.bind({});
questionList.args = {
  pathTexts: ['Home', 'Question', 'Bank', 'Question', 'List'],
  titleText: 'Question List',
};

export const questionPreview = Template.bind({});
questionPreview.args = {
  pathTexts: ['Home', 'Questions', 'Preview'],
  titleText: 'Question Preview',
};
