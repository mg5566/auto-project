import type { Meta, StoryObj } from '@storybook/vue3';
import NavBar from './NavBar.vue';

const meta = {
  title: 'Organization/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
