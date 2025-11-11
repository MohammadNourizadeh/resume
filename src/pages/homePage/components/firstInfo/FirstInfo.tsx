import { Box, Button, Grow, Slide, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FirstInfo({ onShowSkills }: { onShowSkills: () => void }) {

    // i18n
    const { t, i18n } = useTranslation()

    // func
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume/resume2.pdf';
        link.download = 'Nourizadeh.pdf';
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Box sx={{ direction: i18n.language === 'fa' ? 'rtl' : 'ltr', paddingX: 4 }}>
            <Grow in={true} {...{ timeout: 1000 }} mountOnEnter unmountOnExit>
                <Box sx={{ width: { lg: 500 }, color: 'text.primary' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.3rem' }, fontWeight: 'bold', marginBottom: 2, whiteSpace: 'normal', textAlign: { xs: 'center', lg: 'start' } }}>{t('jobTitle')}</Typography>
                    <Typography variant="subtitle1" align="center" sx={{ fontSize: '1.3rem', whiteSpace: 'normal', textAlign: { xs: 'center', lg: 'start' }, textTransform: 'none' }}>{t('jobDes')}</Typography>
                </Box>
            </Grow>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' }, marginTop: 4 }}>
                <Slide direction={i18n.language === 'en' ? "right" : "up"} in={true}  {...{ timeout: 1000 }} mountOnEnter unmountOnExit>
                    <Button variant="contained" sx={{ backgroundColor: 'primary.main', borderRadius: 3, color: 'secondary.contrastText', paddingX: { xs: 3, md: 5 }, paddingY: { xs: 1, md: 2 } }} onClick={() => { onShowSkills() }}>
                        {t('skills')}
                    </Button>
                </Slide>
                <Slide direction={i18n.language === 'en' ? "up" : "right"} in={true}  {...{ timeout: 1000 }} mountOnEnter unmountOnExit>
                    <Button onClick={handleDownloadResume} variant="text" sx={{ borderRadius: 3, border: 1, borderColor: 'action.hover', color: 'text.primary', paddingX: { xs: 5, md: 8 }, paddingY: { xs: 1, md: 2 } }}>
                        {t('downloadRes')}
                    </Button>
                </Slide>
            </Box>
        </Box >
    )
}
