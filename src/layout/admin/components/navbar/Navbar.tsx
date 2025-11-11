import { AppBar, Box } from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import type { NavItemType } from "../../../../types/navItemType";
import MyToolbar from "./components/toolbar/MyToolbar";
import SidebarDrawer from "./sidebarDrawer/SidebarDrawer";


export default function Navbar() {
    // i18n
    const { t } = useTranslation()

    // state
    const [chosenItem, setChosenItem] = useState<string>('home')
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    // var
    const navItems: NavItemType[] = [
        {
            name: t('home'),
            address: '/admin/home'
        },
        {
            name: t('about'),
            address: '/admin/about'
        },
        {
            name: t('contact'),
            address: '/admin/contact'
        },
    ]

    // func
    const handleToggleDrawer = () => {
        setIsDrawerOpen(prev => !prev)
    }

    const handleChooseItem = (chosenItem: string) => {
        setChosenItem(chosenItem)
    }

    return (
        <Box sx={{ display: 'flex', userSelect: 'none' }}>
            <AppBar component="nav" sx={{ background: 'transparent', boxShadow: 0, padding: { sm: 2 }, position: 'sticky', top: 0 }}>
                <MyToolbar onChooseItem={handleChooseItem} chosenItem={chosenItem} navItems={navItems} onToggleDrawer={handleToggleDrawer} />
            </AppBar>
            <nav>
                <SidebarDrawer onChooseItem={handleChooseItem} chosenItem={chosenItem} isDrawerOpen={isDrawerOpen} navItems={navItems} onToggleDrawer={handleToggleDrawer} />
            </nav>
        </Box>
    )
}

