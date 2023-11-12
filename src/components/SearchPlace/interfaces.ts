export interface SearchPlaceProps {
    searchPlace: {
        id: number,
        type: string,
        img: string,
        title: string,
    }
    handleClickOnPlace: () => void,
    prevIsSelected: boolean,
}