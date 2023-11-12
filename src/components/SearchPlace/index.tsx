import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import { SearchPlaceProps } from './interfaces'

import SearchPlaceStyle from './styled'


const SearchPlace: React.FC<SearchPlaceProps> = ({ searchPlace, prevIsSelected, handleClickOnPlace }) => {
    const [isSelected, setIsSelected] = useState<boolean>(prevIsSelected)
    const handleClickPlace = () => {
        handleClickOnPlace()
        setIsSelected(!isSelected)
    }
    const useSearchPlaceStyle = SearchPlaceStyle({ Pallete: pallete })
    return (
        <Box data-testid='place-for-type-search' onClick={handleClickPlace} className={useSearchPlaceStyle.classes.containerPlace} key={searchPlace.id}>
            {isSelected ?
                <>
                    <img
                        data-testid='type-of-place'
                        className={useSearchPlaceStyle.classes.imgPlace}
                        src={searchPlace.img}
                        title='place photo'
                    />
                    <Typography className={useSearchPlaceStyle.classes.titlePlace}>{searchPlace.title}</Typography>
                </>
                :
                <>
                    <img
                        data-testid='selected-type-of-place'
                        className={useSearchPlaceStyle.classes.imgSelectedPlace}
                        src={searchPlace.img}
                        title='place photo'
                    />
                    <Typography className={useSearchPlaceStyle.classes.titleSelectedPlace}>{searchPlace.title}</Typography>
                </>
            }
        </Box>
    )
}

export default SearchPlace