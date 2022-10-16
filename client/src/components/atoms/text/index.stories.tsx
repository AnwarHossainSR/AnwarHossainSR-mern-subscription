import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'components/atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

// stories font 24
export const font24BoldBlack = Template.bind({});
font24BoldBlack.args = {
  children: 'Create Question',
  type: 'font24',
  color: 'black-active',
  fontWeight: 'bold',
  lineHeight: 'line33',
  textAlign: 'left'
};

font24BoldBlack.argTypes = {
  textAlign: {
    options: ['left', 'center', 'right', 'justify'],
    control: { type: 'radio' },
  },
}

// stories font 18
export const font18BoldPrimary = Template.bind({});
font18BoldPrimary.args = {
  children: 'Question:',
  type: 'font18',
  color: 'primary',
  fontWeight: 'bold',
  lineHeight: 'line25',
  textAlign: 'left'
};
font18BoldPrimary.argTypes = {
  textAlign: {
    options: ['left', 'center', 'right', 'justify'],
    control: { type: 'radio' },
  },
}

export const font18BoldBlack = Template.bind({});
font18BoldBlack.args = {
  children: 'Exam Overview',
  type: 'font18',
  color: 'black-active',
  fontWeight: 'bold',
  lineHeight: 'line25',
  textAlign: 'left'
};

font18BoldBlack.argTypes = {
  textAlign: {
    options: ['left', 'center', 'right', 'justify'],
    control: { type: 'radio' },
  },
}

// stories font 17
export const font17BoldWhite = Template.bind({});
font17BoldWhite.args = {
  children: 'SMART CBT',
  type: 'font17',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 'line26',
  textAlign: 'left'
};

font17BoldWhite.argTypes = {
  textAlign: {
    options: ['left', 'center', 'right', 'justify'],
    control: { type: 'radio' },
  },
}

// stories font 16
export const font16BoldBlack = Template.bind({});
font16BoldBlack.args = {
  children: 'Edit Question',
  type: 'font16',
  color: 'black-active',
  fontWeight: 'bold',
  lineHeight: 'line22',
  textAlign: 'left'
};

font16BoldBlack.argTypes = {
  textAlign: {
    options: ['left', 'center', 'right', 'justify'],
    control: { type: 'radio' },
  },
}

export const font16MediumBlack = Template.bind({});
font16MediumBlack.args = {
  children: 'What is NodeJS?',
  type: 'font16',
  color: 'black-active',
  fontWeight: 'medium',
  lineHeight: 'line22',
};

export const font16RegularBlack = Template.bind({});
font16RegularBlack.args = {
  children: 'Are you sure to edit the question?',
  type: 'font16',
  color: 'black-active',
  fontWeight: 'regular',
  lineHeight: 'line22',
};

// stories font 15
export const font15RegularCinnabar = Template.bind({});
font15RegularCinnabar.args = {
  children: '55',
  type: 'font15',
  color: 'cinnabar',
  fontWeight: 'regular',
  lineHeight: 'line21',
};

// stories font 14
export const font14BoldWhite = Template.bind({});
font14BoldWhite.args = {
  children: 'Exam Manager',
  type: 'font14',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 'line21',
};

export const font14BoldBlack = Template.bind({});
font14BoldBlack.args = {
  children: 'Exam Manager',
  type: 'font14',
  color: 'black-active',
  fontWeight: 'bold',
  lineHeight: 'line21',
};

export const font14BoldSlateGray = Template.bind({});
font14BoldSlateGray.args = {
  children: 'Sign In',
  type: 'font14',
  color: 'slate-gray',
  fontWeight: 'bold',
  lineHeight: 'line21',
};

export const font14BoldGrayLight = Template.bind({});
font14BoldGrayLight.args = {
  children: 'Upcoming Exam',
  type: 'font14',
  color: 'gray-light',
  fontWeight: 'bold',
  lineHeight: 'line21',
};

export const font14BoldGreen = Template.bind({});
font14BoldGreen.args = {
  children: '4 Exams',
  type: 'font14',
  color: 'green',
  fontWeight: 'bold',
  lineHeight: 'line20',
};

export const font14MediumBlack = Template.bind({});
font14MediumBlack.args = {
  children: 'Used In',
  type: 'font14',
  color: 'black-active',
  fontWeight: 'medium',
  lineHeight: 'line20',
};

export const font14RegularGreen = Template.bind({});
font14RegularGreen.args = {
  children: '(Correct)',
  type: 'font14',
  color: 'green',
  fontWeight: 'regular',
  lineHeight: 'line20',
};

export const font14RegularBlack = Template.bind({});
font14RegularBlack.args = {
  children: '“Looks good to me”',
  type: 'font14',
  color: 'black-active',
  fontWeight: 'regular',
  lineHeight: 'line21',
};

export const font14RegularBlueBayoux = Template.bind({});
font14RegularBlueBayoux.args = {
  children: 'What is PHP?',
  type: 'font14',
  color: 'blue-bayoux',
  fontWeight: 'regular',
  lineHeight: 'line20',
};

export const font14RegularPumpkin = Template.bind({});
font14RegularPumpkin.args = {
  children: 'EX2021, EX2022',
  type: 'font14',
  color: 'pumpkin',
  fontWeight: 'regular',
  lineHeight: 'line20',
};

export const font14RegularSlateGray = Template.bind({});
font14RegularSlateGray.args = {
  children: 10,
  type: 'font14',
  color: 'slate-gray',
  fontWeight: 'regular',
  lineHeight: 'line20',
};

export const font14RegularSlateGray16 = Template.bind({});
font14RegularSlateGray16.args = {
  children: 'Showing 9 questions of total 55',
  type: 'font14',
  color: 'slate-gray',
  fontWeight: 'regular',
  lineHeight: 'line16',
};

export const font14RegularSlateGrayItalic = Template.bind({});
font14RegularSlateGrayItalic.args = {
  children: '(Mininum 1min and maximum 10 min)',
  type: 'font14',
  color: 'slate-gray',
  fontWeight: 'regular',
  fontStyle: 'italic',
  lineHeight: 'line20',
};

// stories font 13
export const font13RegularGrayLight = Template.bind({});
font13RegularGrayLight.args = {
  children: 'Type here...',
  type: 'font13',
  color: 'gray-light',
  fontWeight: 'regular',
  lineHeight: 'line20',
};

export const font13RegularGrayLightItalic = Template.bind({});
font13RegularGrayLightItalic.args = {
  children: 'Last Modified: Sep 03 2022',
  type: 'font13',
  color: 'gray-light',
  fontWeight: 'regular',
  fontStyle: 'italic',
  lineHeight: 'line20',
};

// stories font 12
export const font12BoldGrayLight = Template.bind({});
font12BoldGrayLight.args = {
  children: '1 JULY 4:00 PM',
  type: 'font12',
  color: 'gray-light',
  fontWeight: 'bold',
  lineHeight: 'line18',
};

export const font12BoldWhite = Template.bind({});
font12BoldWhite.args = {
  children: 'QB',
  type: 'font12',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 'line17',
};

export const font12BoldSlateGray = Template.bind({});
font12BoldSlateGray.args = {
  children: 'Super Admin',
  type: 'font12',
  color: 'slate-gray',
  fontWeight: 'bold',
  lineHeight: 'line17',
};

export const font12RegularGreen = Template.bind({});
font12RegularGreen.args = {
  children: 'No Updates',
  type: 'font12',
  color: 'green',
  fontWeight: 'regular',
  lineHeight: 'line20',
};

export const font12RegularSlateGray18 = Template.bind({});
font12RegularSlateGray18.args = {
  children: 'Post: 10:33 AM, June 14, 2022',
  type: 'font12',
  color: 'slate-gray',
  fontWeight: 'regular',
  fontStyle: 'italic',
  lineHeight: 'line18',
};

export const font12RegularWhite = Template.bind({});
font12RegularWhite.args = {
  children: 'Collapse Menu',
  type: 'font12',
  color: 'white',
  fontWeight: 'regular',
  lineHeight: 'line18',
};

export const font12BoldBlack = Template.bind({});
font12BoldBlack.args = {
  children: 'ADD COMMENT',
  type: 'font12',
  color: 'black-active',
  fontWeight: 'regular',
  lineHeight: 'line18',
};

export const font12RegularSlateGray = Template.bind({});
font12RegularSlateGray.args = {
  children: 'React-hooks',
  type: 'font12',
  color: 'slate-gray',
  fontWeight: 'regular',
  lineHeight: 'line17',
};

// stories font 11
export const font11RegularGrayLight = Template.bind({});
font11RegularGrayLight.args = {
  children: 'TITLE',
  type: 'font11',
  color: 'gray-light',
  fontWeight: 'regular',
  lineHeight: 'line16',
  textAlign: 'left'
};

font11RegularGrayLight.argTypes = {
  textAlign: {
    options: ['left', 'center', 'right', 'justify'],
    control: { type: 'radio' },
  },
}
