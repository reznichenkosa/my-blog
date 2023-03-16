import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  children: 'Lorem ipsum',
  isOpen: true,
  container: 'root',
}
Light.decorators = [ThemeDecorator('light')]

export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum',
  isOpen: true,
  container: 'root',
}
// Dark.decorators = [ThemeDecorator('dark')]
