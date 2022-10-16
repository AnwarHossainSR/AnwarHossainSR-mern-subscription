import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';
import { ICONS } from '../../../settings/settings';

export default {
  title: 'components/atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  children: 'Normal',
  type: 'primary',
  isDisabled: false,
  variant: 'medium',
};
NormalButton.argTypes = {
  variant: {
    options: ['large', 'medium', 'small'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'outlined'],
    control: { type: 'radio' },
  },
};
export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined',
  type: 'outlined',
  isDisabled: false,
  isFullWidth: false,
  color: 'red',
  variant: 'medium',
  fontWeight:'regular'
};
OutlinedButton.argTypes = {
  variant: {
    options: ['large', 'medium', 'small'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'outlined'],
    control: { type: 'radio' },
  },
  color: {
    options: ['red', 'green', 'orange', 'primary','grayLight'],
    control: { type: 'radio' },
  },
  fontWeight: {
    options: ['regular','medium','semi-bold','bold'],
    control: { type: 'radio' },
  }
};

export const ColoredButton = Template.bind({});
ColoredButton.args = {
  children: 'Colored',
  isFullWidth: false,
  bgColor: 'bgRed',
  variant: 'medium',
};
ColoredButton.argTypes = {
  variant: {
    options: ['large', 'medium', 'small'],
    control: { type: 'radio' },
  },
  bgColor: {
    options: ['bgRed', 'bgGreen', 'bgOrange', 'bgPrimary'],
    control: { type: 'radio' },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  bgColor: 'bgGreen',
  variant: 'iconSmall',
  isRounded: true,
  imgSrc: ICONS.viewIcon,
};
IconButton.argTypes = {
  variant: {
    options: ['iconSmall'],
    control: { type: 'radio' },
  },
  bgColor: {
    options: ['bgRed', 'bgGreen', 'bgOrange', 'bgPrimary'],
    control: { type: 'radio' },
  },
};
export const MenuButton = Template.bind({});
MenuButton.args = {
  bgColor: 'bgGrayLight',
  variant: 'iconLarge',
  imgSrc: ICONS.arrowUpIcon,
};
MenuButton.argTypes = {
  variant: {
    options: ['iconLarge'],
    control: { type: 'radio' },
  },
  bgColor: {
    options: ['bgGrayLight', 'bgGrayLighter'],
    control: { type: 'radio' },
  },
};

export const MenuCollapseButton = Template.bind({});
MenuCollapseButton.args = {
  bgColor: 'bgPrimaryTwo',
  variant: 'iconLarge',
  imgSrc: ICONS.collapseIcon,
  isSemiRounded: true,
};
MenuCollapseButton.argTypes = {
  variant: {
    options: ['iconLarge'],
    control: { type: 'radio' },
  },
  bgColor: {
    control: { type: 'radio' },
  },
};

export const IconWithTextButton = Template.bind({});
IconWithTextButton.args = {
  type: 'primary',
  variant: 'iconText',
  imgSrc: ICONS.viewIcon,
  children: 'Icon with Text',
  color: 'primary',
  isIconSwitch: true
};
IconWithTextButton.argTypes = {
  type: {
    options: ['primary', 'outlined'],
    control: { type: 'radio' },
  },
  bgColor: {
    options: ['bgRed', 'bgGreen', 'bgOrange', 'bgPrimary'],
    control: { type: 'radio' },
  },
  color: {
    options: ['red', 'green', 'orange', 'primary', 'secondaryOne', 'secondaryTwo'],
    control: { type: 'radio' },
  },
  fontWeight: {
    options: ['regular','medium','semi-bold','bold'],
    control: { type: 'radio' },
  }
};

export const BorderlessIconWithTextButton = Template.bind({});
BorderlessIconWithTextButton.args = {
  type: 'outlined',
  variant: 'iconText',
  borderless: true,
  imgSrc: ICONS.deleteIcon,
  children: 'Delete',
  color: 'red',
};
BorderlessIconWithTextButton.argTypes = {
  type: {
    options: ['primary', 'outlined'],
    control: { type: 'radio' },
  },
  color: {
    options: ['red', 'green', 'orange', 'primary'],
    control: { type: 'radio' },
  },
};
