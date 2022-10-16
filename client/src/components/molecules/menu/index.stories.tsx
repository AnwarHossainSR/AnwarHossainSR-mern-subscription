import { Story, Meta } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import { ICONS } from '../../../settings/settings';

export default {
  title: 'components/molecules/Menu',
  component: Menu,
  argTypes: { handleClick: { action: 'handleClick' } },
} as Meta;

const Template: Story<MenuProps> = args => <Menu {...args} />;

export const DashboardMenu = Template.bind({});
DashboardMenu.args = {
  iconSrc: ICONS.dashboardIcon,
  menuName: 'Dashboard',
};
export const QuestionBankMenu = Template.bind({});
QuestionBankMenu.args = {
  iconSrc: ICONS.questionBankIcon,
  menuName: 'Question Bank',
};
export const ExamManagerMenu = Template.bind({});
ExamManagerMenu.args = {
  iconSrc: ICONS.examManagerIcon,
  menuName: 'Exam Manager',
};
export const CandidateManagementMenu = Template.bind({});
CandidateManagementMenu.args = {
  iconSrc: ICONS.candidateManagementIcon,
  menuName: 'Candidate Management',
};
export const ReportManagementMenu = Template.bind({});
ReportManagementMenu.args = {
  iconSrc: ICONS.reportManagementIcon,
  menuName: 'Report Management',
};
export const ProfileMenu = Template.bind({});
ProfileMenu.args = {
  iconSrc: ICONS.profileIcon,
  menuName: 'Profile',
};
export const SettingsMenu = Template.bind({});
SettingsMenu.args = {
  iconSrc: ICONS.settingsNotActiveIcon,
  menuName: 'Settings',
};

