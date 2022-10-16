import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalShow, ModalShowProps } from '.';

export default {
  title: 'components/molecules/modalShow',
  component: ModalShow,
} as Meta;

const Template: Story<ModalShowProps> = args => <ModalShow {...args} />;

export const EditModal = Template.bind({});

EditModal.args = {
  isModalShow: true,
  title: 'Edit Question',
  body: 'This question has already been used in the Exam. Are you sure to delete the question?',
  btnText: 'Edit',
  btnColor: 'bgOrange',
  modalToggle: () => {},
  isSuccess: () => {},
};

export const DeleteModal = Template.bind({});

DeleteModal.args = {
  isModalShow: true,
  title: 'Delete Question',
  body: 'Are you sure to delete the question?',
  btnText: 'Delete',
  btnColor: 'bgRed',
  modalToggle: () => {},
  isSuccess: () => {},
};
