import type { Meta, StoryObj } from '@storybook/react';
import { PlateSearchPlaces } from '../components/PlateSearchPlaces';

const meta = {
    title: 'Plates/PlateSearch',
    component: PlateSearchPlaces,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        handleClickOnPlace:{
            type:'function',
            description:'callback on click at the  place',
            defaultValue:()=>{}
        }
    },
} satisfies Meta<typeof PlateSearchPlaces>;

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        handleClickOnPlace:()=>{}
    }
}



