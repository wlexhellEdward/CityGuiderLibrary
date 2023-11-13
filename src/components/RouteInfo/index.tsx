import React from 'react'
import { Box, Button, Container, Typography, } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'

import RouteInfoStyle from "./styled"
import { RouteInfoProps } from './interfaces';


export const RouteInfo = ({ progressTravel, time, distanceRemaining, handleClickClose }: RouteInfoProps) => {
    const useRouteInfoStyle = RouteInfoStyle({ Pallete: pallete })
    return (
        <Container data-testid='route-info' className={useRouteInfoStyle.classes.routeContainer}>
            <Box>
                <LinearProgress className={useRouteInfoStyle.classes.progressBar} variant='determinate' value={progressTravel} />
                <Button data-testid='route-button-close' className={useRouteInfoStyle.classes.buttonClose} onClick={handleClickClose}>X</Button>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValue}>{distanceRemaining} км</Typography>
                <Typography data-testid='route-remaing-time' className={useRouteInfoStyle.classes.routeValue}>{time}</Typography>
            </Box>
            <Box>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>дистацния</Typography>
                <Typography className={useRouteInfoStyle.classes.routeValueDescription}>примерное время</Typography>
            </Box>
        </Container>
    )
}