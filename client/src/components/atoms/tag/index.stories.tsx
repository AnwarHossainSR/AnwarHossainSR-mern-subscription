import { IMAGES } from '../../../settings/settings';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag, TagProps } from '.';

export default {
  title: 'components/atoms/Tag',
  component: Tag,
  argTypes: { handleClick: { action: "handleClick" } }
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const HoverTag = Template.bind({});
HoverTag.args = {
  children: 'React Js',
  border: 'light',
  radius: 'lightRound',
  color: 'black',
  backgroundColor: 'muted',
  fontSize: 'small',
  fontWeight: 'regular',
  padding: 'padSmall',
  isHover: true
};

export const RoleTag = Template.bind({});
RoleTag.args = {
  children: 'Super Admin',
  radius: 'round',
  color: 'darkGrey',
  fontSize: 'small',
  backgroundColor: 'secondary',
  padding: 'padMedium',
  fontWeight: 'bold',
};

export const StatusTag = Template.bind({});
StatusTag.args = {
  children: 'NEW',
  radius: 'semiRound',
  color: 'white',
  backgroundColor: 'warning',
  fontSize: 'small',
  padding: 'padLarge',
  fontWeight: 'bold',
};

export const StatusTagQB = Template.bind({});
StatusTagQB.args = {
  children: 'QB',
  radius: 'semiRound',
  color: 'white',
  backgroundColor: 'success',
  fontSize: 'small',
  padding: 'padLarge',
  fontWeight: 'bold',
};


export const StatusTagLightOS = Template.bind({});
StatusTagLightOS.args = {
  children: 'OS',
  radius: 'semiRound',
  color: 'white',
  backgroundColor: 'lightWarning',
  fontSize: 'small',
  padding: 'padLarge',
  fontWeight: 'bold',
};


export const ActionWithTag = Template.bind({});
ActionWithTag.args = {
  children: 'React-hooks',
  border: 'light',
  radius: 'lightRound',
  color: 'black',
  backgroundColor: 'muted',
  fontSize: 'small',
  fontWeight: 'regular',
  padding: 'padSmall',
  isCross: true,
  imageSrc: IMAGES.crossImage,
  altr: 'cross image',
  imageSize: 'smallImage',
};


export const ActionAnswareTag = Template.bind({});
ActionAnswareTag.args = {
  children: 'C',
  border: 'lightBlue',
  radius: 'lightRound',
  color: 'semiBlack',
  backgroundColor: 'mutedLight',
  fontSize: 'medium',
  fontWeight: 'regular',
  padding: 'padSemiLarge',
  isCross: true,
  imageSrc: IMAGES.crossBlackImage,
  altr: 'cross Pure Black image',
  imageSize: 'mediumImage',
};

export const Marks = Template.bind({});
Marks.args = {
  children: '15',
  border: 'light',
  radius: 'lightRound',
  color: 'semiGrey',
  fontSize: 'medium',
  backgroundColor: 'white',
  padding: 'padSmall',
  fontWeight: 'regular',
};

