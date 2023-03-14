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

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  children: 'Button text',
}

export const GhostDark = Template.bind({})
GhostDark.args = {
  variant: 'ghost',
  children: 'Button text',
}
GhostDark.decorators = [ThemeDecorator('dark')]

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  children: 'Button text',
}

export const SuccessDark = Template.bind({})
SuccessDark.args = {
  variant: 'success',
  children: 'Button text',
}
SuccessDark.decorators = [ThemeDecorator('dark')]

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Button text',
}

export const DangerDark = Template.bind({})
DangerDark.args = {
  variant: 'danger',
  children: 'Button text',
}
DangerDark.decorators = [ThemeDecorator('dark')]

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  children: 'Button text',
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  variant: 'outline',
  children: 'Button text',
}
OutlineDark.decorators = [ThemeDecorator('dark')]
