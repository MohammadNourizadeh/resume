import { Box, Divider, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import type { NavItemType } from "../../../../../types/navItemType";

export default function SidebarDrawer({ navItems, onToggleDrawer, isDrawerOpen, chosenItem, onChooseItem }: { navItems: NavItemType[], onToggleDrawer: () => void, isDrawerOpen: boolean, chosenItem: string, onChooseItem: (chosenItem: string) => void }) {
    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Drawer
            container={container}
            variant="temporary"
            open={isDrawerOpen}
            onClose={onToggleDrawer}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
        >
            <Box sx={{ textAlign: 'center', my: 2 }}>
                <Box sx={{ userSelect: 'none' }}>
                    <img src="../../../../logo/logo.png" alt="logo" width={50} />
                </Box>
                <Divider sx={{ color: 'divider' }} />
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton sx={{ padding: 2, boxShadow: chosenItem === item.name ? 3 : 0 }} component={Link} to={item.address} onClick={() => {
                                onToggleDrawer()
                                onChooseItem(item.name)
                            }} >
                                {item.name}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
