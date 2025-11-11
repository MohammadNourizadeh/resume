import { Box, Fade, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CertificationCard from './components/certificationCard/CertificationCard'
import EducationPaper from './components/educationPaper/EducationPaper'
import InfoSection from './components/infoSection/InfoSection'

type CertificationsType = {
    name: string
    institute: string
    date: string
    downloadLink: string
}

type EducationsType = {
    graduated?: boolean,
    uni: string,
    field: string,
    gpa: number,
    date: string
}

export default function AboutPage() {
    // i18n
    const { t, i18n } = useTranslation()

    // func
    const handleRenderEducationCard = (card: EducationsType) => (
        <EducationPaper key={card.field} date={card.date} field={card.field} gpa={card.gpa} uni={card.uni} graduated={card.graduated ?? undefined} />
    )
    const handleRenderCertificationCard = (card: CertificationsType) => (
        <CertificationCard name={card.name} date={card.date} institute={card.institute} downloadLink={card.downloadLink} />
    )

    const certifications: CertificationsType[] = [
        {
            name: t('wdp'),
            institute: t('mft'),
            date: 'July 6, 2023',
            downloadLink: '/certifications/web_design_pack.pdf'
        },
        {
            name: t('react'),
            institute: t('mft'),
            date: 'February 16, 2024',
            downloadLink: '/certifications/react.pdf'
        }
    ]

    const educations: EducationsType[] = [
        {
            field: t('computerField'),
            gpa: 18.6,
            uni: t('qodsUni'),
            graduated: true,
            date: "2025 / 1404"
        },
        {
            field: t('aiField'),
            gpa: 0,
            uni: t('scienceUni'),
            date: "2025 / 1404"
        }
    ]

    const desLines = t('myDes').split('\n')

    return (
        <Box sx={{ paddingY: 2, paddingX: { xs: 5, md: 15 }, display: 'flex', flexDirection: 'column', gap: 4, color: 'text.primary' }}>
            <Box sx={{ direction: i18n.language === 'fa' ? 'rtl' : 'ltr' }}>
                <Typography variant="h3" align='center' sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.4em', sm: '3em' } }}>
                    {t('littleMoreAboutMe')}
                </Typography>
                <Box sx={{ textAlign: 'justify' }}>
                    {desLines.map((line, index) => (
                        <Fade key={index} in={true} timeout={(index + 1) * 300}>
                            <Typography variant="subtitle1" sx={{ lineHeight: 2.5, fontSize: { xs: '.9em', sm: '1em' } }}>
                                {line}
                            </Typography>
                        </Fade>
                    ))}
                </Box>
            </Box>
            <InfoSection<EducationsType> renderCard={handleRenderEducationCard} cards={educations} title={t('educations')} />
            <InfoSection<CertificationsType> renderCard={handleRenderCertificationCard} cards={certifications} title={t('certifications')} />
        </Box>
    )
}
