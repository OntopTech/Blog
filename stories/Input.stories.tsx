import Input from '../components/atoms/Input'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    /* 
    * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
    */
    title: 'Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});

InputStory.args = {

};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args