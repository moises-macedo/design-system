import { Checkbox, CheckboxProps } from "./checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj = {};
