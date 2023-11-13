import type { Meta, StoryObj } from '@storybook/react';
import { RouteInfo } from '../components/RouteInfo';

const meta = {
    title: 'Cards/RouteInfo',
    component: RouteInfo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        progressTravel: {
            type: 'number',
            description: 'variable for progress bar',
            control: { type: 'range' },
            defaultValue: 0
        },
        time: {
            type: 'string',
            description: 'A variable that determines the time to the end of the route',
            options: ['0h 00m', '1h 30m', '2h 15m', '3h 45m'],
            control: { type: 'select' },
            defaultValue: '0h 00m'
        },
        distanceRemaining: {
            type: 'string',
            description: 'A variable that determines the distance to the end of the route',
            defaultValue: '0'
        },
        handleClickClose: {
            type: 'function',
            description: 'callback for close routeInfo',
            defaultValue: () => { }
        },

    },
} satisfies Meta<typeof RouteInfo>;

export default meta

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        progressTravel: 0,
        time: '0h 00m',
        distanceRemaining: '0',
        handleClickClose: () => { }
    }
}

export const Fiiled: Story = {
    args: {
        progressTravel: 35,
        time: '1h 23m',
        distanceRemaining: '2',
        handleClickClose: () => { }
    }
}

