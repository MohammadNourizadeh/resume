import { Box, Grow, Typography } from "@mui/material";

export default function SkillsGrowBox({ skillName, skillIcon, index }: { skillName: string, skillIcon: string, index: number }) {
    return (
        <Grow timeout={index * 300} in={true}>
            <Box sx={{ padding: 4, backgroundColor: 'background.paper', boxShadow: 10, width: '100%', borderRadius: 3, color: 'text.primary' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.5em' }} align="center" >
                    {skillIcon}
                </Typography>
                <Typography variant="subtitle1" align="center" >
                    {skillName}
                </Typography>
            </Box>
        </Grow>
    )
}
