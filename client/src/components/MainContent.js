import * as React from 'react';
import Box from '@mui/material/Box';
// import ContentTop from "./content/ContentTop";
// import ContentBottom from "./content/ContentBottom";
import {observer} from "mobx-react-lite";
import TablNavigate from "./tabl-collections/TablNavigate";

const MainContent = observer(() => {
    return (
        <Box
            sx={{
                width: "auto",
                height: 800,
                // backgroundColor: 'primary.dark',
            }}
        >
            <TablNavigate/>
            {/*<ContentTop/>*/}
            {/*<ContentBottom/>*/}
        </Box>
    );
});

export default MainContent;