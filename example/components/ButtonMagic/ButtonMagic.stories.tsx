import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonMagic } from '@component-ui';
import type { ButtonMagicProps } from '@component-ui';

export default {
  title: "Components/ButtonMagic",
  component: ButtonMagic,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonMagicProps> = (args) => <ButtonMagic {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { name: "Text Here!", type: "primary" };