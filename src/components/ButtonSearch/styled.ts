import { makeStyles } from 'tss-react/mui';
import { ThemeApp } from '../../interfaces/IThemeApp';
import '../../assets/fonts/stylesheet.css'

const ButtonSearchStyle = makeStyles<ThemeApp>()(
    (theme, { Pallete }) => ({
        buttonSearch: {
            marginTop: theme.spacing(2.2),
            color:Pallete.title,
            cursor: 'pointer',
            backgroundColor: `${Pallete.main}`,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        }
    })
);

export default ButtonSearchStyle