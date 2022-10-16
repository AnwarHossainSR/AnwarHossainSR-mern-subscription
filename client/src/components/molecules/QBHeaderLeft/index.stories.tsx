import { Meta, Story } from '@storybook/react/types-6-0';
import { QBHeaderleft, QBHeaderLeftProps } from '.';

export default {
  title: 'components/molecules/QBHeaderleft',
  component: QBHeaderleft,
} as Meta;

const Template: Story<QBHeaderLeftProps> = args => <QBHeaderleft {...args} />;

// stories font 24
export const QuestionBankHeader = Template.bind({});
QuestionBankHeader.args = {
  isImage:true,
  headerText: 'List of All Questions',
  bodyTextOne: '216 New Questions',
  bodyTextTwo: 'this month',
};
