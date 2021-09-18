import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SayHelloProps, SayHello } from ".";

export default {
  title: "Components/SayHelloTest",
  component: SayHello,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SayHelloProps> = (args) => <SayHello {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { name: "Primary 😃" };