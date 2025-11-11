import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function Admin() {

    return (
        <Grid container direction="column" sx={{ backgroundColor: 'background.default', height: '100dvh', overflow: 'auto', flexWrap: 'nowrap' }}>
            <Grid size={12}>
                <Navbar />
            </Grid>
            <Grid size={12} sx={{ overflowY: 'auto', flexGrow: 1, overflowX: 'hidden' }}>
                <Outlet />
            </Grid>
        </Grid>
    )
}
