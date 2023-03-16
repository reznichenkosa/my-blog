import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import MainPage from './MainPage'

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator('light')]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator('dark')]
