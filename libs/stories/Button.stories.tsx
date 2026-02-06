// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/react";

const Button = () => <button>123</button>;

const meta = {
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
  },
};
