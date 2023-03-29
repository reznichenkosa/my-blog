import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { LoginForm } from './LoginForm'

export default {
  title: 'shared/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator('light')]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
