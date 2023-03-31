import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/ThemeDecorator'
import { Text } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Text',
  title: 'Title',
}
Primary.decorators = [ThemeDecorator('light')]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  text: 'Text',
  title: 'Title',
}
PrimaryDark.decorators = [ThemeDecorator('dark')]
