import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/store-decorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { LoginModal } from './LoginModal'

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  container: 'root',
}
Light.decorators = [
  ThemeDecorator('light'),
  StoreDecorator({ authForm: { username: 'Test', password: '1234' } }),
]

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  container: 'root',
}
Dark.decorators = [
  ThemeDecorator('dark'),
  StoreDecorator({ authForm: { username: 'Test', password: '1234' } }),
]
