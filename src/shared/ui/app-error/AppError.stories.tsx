import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { AppError } from './AppError'

export default {
  title: 'shared/AppError',
  component: AppError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppError>

const Template: ComponentStory<typeof AppError> = (args) => <AppError {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
