import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Icon, Typography } from '@mui/material'
import favoriteGrey from '../../assets/img/CardFavoriteActions/greyFavorite.svg'
import favorite from '../../assets/img/CardFavoriteActions/inFavorite.svg'
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import { ButtonSaveProps } from './interfaces'
import ButtonSaveStyle from './styled'

export const ButtonSave = ({ handleClick, isLoading, isFavorite }: ButtonSaveProps) => {
    const useButtonSaveStyle = ButtonSaveStyle({ Pallete: pallete })
    return (
        <>
            <LoadingButton loading={isLoading} onClick={handleClick} className={useButtonSaveStyle.classes.btnSaved}>
                {!isLoading ?
                    <>
                        <Icon className={useButtonSaveStyle.classes.icon}>
                            <img src={isFavorite ? favorite : favoriteGrey} title='save button photo' />
                        </Icon>
                        <Typography className={useButtonSaveStyle.classes.buttonSearchTitle}>{isFavorite ? "Удалить" : "Добавить"} </Typography></>
                    :
                    null
                }
            </LoadingButton>
        </>
    )
}
