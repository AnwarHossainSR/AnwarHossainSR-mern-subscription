import { ICONS } from '../../../settings/settings';
import { Icon, IconProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
  argTypes: { handleClick: { action: 'handleClick' } },
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

// 2 X 23
export const lineBarSmallIcon = Template.bind({});
lineBarSmallIcon.args = {
  size: 'linebarSmall',
  icon: ICONS.lineBarSmallIcon,
};

// 2 X 37
export const lineBarIcon = Template.bind({});
lineBarIcon.args = {
  size: 'linebar',
  icon: ICONS.lineBarIcon,
};

// 3.82 X 6.25
export const upArrowIconSmallSlateGray = Template.bind({});
upArrowIconSmallSlateGray.args = {
  size: 'xSmall',
  icon: ICONS.upArrowIconSmallSlateGray,
  isHover: true,
};

export const downArrowIconSmallSlateGray = Template.bind({});
downArrowIconSmallSlateGray.args = {
  size: 'xSmall',
  icon: ICONS.downArrowIconSmallSlateGray,
  isHover: true,
};

// 5.77 X 10
export const paginationArrowLeft = Template.bind({});
paginationArrowLeft.args = {
  size: 'paginationArrow',
  icon: ICONS.paginationArrowLeftIcon,
  isHover: true,
};

export const paginationArrowRight = Template.bind({});
paginationArrowRight.args = {
  size: 'paginationArrow',
  icon: ICONS.paginationArrowRightIcon,
  isHover: true,
};

// 6.7 X 11.64
export const rightArrowIcon = Template.bind({});
rightArrowIcon.args = {
  size: 'mediumArrow',
  icon: ICONS.rightArrowLargeIcon,
  isHover: true,
};

export const leftArrowIcon = Template.bind({});
leftArrowIcon.args = {
  size: 'mediumArrow',
  icon: ICONS.leftArrowLargeIcon,
  isHover: true,
};

// 5.74 X 9.98
export const downArrowSmallIcon = Template.bind({});
downArrowSmallIcon.args = {
  size: 'lMediumArrow',
  icon: ICONS.downArrowSmallIcon,
  isHover: true,
};

// 10 X 10
export const dropDownRightArrow = Template.bind({});
dropDownRightArrow.args = {
  size: 'dropDownRighArrow',
  icon: ICONS.dropDownRightIcon,
  changeColor: true,
  activeIcon: 'iconColorBlueViolet',
};

// 12 X 12
export const downArrowMediumIcon = Template.bind({});
downArrowMediumIcon.args = {
  size: 'downArrow',
  icon: ICONS.downArrowMediumIcon,
  isHover: true,
};

// 13.06 X 10.08
export const advancedFilter = Template.bind({});
advancedFilter.args = {
  size: 'eSMedium',
  icon: ICONS.advancedFilterIcon,
  isHover: true,
};

// 14 X 14
export const doubleArrowLeft = Template.bind({});
doubleArrowLeft.args = {
  size: 'sMedium',
  icon: ICONS.arrowLeftDoubleIcon,
  isHover: true,
};

export const doubleArrowRight = Template.bind({});
doubleArrowRight.args = {
  size: 'sMedium',
  icon: ICONS.arrowRightDoubleIcon,
  isHover: true,
};

export const editBlack = Template.bind({});
editBlack.args = {
  size: 'sMedium',
  icon: ICONS.editIconBlack,
  isHover: true,
};

export const questionBankRighArrow = Template.bind({});
questionBankRighArrow.args = {
  size: 'sMedium',
  icon: ICONS.questionBankRighArrowIcon,
  isHover: true,
};

// 14 X 15
export const searchSmallIcon = Template.bind({});
searchSmallIcon.args = {
  size: 'searchSmall',
  icon: ICONS.searchSmallIcon,
  isHover: true,
};

// 15 X 15
export const profile = Template.bind({});
profile.args = {
  size: 'mMedium',
  icon: ICONS.profileIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const ReportManagement = Template.bind({});
ReportManagement.args = {
  size: 'mMedium',
  icon: ICONS.reportManagementIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const CandidateManagement = Template.bind({});
CandidateManagement.args = {
  size: 'mMedium',
  icon: ICONS.candidateManagementIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const ExamManager = Template.bind({});
ExamManager.args = {
  size: 'mMedium',
  icon: ICONS.examManagerIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const settingMenuIcon = Template.bind({});
settingMenuIcon.args = {
  size: 'mMedium',
  icon: ICONS.settingsNotActiveIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const questionBankIcon = Template.bind({});
questionBankIcon.args = {
  size: 'mMedium',
  icon: ICONS.questionBankIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const dashboard = Template.bind({});
dashboard.args = {
  size: 'mMedium',
  icon: ICONS.dashboardIcon,
  changeColor: true,
  activeIcon: 'iconColorWhite',
};

export const circleIcon = Template.bind({});
circleIcon.args = {
  size: 'mMedium',
  icon: ICONS.circleIcon,
};

// 16 X 16
export const crossSmallIcon = Template.bind({});
crossSmallIcon.args = {
  size: 'mXMedium',
  icon: ICONS.corssIconSmall,
  isHover: true,
};

export const notificationIconGreen = Template.bind({});
notificationIconGreen.args = {
  size: 'mXMedium',
  icon: ICONS.notificationsIconGreen,
  isHover: true,
};

export const replyIcon = Template.bind({});
replyIcon.args = {
  size: 'mXMedium',
  icon: ICONS.replyIcon,
  isHover: true,
};

// 17 X 17
export const searchIcon = Template.bind({});
searchIcon.args = {
  size: 'lMedium',
  icon: ICONS.iconSearch,
};

export const addIconBlack = Template.bind({});
addIconBlack.args = {
  size: 'lMedium',
  icon: ICONS.plusBlackIcon,
  isHover: true,
};

export const deleteRed = Template.bind({});
deleteRed.args = {
  size: 'lMedium',
  icon: ICONS.deleteRedIcon,
  isHover: true,
};

// 17.41 X 9.17
export const downArrowLarge = Template.bind({});
downArrowLarge.args = {
  size: 'largeArrowDown',
  icon: ICONS.downArrowLargeIcon,
  isHover: true,
};

// 18 X 18
export const clearForm = Template.bind({});
clearForm.args = {
  size: 'xLMedium',
  icon: ICONS.clearFormIcon,
  isHover: true,
};

export const goToQuestionList = Template.bind({});
goToQuestionList.args = {
  size: 'xLMedium',
  icon: ICONS.goToQuestionListIcon,
  isHover: true,
};

export const AddIconGreen = Template.bind({});
AddIconGreen.args = {
  size: 'xLMedium',
  icon: ICONS.plusGreenIcon,
  isHover: true,
};

export const Notification = Template.bind({});
Notification.args = {
  size: 'xLMedium',
  icon: ICONS.notificationsIconDefault,
  isHover: true,
};

export const personIcon = Template.bind({});
personIcon.args = {
  size: 'xLMedium',
  icon: ICONS.personIcon,
  isHover: true,
};

export const deleteIcon = Template.bind({});
deleteIcon.args = {
  size: 'xLMedium',
  icon: ICONS.deleteIconNew,
  isHover: true,
};

export const editIcon = Template.bind({});
editIcon.args = {
  size: 'xLMedium',
  icon: ICONS.editIcon,
  isHover: true,
};

export const addIcon = Template.bind({});
addIcon.args = {
  size: 'xLMedium',
  icon: ICONS.plusIconWhite,
  isHover: true,
};

export const ShowIcon = Template.bind({});
ShowIcon.args = {
  size: 'xLMedium',
  icon: ICONS.hideBlackIcon,
  isHover: true,
};

export const eyeView = Template.bind({});
eyeView.args = {
  size: 'xLMedium',
  icon: ICONS.eyeViewIcon,
  isHover: true,
};

export const HideIcon = Template.bind({});
HideIcon.args = {
  size: 'xLMedium',
  icon: ICONS.hideIcon,
  isHover: true,
};

export const settingIcon = Template.bind({});
settingIcon.args = {
  size: 'xLMedium',
  icon: ICONS.settingsIcon,
  isHover: true,
};

export const createNewQuestion = Template.bind({});
createNewQuestion.args = {
  size: 'xLMedium',
  icon: ICONS.questionCreateIconNotActive,
  isHover: true,
};

export const importQuestion = Template.bind({});
importQuestion.args = {
  size: 'xLMedium',
  icon: ICONS.importIcon,
  isHover: true,
};

// 20 X 20
export const corssIcon = Template.bind({});
corssIcon.args = {
  size: 'eSLarge',
  icon: ICONS.crossIcon,
  isHover: true,
};

export const createQuestionSet = Template.bind({});
createQuestionSet.args = {
  size: 'eSLarge',
  icon: ICONS.createQuestionSetIcon,
  isHover: true,
};

// 22 X 22
export const dummyDataIcon = Template.bind({});
dummyDataIcon.args = {
  size: 'sLarge',
  icon: ICONS.dummyDataIcon,
};

export const upComingExam = Template.bind({});
upComingExam.args = {
  size: 'sLarge',
  icon: ICONS.upComingExam,
};

export const TotalQuestion = Template.bind({});
TotalQuestion.args = {
  size: 'sLarge',
  icon: ICONS.totalQuestion,
};

export const TotalQuestionSet = Template.bind({});
TotalQuestionSet.args = {
  size: 'sLarge',
  icon: ICONS.totalQuestionSet,
};

// 24 X 24
export const profileNoImage = Template.bind({});
profileNoImage.args = {
  size: 'eLarge',
  icon: ICONS.ProfileNotImageIcon,
  isHover: true,
};

export const upArrowLarge = Template.bind({});
upArrowLarge.args = {
  size: 'eLarge',
  icon: ICONS.upArrowLargeIcon,
  isHover: true,
};
