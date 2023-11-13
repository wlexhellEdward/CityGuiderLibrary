import type { Meta, StoryObj } from '@storybook/react';
import SearchPlace from '../components/SearchPlace';
import { Places } from '../consts/places';

const meta = {
    title: 'Cards/SearchPlace',
    component: SearchPlace,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        searchPlace: [

        ]
    },
} satisfies Meta<typeof SearchPlace>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        searchPlace: Places[0],
        isSelected: false,
    }
}
export const Selected: Story = {
    args: {
        searchPlace: Places[0],
        isSelected: true
    }
}



