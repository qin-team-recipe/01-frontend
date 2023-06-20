import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { RecipeCard, RecipeCardProps } from "./RecipeCard";

export default {
  title: "Components/RecipeCard",
  component: RecipeCard,
} as Meta;

const Template: StoryFn<RecipeCardProps> = (args) => <RecipeCard {...args} />;

export const Default: StoryFn<RecipeCardProps> = Template.bind({});
Default.args = {
  favCountNumber: 12345,
  name: "Delicious Recipe",
  description: "This is a description of a delicious recipe.",
};
