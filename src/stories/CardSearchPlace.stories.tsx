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
        prevIsSelected: {
            type: 'boolean',
            description: 'Boolean variable for displaying the selection',
            defaultValue: false
        },
        searchPlace: [

        ]
    },
} satisfies Meta<typeof SearchPlace>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        prevIsSelected: false,
        searchPlace: Places[0]
    }
}
export const Selected: Story = {
    args: {
        prevIsSelected: true,
        searchPlace: Places[0]
    }
}



