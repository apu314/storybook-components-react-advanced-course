import { Meta, StoryObj } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel'

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' }
  }
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>


// Con esto creamos una copia del Template para cada uno de los distintos tipos 'Basic', 'AllCaps', 'Secondary'
export const Basic: Story = {
  args: {
    label: 'My Label',
    size: 'normal'
  }
}

export const AllCaps: Story = {
  args: {
    label: 'My Label',
    size: 'normal',
    allCaps: true,
  }
}

export const Secondary: Story = {
  args: {
    label: 'My Label',
    size: 'normal',
    color: 'secondary'
  }
}

export const Tertiary: Story = {
  args: {
    label: 'My Label',
    size: 'normal',
    color: 'tertiary'
  }
}
// export const AllCaps = Template.bind({})
// export const Secondary = Template.bind({})

export const CustomFontColor: Story = {
  args: {
    size: 'h1',
    label: 'My Label',
    fontColor: '#5517ac'
  }
}

export const CustomBackgroundColor: Story = {
  args: {
    size: 'h1',
    label: 'My Label',
    fontColor: '#eee',
    backgroundColor: '#000'
  }
}
