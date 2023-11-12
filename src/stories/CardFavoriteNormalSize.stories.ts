import type { Meta, StoryObj } from '@storybook/react';
import CardFavoriteNormalSize from '../components/CardFavoriteNormalSize';

const meta = {
    title: 'Cards/CardFavoriteNormalSize',
    component: CardFavoriteNormalSize,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        favoriteItem: {
            description: 'object with info of place',
        },
        handleSetIsOpen: {
            type: 'function',
            description: 'callback to toggle mode of size',
            defaultValue: () => { }
        },
        handleAddToFavorite: {
            type: 'function',
            description: 'callback to add in favorite',
            defaultValue: () => { }
        },
        isOpen: {
            type: 'boolean',
            description: '',
            defaultValue: false
        }
    },
} satisfies Meta<typeof CardFavoriteNormalSize>;

export default meta

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        favoriteItem: {
            id: "",
            type: [""],
            img: "",
            coordinates: {
                lat: 12,
                lng: 12
            },
            title: "",
            description: ""
        },
        isOpen: false,
        handleAddToFavorite: () => { },
        handleSetIsOpen: () => { }
    }
}

export const Filled: Story = {
    args: {
        favoriteItem: {
            id: "25",
            type: ["architecture"],
            img: "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAcJnMuF3gnwXIqA6F3tD7yMAM_oPK_Kyc0HECxVFkCTCYkRncw48Eb7l8kjz8aApNTzKFDupEuXIGSYYNM4jEvC1J55HhUsToT172_TweMNKAvdFXyME6ytuWcqR9Vzxkj7NgE-y0S3zcWSYL_TQF3GAg2yQ6Nw4ero4JNGv69sV7NFND-rY&3u1000&5m1&2e1&callback=none&key=AIzaSyAr6akkks5v1NqRJUQgwRzA6-hG8Ulf8XY&token=65580",
            coordinates: {
                lat: 12,
                lng: 12
            },
            title: "Имя места",
            description: "Vitebsk, test street, 24"
        },
        isOpen: true,
        handleAddToFavorite: () => { },
        handleSetIsOpen: () => { }
    }
}


