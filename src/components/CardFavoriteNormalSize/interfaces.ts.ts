export interface CardFavoritePropsNormalSize {
    favoriteItem: {
        id: string | undefined,
        type: string[],
        img: string,
        coordinates: {
            lat: number,
            lng: number
        },
        title: string,
        description: string,
    },
    handleAddToFavorite: () => void,
    handleSetIsOpen: () => void,
    isOpen: boolean
}