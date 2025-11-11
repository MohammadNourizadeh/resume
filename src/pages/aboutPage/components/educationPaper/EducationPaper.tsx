import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function EducationPaper({ graduated, uni, field, gpa, date }: { graduated?: boolean, uni: string, field: string, gpa: number, date: string }) {
    // i18n
    const { t, i18n } = useTranslation()

    return (
        <Paper
            sx={{
                direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
                height: '100%',
                p: 3,
                borderRadius: "16px",
                background: 'background.paper',
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: 7 },
            }}
        >
            <Typography variant="h6" fontWeight={600} gutterBottom>
                {field}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {uni}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {!graduated ? t('currentlyStudying') : t('graduated')} ({date})
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {t('gpa')}: {gpa} / 20
            </Typography>
        </Paper>
    )
}
