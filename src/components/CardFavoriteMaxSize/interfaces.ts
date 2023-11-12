export interface CardFavoritePropsMaxSize {
    favoriteItem: {
        id: string | undefined,
        type: string[],
        img: string,
        coordinates: {
            lat: number,
            lng: number
        }
        title: string,
        description: string,
    },
    handleClickAddToFavorite: () => void,
    handleClickTravel: () => void,
    handleSetIsOpen: () => void,
    isOpen: boolean
}