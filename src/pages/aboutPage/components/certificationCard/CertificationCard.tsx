import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CertificationCard({ name, institute, date, downloadLink }: { name: string, institute: string, date: string, downloadLink: string }) {
    // i18n
    const { t, i18n } = useTranslation()

    // func
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = downloadLink
        link.download = name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Box sx={{ direction: i18n.language === 'fa' ? 'rtl' : 'ltr', padding: 2, borderRadius: 5, height: '100%', boxShadow: 2, display: 'flex', flexDirection: 'column', color: 'text.primary', backgroundColor: 'background.paper' }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    {name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{t('institute')} :</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    {institute}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{t('date')} :</Typography>
                <Typography variant="body2">
                    {date}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
                <Button variant="contained" sx={{ color: "secondary.contrastText", width: '100%' }} onClick={handleDownload}>
                    {t('download')}
                </Button>
            </CardActions>
        </Box>
    )
}
