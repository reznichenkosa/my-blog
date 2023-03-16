import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { AppLink } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Light = Template.bind({})
Light.args = {
  children: 'Test link',
}
Light.decorators = [ThemeDecorator('light')]

export const Dark = Template.bind({})
Dark.args = {
  children: 'Test link',
}
Dark.decorators = [ThemeDecorator('dark')]
