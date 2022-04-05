import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Paper, Tooltip} from "@mui/material";

// Icons ui
import AddchartIcon from '@mui/icons-material/Addchart';
import {
    HOME_ROUTE,
    CAR_ROUTE,
} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Container from "@mui/material/Container";
import AvatarMenu from "./img/AvatarMenu";
import HelpIcon from '@mui/icons-material/Help';

const NavBar = observer(() => {
    return (
        <Box sx={{flexGrow: 1, display: 'inlineBlock', mb: 10}}>
            <AppBar position="fixed" id="navbar">
                <Toolbar>
                    <Paper id="paperIcon" elevation={10}
                           sx={{
                               display: 'flex',
                               '& > :not(style)': {
                                   m: 1,
                                   width: 32,
                                   height: 32,
                                   color: "#367BF5"
                               },
                           }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="open drawer"
                            sx={{mr: 1, ml: 0}}
                        >
                            <h4>D</h4>
                            {/*<Image width={32} height={32} src={LOGO_D}/>*/}
                        </IconButton>
                    </Paper>
                    <Typography
                        id="titleD"
                        variant="h6"
                        noWrap
                        component="div"
                        ml={2}
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Dashboard
                    </Typography>
                    {/*<Typography>*/}
                    {/*    <Search/>*/}
                    {/*</Typography>*/}

                    {/*navigates*/}
                    <Box size="large"
                         color="inherit"
                         sx={{ml: 125}}
                    >
                        <Container style={{color: 'black'}}>
                            <Tooltip title='Help' arrow>
                                <IconButton size="large" color="inherit">
                                    <NavLink style={{color: 'black'}}
                                             to={HOME_ROUTE}><HelpIcon/>
                                    </NavLink>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='UPGRADE' arrow>
                                <IconButton size="large" color="inherit">
                                    <NavLink style={{color: 'black'}}
                                             to={CAR_ROUTE}><AddchartIcon/>
                                    </NavLink>
                                </IconButton>
                            </Tooltip>
                        </Container>
                    </Box>
                    <AvatarMenu/>
                </Toolbar>
            </AppBar>
        </Box>
    );
});

export default NavBar;
