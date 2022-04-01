import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardTopCollections from "../card-collections/CardTopCollections";
import CardNewCollections from "../card-collections/CardNewCollections";


export default function ContentMiddleCart() {
    return (
        <Container fixed>
            <Box sx={{flexGrow: 1}}>
                <Grid container direction="row" spacing={1} sx={{justifyContent: "center", mt: 15}}>
                    <Grid  xs={10}>
                        <CardTopCollections/>
                        <CardNewCollections/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}