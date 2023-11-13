import { makeStyles } from 'tss-react/mui';
import { ThemeApp } from '../../interfaces/IThemeApp';

const RouteInfoStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        routeContainer: {
            width: 400,
            backgroundColor: Pallete.background,
            height: 115,
            zIndex: 9,
            right: 20,
            bottom: 20,
            borderRadius: 8,
            padding: '4px 8px',
            border: `1px solid ${Pallete.border}`,
            '&>div': {
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            [theme.breakpoints.down('sm')]: {
                right: 5,
                bottom: 5,
                height: 70,
                width: 250,
            },
        },
        progressBar: {
            width: 300,
            backgroundColor: '#E8DF1',
            '& span': {
                backgroundColor: '#C75E5E'
            }
        },
        routeValue: {
            color: Pallete.title,
            fontWeight: 'bold',
            fontSize: 'calc(16px + (24 - 16) * ((100vw - 375px) / (1920 - 375)))',
        },
        routeValueDescription: {
            color: Pallete.description,
            opacity: .8,
            fontSize: '10px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
            },
        },
        buttonClose: {
            width: '20px',
            justifyContent: 'end',
            '&:focus': {
                border: 'none',
                outline: 'none',
            }
        }
    })
);

export default RouteInfoStyle