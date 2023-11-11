import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSearch } from '../components/ButtonSearch';

const meta = {
    title: 'Buttons/ButtonSearch',
    component: ButtonSearch,
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
} satisfies Meta<typeof ButtonSearch>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        handleClick: () => { }
    }
}


