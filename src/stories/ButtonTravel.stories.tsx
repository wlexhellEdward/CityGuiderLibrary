import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTravel } from '../components/ButtonTravel';

const meta = {
    title: 'Buttons/ButtonTravel',
    component: ButtonTravel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        handleClick: {
            type: 'function',
            description: 'callback at click',
            defaultValue: () => { }
        },
    },
} satisfies Meta<typeof ButtonTravel>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        handleClick: () => { }
    }
}

