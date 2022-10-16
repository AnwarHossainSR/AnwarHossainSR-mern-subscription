import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageInput } from './Index';

const Template: Story<{}> = args => <ImageInput {...args} />;

export default {
  title: 'components/atoms/imageInput',
  component: ImageInput,
} as Meta;

export const imageInputSample = Template.bind({});
imageInputSample.args = {};
