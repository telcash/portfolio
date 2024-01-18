import React from "react";
import './navbar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useTranslation } from "react-i18next";



const Navbar = () => {

    const [t, i18n] = useTranslation("global");

    const pages = [
        t("navbar.pages.skills"),
        t("navbar.pages.projects"),
        t("navbar.pages.contact")
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="cs_navbar">
            <AppBar position="fixed" color="white">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'uppercase'
                            }}
                        >
                            {t("name")}
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'uppercase'
                            }}
                        >
                            {t("name")}
                        </Typography>
                        <Button onClick={() => i18n.changeLanguage('es')} variant="text" color="warning" disableElevation sx={{ my: 2, display: { xs: 'flex', md: 'none' } }}>ES</Button>
                        <Button onClick={() => i18n.changeLanguage('en')} variant="text" color="warning" disableElevation sx={{ my: 2, display: { xs: 'flex', md: 'none' } }}>EN</Button>
                        <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
                            <Button onClick={() => i18n.changeLanguage('es')} variant="text" color="warning" disableElevation sx={{ my: 2 }}>ES</Button>
                            <Button onClick={() => i18n.changeLanguage('en')} variant="text" color="warning" disableElevation sx={{ my: 2, marginLeft: 0, marginRight: 4 }}>EN</Button>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                color="warning"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', width: 120 }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar/>
        </div>
    );
};

export default Navbar;