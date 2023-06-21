
import type { Meta, StoryObj } from '@storybook/vue3';
import PlusButton from './PlusButton.vue';

const meta = {
  title: 'Buttons/PlusButton',
  component: PlusButton,
  argTypes: {
    buttonType: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info', undefined] },
  },
  args: { buttonType: 'primary' },
} satisfies Meta<typeof PlusButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonType: undefined,
  }
}
