import React from 'react'
import { Button, Icon, Typography } from '@mui/material'

import travel from '../../assets/img/cardFavoriteActions/travel.svg'
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'

import { ButtonTravelProps } from './interfaces'
import ButtonTravelStyle from './styled'

export const ButtonTravel = ({ handleClick }: ButtonTravelProps) => {

    const useButtonTravelStyle = ButtonTravelStyle({ Pallete: pallete })
    return (
        <Button data-testid='make-route' onClick={handleClick} className={useButtonTravelStyle.classes.buttonTravel}>
            <Icon className={useButtonTravelStyle.classes.iconTravel}>
                <img src={travel} title="travel button photo" />
            </Icon>
            <Typography className={useButtonTravelStyle.classes.buttonTravelTitle}>Маршрут</Typography>
        </Button>
    )
}

