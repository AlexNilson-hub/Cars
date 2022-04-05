import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";

export default function TabMenuLeft() {
    return (
        <Container>
            <Grid sx={{
                display: 'flex',
                '& > :not(style)': {
                    ml: 12,
                    width: 153,
                    height: 35,
                    color: "blue",
                    borderRadius: 10,
                },
            }}>
                <Paper elevation={3}>
                    <Stack direction="row" spacing={2}>
                        <Button sx={{border: 'none', borderRadius: 10}} variant="outlined" startIcon={<AddIcon/>}>
                            Create new
                        </Button>
                    </Stack>
                </Paper>
            </Grid>
            <MenuList sx={{width: 'auto', ml: 8, mt: 3}}>
                <MenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Even rows of data
                        <p>Display rows 2.4.6 etc</p>
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Old rows of data
                        <p>Display rows 1.3.5 etc</p>
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        All data
                        <p>Display all data</p>
                    </Typography>
                </MenuItem>
            </MenuList>
        </Container>
    );
}
