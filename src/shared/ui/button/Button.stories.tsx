import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { Button } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  variant: 'primary',
  children: 'Button text',
}
PrimaryDark.decorators = [ThemeDecorator('dark')]
