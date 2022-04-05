import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import {LOGO_USER} from "../assets/images/constsImg";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '"online"',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.15)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.2)',
            opacity: 0,
        },
    },
}));


export default function AvatarUser() {
    return (
        <Stack direction="row" spacing={1} sx={{justifyContent: 'left', alignItems: 'center'}}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar alt="user" src={LOGO_USER}/>
            </StyledBadge>
            <Typography gutterBottom variant="h7" component="div">
                Василий Иванов
            </Typography>
            <IconButton spacing={1}  size="large" color="inherit" aria-label="instagram">
                <InstagramIcon />
            </IconButton>
        </Stack>
    );
}