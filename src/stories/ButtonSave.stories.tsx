import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSave } from '../components/ButtonSave';

const meta = {
    title: 'Buttons/ButtonSave',
    component: ButtonSave,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isLoading: {
            type: 'boolean',
            description: 'Loading',
            defaultValue: false
        },
        handleClick: {
            type: 'function',
            description: 'callback on click',
            defaultValue: () => { }
        },
        isFavorite: {
            type: 'boolean',
            description: 'The parameter responsible for the presence in favorites',
            defaultValue: false
        },
    },
} satisfies Meta<typeof ButtonSave>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isLoading: false,
        handleClick: () => ({}),
        isFavorite: false
    }
}
export const InFavorite: Story = {
    args: {
        isLoading: false,
        handleClick: () => ({}),
        isFavorite: true
    }
}
export const Loading: Story = {
    args: {
        isLoading: true,
        handleClick: () => ({}),
        isFavorite: false
    }
}


