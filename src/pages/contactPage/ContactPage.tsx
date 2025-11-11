import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, Zoom } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import type { ContactCardItemType } from '../../types/contactCardType';
import ContactInfoCard from './components/ContactInfoCard';

export default function ContactPage() {
    // i18n
    const { t, i18n } = useTranslation()

    // var
    const contactDetails: ContactCardItemType[] = [
        {
            icon: EmailIcon,
            name: t('email'),
            linkAddress: 'mailto:mo.nourizadeh1@gmail.com',
            linkName: 'mo.nourizadeh1@gmail.com',
            target: true,
            rel: true
        },
        {
            icon: GitHubIcon,
            name: t('github'),
            linkAddress: 'https://github.com/MohammadNourizadeh',
            linkName: 'MohammadNourizadeh',
            target: true,
            rel: true
        },
        {
            icon: LocalPhoneIcon,
            name: t('mobile'),
            linkAddress: 'tel:09197878264',
            linkName: '09197878264'
        }
    ]

    const socialLinks = [
        {
            icon: InstagramIcon,
            linkAddress: 'https://instagram.com/mohmmd_zn',
            iconColor: '#AC8A43'
        },
        {
            icon: LinkedInIcon,
            linkAddress: 'https://www.linkedin.com/in/mohammad-nourizadeh-43ab68295/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAE2NgWsfTga7gYLdNWNq2w%3D%3D',
            iconColor: '#0A66C2'
        }
    ]

    return (
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2, color: 'text.primary', overflow: 'auto', direction: i18n.language === 'fa' ? 'rtl' : 'ltr' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    {socialLinks.map((item, index) => (
                        <Zoom key={item.linkAddress} timeout={300 * (index + 1)} in={true}>
                            <a target="_blank" href={item.linkAddress} style={{ color: 'white', padding: 7, borderRadius: '50%', backgroundColor: item.iconColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <item.icon />
                            </a>
                        </Zoom>
                    ))}
                </Box>
                <Box sx={{ width: { xs: '250px', md: '400px' }, margin: 'auto' }}>
                    <ContactInfoCard cardItems={contactDetails} />
                </Box>
                <Box alignSelf={'center'}>
                    <Typography variant="caption" sx={{ display: 'flex', gap: .3 }}>
                        {t('designedWith')} <FavoriteBorderIcon fontSize='small' /> {t('by')} <Typography variant="body2">{t('myName')}</Typography>
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}
