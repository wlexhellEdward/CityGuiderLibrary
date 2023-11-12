import React from 'react'
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import { Box, Input, List, Typography } from "@mui/material"
import { Places } from '../../consts/places'
import SearchPlace from '../SearchPlace'

import PlateSearchPlacesStyle from "./styled"
import { PlateSearchPlacesProps } from './intrefaces'


export const PlateSearchPlaces = ({ handleClickOnPlace }: PlateSearchPlacesProps) => {
    const usePlateSearchPlacesStyle = PlateSearchPlacesStyle({ Pallete: pallete })
    return (
        <Box data-testid='plate-search' className={usePlateSearchPlacesStyle.classes.platePlaces}>
            <Typography className={usePlateSearchPlacesStyle.classes.titleFavorite}>Искать: </Typography>
            <List className={usePlateSearchPlacesStyle.classes.containerPlaces}>
                {Places.map((item) => {
                    return (
                        <>
                            <SearchPlace handleClickOnPlace={handleClickOnPlace} searchPlace={item} prevIsSelected={true} />
                        </>
                    )
                })}
            </List>

        </Box>
    )
}