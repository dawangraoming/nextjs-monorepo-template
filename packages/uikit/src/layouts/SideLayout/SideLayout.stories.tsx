import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideLayout } from './index';

const Story: ComponentMeta<typeof SideLayout> = {
  title: 'Layouts/SideLayout',
  component: SideLayout,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template: ComponentStory<typeof SideLayout> = (args) => (
  <SideLayout {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  children: 'Hello World',
};

export default Story;
