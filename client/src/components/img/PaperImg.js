import React from 'react';
import {Paper} from "@mui/material";

const PaperImg = () => {
    return (
        <Paper id="paperIcon" elevation={10}
               sx={{
                   display: 'flex',
                   '& > :not(style)': {
                       m: 1,
                       width: 32,
                       height: 32,
                       color: "blue"
                   },
               }}>

        </Paper>
    );
};

export default PaperImg;
