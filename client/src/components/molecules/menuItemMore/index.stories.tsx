import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItemMore, MenuItemMoreProps } from '.';

export default {
  title: 'components/molecules/MenuItemMore',
  component: MenuItemMore,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
} as Meta;

const Template: Story<MenuItemMoreProps> = args => <MenuItemMore {...args} />;

export const AddQuestion = Template.bind({});
AddQuestion.args = {
  menuTitle: 'Add Question',
  isActive: false,
};

export const QuestionList = Template.bind({});
QuestionList.args = {
  menuTitle: 'Question List',
  isActive: true,
};

export const PendingList = Template.bind({});
PendingList.args = {
  menuTitle: 'Pending List',
  isActive: false,
};

export const AdvanceSearch = Template.bind({});
AdvanceSearch.args = {
  menuTitle: 'Advance Search',
  isActive: false,
};

