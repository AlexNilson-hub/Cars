import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Logo from "../assets/images/logo-apple.png";
import {Tooltip} from "@mui/material";

// Icons ui
import AddchartIcon from '@mui/icons-material/Addchart';
import HomeIcon from '@mui/icons-material/Home';
import {
    HOME_ROUTE,
    CAR_ROUTE,
} from "../utils/consts";
import {NavLink} from "react-router-dom";
import Image from "mui-image";
import {observer} from "mobx-react-lite";
import Container from "@mui/material/Container";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

const NavBar = observer(() => {


    return (
        <Box sx={{flexGrow: 1, display: 'inlineBlock', mb: 10}}>
            <AppBar position="fixed" id="navbar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 1, ml: 0}}
                    >
                        <Image width={45} height={45} src={Logo}/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Dream Cars
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>

                    {/*navigates*/}
                    <Box size="large"
                         color="inherit"
                         sx={{mr: 0}}
                    >
                        <Container>
                            <Tooltip title='Home' arrow>
                                <IconButton size="large" color="inherit">
                                    <NavLink style={{color: 'white'}}
                                             to={HOME_ROUTE}><HomeIcon/>
                                    </NavLink>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Автомобили' arrow>
                                <IconButton size="large" color="inherit">
                                    <NavLink style={{color: 'white'}}
                                             to={CAR_ROUTE}><AddchartIcon/>
                                    </NavLink>
                                </IconButton>
                            </Tooltip>
                        </Container>
                    </Box>
                    <Box
                        size="large"
                        color="inherit"
                        component="span"
                        sx={{}}
                    >
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
});

export default NavBar;
