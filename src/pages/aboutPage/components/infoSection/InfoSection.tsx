import { Box, Divider, Grow, Typography } from "@mui/material";

type InfoSectionType<T> = {
    cards: T[],
    title: string,
    renderCard: (card: T) => React.ReactElement
}

export default function InfoSection<T>({ cards, title, renderCard }: InfoSectionType<T>) {
    return (
        <Box>
            <Divider sx={{
                mb: 3,
                height: 3,
                border: 'none',
                background: 'linear-gradient(to right, transparent, #C0A060 40%, #C0A060 60%, transparent)',
            }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginY: 3 }} align='center'>
                {title}
            </Typography>
            <Box sx={{ flexWrap: 'wrap', display: 'flex', gap: 1, cursor: 'default' }}>
                {cards.map((card, index) => (
                    <Grow in={true} timeout={500 * (index + 1)} key={index}>
                        <Box sx={{ height: '100%', flexGrow: 1, flexBasis: '250px' }}>
                            {renderCard(card)}
                        </Box>
                    </Grow>
                ))}
            </Box>
        </Box>
    )
}
