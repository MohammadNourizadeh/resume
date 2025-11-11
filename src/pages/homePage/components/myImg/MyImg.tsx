import { Box } from "@mui/material";

export default function MyImg() {
    return (
        <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: { xs: 200, sm: 230, md: 250, lg: 400 }, height: { xs: 200, sm: 230, md: 250, lg: 400 }, boxShadow: 12 }}>
            <img
                src="/images/myImg.JPG"
                alt="Mohammad"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} />
        </Box>
    )
}
