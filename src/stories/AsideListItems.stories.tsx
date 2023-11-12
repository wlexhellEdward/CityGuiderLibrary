import type { Meta, StoryObj } from '@storybook/react';
import { AsideListItems } from '../components/AsideListItems';

const meta = {
    title: 'SideBar/AsideListItems',
    component: AsideListItems,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currentStatus: {
            type: 'string',
            description: 'a variable that indicates the current state of the sidebar',
            options: ['close', 'favorites', 'search'],
            control: 'select'
        },
        handleSetCurrentStatus:{
            type:'function',
            description:'callback to switch the current status'
        }
    },
} satisfies Meta<typeof AsideListItems>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentStatus: 'close',
        handleSetCurrentStatus:()=>{}
    }
}
export const OpenFavorite: Story = {
    args: {
        currentStatus: 'favorites',
        handleSetCurrentStatus:()=>{}
    }
}
export const OpenSearch: Story = {
    args: {
        currentStatus: 'search',
        handleSetCurrentStatus:()=>{}
    }
}


