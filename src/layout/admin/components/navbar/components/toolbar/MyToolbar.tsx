import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import type { NavItemType } from '../../../../../../types/navItemType';

export default function MyToolbar({ navItems, onToggleDrawer, chosenItem, onChooseItem }: { navItems: NavItemType[], onToggleDrawer: () => void, onChooseItem: (chosenItem: string) => void, chosenItem: string }) {
    return (
        <Toolbar sx={{ display: 'flex', justifyContent: { sm: 'center' }, position: 'relative' }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={onToggleDrawer}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Box
                sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', left: 0, top: '50%', transform: 'TranslateY(-50%)' }}
            >
                <img src="../../../../logo/logo.png" alt="logo" width={80} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex', gap: 3 } }}>
                {navItems.map((item) => (
                    <Button key={item.name} sx={{ color: 'text.primary', boxShadow: chosenItem === item.name ? 3 : 0 }} onClick={() => { onChooseItem(item.name) }} component={Link} to={item.address}>
                        {item.name}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    )
}
