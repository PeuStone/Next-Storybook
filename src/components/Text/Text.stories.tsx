import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs']
}
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Texto para ser modificado'
  }
}
