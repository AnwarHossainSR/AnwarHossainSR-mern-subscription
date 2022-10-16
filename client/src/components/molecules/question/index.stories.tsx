import { Story, Meta } from '@storybook/react/types-6-0';
import { Question, QuestionProps } from '.';

export default {
  title: 'components/molecules/Question',
  component: Question,
} as Meta;

const Template: Story<QuestionProps> = (args) => <Question {...args} />;

export const AskedQuestion = Template.bind({});


AskedQuestion.args = {
  title: 'Questions:',
  questionType: 'What is NodeJS?',
  createChildren: "Created",
  createDate: new Date("Aug 03 2022"),
  modifyChildren: "Last Modified",
  modifyDate: new Date("Sep 03 2022"),

};

