import React from 'react'
import { Box, Card, CardActions, CardContent, Container, Typography, } from '@mui/material';
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import CardFavoriteStyle from './styled';
import arrowMore from '../../assets/img/cardFavoriteActions/arrowMore.svg'
import { CardFavoritePropsMaxSize } from './interfaces';
import { Places } from '../../consts/places';
import { ButtonSave } from '../ButtonSave';
import { ButtonTravel } from '../ButtonTravel';


const CardFavoriteMaxSize: React.FC<CardFavoritePropsMaxSize> = ({ favoriteItem, handleSetIsOpen }) => {

    const useCardFavoriteStyle = CardFavoriteStyle({ isOpen: true, url: favoriteItem.img, Pallete: pallete })
    return (
        <>
            <Card data-testid='card-max-size' className={useCardFavoriteStyle.classes.cardFavorite}>
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
                <CardActions className={useCardFavoriteStyle.classes.containerDownIcons}>
                    <ButtonSave data-testid='delete-from-favorite' isLoading={false} handleClick={()=>{}} isFavorite={false} />
                    <ButtonTravel handleClick={()=>{}} />
                    <img onClick={handleSetIsOpen} className={useCardFavoriteStyle.classes.imgArrowDown} src={arrowMore} />
                </CardActions>
            </Card>

        </>
    )
}

export default CardFavoriteMaxSize
