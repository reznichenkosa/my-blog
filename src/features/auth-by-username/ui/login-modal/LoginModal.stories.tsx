import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { LoginModal } from './LoginModal'

export default {
  title: 'shared/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
}
Light.decorators = [ThemeDecorator('light')]

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
}
Dark.decorators = [ThemeDecorator('dark')]
