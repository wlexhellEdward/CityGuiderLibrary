import React from 'react';
import { Box, Button, List, ListItem, ListItemIcon } from '@mui/material';
import { LIGHT_THEME_APP as pallete } from '../../consts/theme'
import Favorite from '../../svg/favorite'
import FavoriteSelected from '../../svg/favorite/favoriteSelected'
import Search from '../../svg/search/Search';
import SearchSelected from '../../svg/search/SearchSelected'
import Logo from '../../assets/img/drawer/Logo.svg';
import AsideListItemsStyle from './styled';
import { AsideListItemsProps } from './interfaces';

export const AsideListItems = ({ currentStatus, handleSetCurrentStatus }: AsideListItemsProps) => {

    const useAsideStyle = AsideListItemsStyle({ Pallete: pallete });

    const switchCurrentStatus = (status: string) => handleSetCurrentStatus(status);
    const [favorites, search] = ['favorites', 'search']


    const handleCloseClick = () => { switchCurrentStatus('close') };

    return (
        <List className={useAsideStyle.classes.listItems}>
            {currentStatus !== 'close' ?
                <Box className={useAsideStyle.classes.drawerAction}>
                    <Button data-testid='button-close' className={useAsideStyle.classes.buttonCloseDrawer} onClick={handleCloseClick}>{'<'}</Button>
                </Box>
                :
                null
            }
            <ListItem className={useAsideStyle.classes.logo}>
                <ListItemIcon onClick={handleCloseClick} className={useAsideStyle.classes.logo}>
                    <img title='icon for closing drawer' src={Logo} />
                </ListItemIcon>
            </ListItem>
            <ListItem className={useAsideStyle.classes.listItemButton}>
                <Box data-testid='button-favorite' className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('favorites')}>
                    {currentStatus !== favorites ?
                        <Favorite />
                        :
                        <FavoriteSelected />
                    }
                </Box>
                <Box data-testid='button-search' className={useAsideStyle.classes.containerButton} onClick={() => switchCurrentStatus('search')}>
                    {currentStatus !== search ?
                        <Search />
                        :
                        <SearchSelected />
                    }
                </Box>
            </ListItem>
        </List>
    );
};

