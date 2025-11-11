import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box, Button } from "@mui/material";
import useMyContext from "../../../../../../customHooks/useMyContext";
import { useTranslation } from 'react-i18next';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';

export default function NavbarSetting() {
    // i18n
    const { i18n } = useTranslation()

    // context
    const { theme, setTheme } = useMyContext()

    // state
    const [chosenLang, setChosenLang] = useState<string>('en')

    // var
    const langs = ['fa', 'en']

    // func
    const handleChangeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        }
        else setTheme('dark')
    }

    const handleChangeLang = (lang: string) => {
        i18n.changeLanguage(lang)
        setChosenLang(lang)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 7, borderRadius: 2, padding: 1 }}>
            <Button
                variant="text"
                onClick={handleChangeTheme}
                sx={{
                    color: 'text.primary',
                    '&:hover': {
                        backgroundColor: 'action.hover'
                    },
                }}>
                {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
            <Box>
                {langs.map(lang => (
                    <Button
                        key={lang}
                        variant="text"
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: 'action.hover'
                            },
                            boxShadow: chosenLang === lang ? 5 : 0,
                            border: chosenLang === lang ? 1 : 0,
                            borderColor: 'action.hover'
                        }}
                        onClick={() => { handleChangeLang(lang) }}>
                        {lang}
                    </Button>
                ))}
            </Box>
        </Box >
    )
}
