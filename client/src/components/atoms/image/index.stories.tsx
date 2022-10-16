import { IMAGES } from '../../../settings/settings';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image,ImageProps } from '.';

export default {
  title: 'components/atoms/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const ProfileSmall = Template.bind({});
ProfileSmall.args = {
  imageSrc: IMAGES.profileImage,
  size: 'small',
  border: 'light',
  altTag: 'small profile',
  radius: 'round'
};

export const ProfileMedium = Template.bind({});
ProfileMedium.args = {
  imageSrc: IMAGES.profileImage,
  size: 'medium',
  border: 'light',
  altTag: 'small profile',
  radius: 'round'
};

export const ImageLarge = Template.bind({});
ImageLarge.args = {
  imageSrc: IMAGES.questionImage,
  size: 'large',
  border: 'dark',
  altTag: 'large image',
  radius: 'semiRound',
  isHover: true
};

export const ImageXLarge = Template.bind({});
ImageXLarge.args = {
  imageSrc: IMAGES.questionImage,
  size: 'xLarge',
  border: 'dark',
  altTag: 'large image',
  radius: 'semiRound',
  isHover: true
};

export const ImageXXLarge = Template.bind({});
ImageXXLarge.args = {
  imageSrc: IMAGES.questionImage,
  size: 'xxLarge',
  border: 'dark',
  altTag: 'large image',
  radius: 'semiRound',
  isHover: true
};
