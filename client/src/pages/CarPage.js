import React from 'react';
import CardNewCollections from "../components/card-collections/CardNewCollections";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const HomePage = () => {


    return (
        <Box>
            <Container>
                <CardNewCollections/>
            </Container>
        </Box>
    );
};

export default HomePage;
