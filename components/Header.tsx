'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { database } from '@/database';
import Link from 'next/link';
import Image from "next/image";
import Profile from './Profile';
import Settings from './settings';
import LogoutButton from './LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


interface SidebarProps {
    sessionData: any;
    children?: React.ReactNode;
}

export default function Header({ sessionData, children }: SidebarProps) {
    const drawerWidth = 240;

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
        open?: boolean;
    }>(({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));

    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
        background: '#020617',
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', maxWidth:'100%' }} className="bg-white dark:bg-base-200 overflow-y-auto">
            <AppBar position="fixed" open={open}>
                <Toolbar className="flex justify-between py-1">
                    <div className="flex items-center">
                        <IconButton
                            onClick={handleDrawerClose}
                            className="text-white"
                            sx={[
                                {
                                    mr: 2,
                                },
                                !open && { display: 'none' },
                            ]}
                        >
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={[
                                {
                                    mr: 2,
                                },
                                open && { display: 'none' },
                            ]}
                        >
                            <MenuIcon />
                        </IconButton>
                        {database.settings.map((data) => (
                            <div key={data.Companytitle} className="flex gap-4 items-center text-[1em]">
                                <div>
                                    <Link href="/dashboard">
                                        <Image src={data.logo} alt={data.alt} width={200} height={10} className="" priority />
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-end laptop:text-small tablet:text-[0.7em] smartphone:text-[0.6em]">
                                    <span className="text-white">Olá <span className="uppercase">{sessionData.name}</span>,</span>
                                    <span className="text-white capitalize">Seja bem vindo ao seu ambiente de estudo virtual.</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-none gap-4">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={sessionData.image ? sessionData.image : '/default-photo.webp'} alt="Teste" width={200} height={200} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Profile /></li>
                                <li><LogoutButton /></li>
                            </ul>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className="bg-slate-950 h-screen relative">
                    <List className="text-white">
                        {database.pages.map((text) => (
                            <ListItem key={text.id}>
                                <Link href={text.url}>
                                    <ListItemButton>
                                        <ListItemIcon className="text-white">
                                            <FontAwesomeIcon icon={text.icon as IconDefinition} className="text-white" />
                                        </ListItemIcon>
                                        <ListItemText primary={text.name} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}
