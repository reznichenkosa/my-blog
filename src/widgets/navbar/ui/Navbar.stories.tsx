import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/store-decorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  ThemeDecorator('light'),
  StoreDecorator({ authForm: { username: 'Test', password: '1234' } }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ authForm: { username: 'Test', password: '1234' } }),
]
