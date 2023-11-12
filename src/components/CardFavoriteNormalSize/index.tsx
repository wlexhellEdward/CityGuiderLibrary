import React from 'react'

import { Box, Card, CardActions, CardContent, Container, Typography, } from '@mui/material';
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import arrowMore from '../../assets/img/cardFavoriteActions/arrowMore.svg'
import FavoriteImg from '../../assets/img/cardFavoriteActions/inFavorite.svg'
import CardFavoriteStyle from './styled.ts';
import { CardFavoritePropsNormalSize } from './interfaces.ts';
import { Places } from '../../consts/places.ts';

const CardFavoriteNormalSize: React.FC<CardFavoritePropsNormalSize> = ({ favoriteItem, handleSetIsOpen, handleAddToFavorite }) => {

    const useCardFavoriteStyle = CardFavoriteStyle({ isOpen: false, url: favoriteItem.img, Pallete: pallete })
    
    return (
        <>
            <Card data-testid='card-normal-size' className={useCardFavoriteStyle.classes.cardFavorite}>
                <Box className={useCardFavoriteStyle.classes.containerImgTitle} >
                    <CardContent className={useCardFavoriteStyle.classes.cardContent}>
                        <Box className={useCardFavoriteStyle.classes.imgCard}>
                            {favoriteItem.type.map((item) => {
                                const matchingPlace = Places.find((place) => place.type === item);
                                if (matchingPlace) {
                                    const [title, img] = [matchingPlace.title, matchingPlace.img];
                                    return (
                                        <img
                                            key={title}
                                            className={useCardFavoriteStyle.classes.iconStatis}
                                            src={img}
                                        />
                                    );
                                }
                            })}
                        </Box>
                        <Box className={useCardFavoriteStyle.classes.containerTitle}>
                            <Typography whiteSpace={'normal'} className={useCardFavoriteStyle.classes.title}>{favoriteItem.title}</Typography>
                        </Box>
                    </CardContent>
                </Box>

                <Container className={useCardFavoriteStyle.classes.descriptionContainer} disableGutters>
                    <Typography whiteSpace={'normal'} className={useCardFavoriteStyle.classes.description}>{favoriteItem.description.substring(0, 150) + '...'}</Typography>
                </Container>
                <CardActions disableSpacing className={useCardFavoriteStyle.classes.containerDownIcons}>
                    <img data-testid='delete-from-favorite' src={FavoriteImg} onClick={handleAddToFavorite} className={useCardFavoriteStyle.classes.icon} />
                    <img data-testid='card-favorite-button-show-more' onClick={handleSetIsOpen} className={useCardFavoriteStyle.classes.imgArrow} src={arrowMore} />
                </CardActions>
            </Card>

        </>
    )
}

export default CardFavoriteNormalSize
