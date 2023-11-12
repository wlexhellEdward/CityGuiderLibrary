export interface IFavoriteItem {
    id: string | undefined,
    type: string[],
    img: string,
    coordinates: {
        lat: number,
        lng: number
    },
    title: string,
    description: string,
}