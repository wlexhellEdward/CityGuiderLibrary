import React from "react"
import { Box } from "@mui/system"
import searchIcon from '../../assets/img/drawerActions/buttonSearch/Search.svg'
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import { ButtonSearchProps } from "./intefraces"
import ButtonSearchStyle from "./styled"

export const ButtonSearch = ({ handleClick }: ButtonSearchProps) => {

    const useButtonSearchStyle = ButtonSearchStyle({ Pallete: pallete })
    return (
        <Box data-testid='button-search' onClick={handleClick} className={useButtonSearchStyle.classes.buttonSearch} >
            <img src={searchIcon} title='icon search' />
        </Box>
    )
}