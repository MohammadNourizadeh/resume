import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Grow, Link, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import type { ContactCardItemType } from '../../../types/contactCardType';


export default function ContactInfoCard({ cardItems }: { cardItems: ContactCardItemType[] }) {
    return (
        <Card sx={{ borderRadius: 5, height: 'auto', width: '100%' }}>
            {cardItems.map((item, index) => (
                <Grow timeout={500 * index} in={true}>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={item.name} sx={{ paddingX: 3, paddingY: 2 }}
                        >
                            <Typography component="span" sx={{ display: 'flex', gap: 1 }}>
                                <item.icon />
                                {item.name}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Link href={item.linkAddress} underline='hover'>{item.linkName}</Link>
                        </AccordionDetails>
                    </Accordion>
                </Grow>
            ))}
        </Card>
    )
}
