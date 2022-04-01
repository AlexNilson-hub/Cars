import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import AvatarUser from "../AvatarUser";
import Img from "../img/Img"



export default function ContentTopCard() {
    return (
        <Card elevation={10}>
            <Img
                src="https://1.bp.blogspot.com/-btPgNbf4Lds/UJEsaAkqWqI/AAAAAAAAUCI/jjsm14Am3aI/s1600/BMW+i8+Concept+8.JPG"
                alt=""
            />
            <CardContent sx={{width: 370, height: 180}}>
                <Typography gutterBottom variant="h5" component="div">
                    Восхождение должно быть только с таким взглядом!
                </Typography>
                <AvatarUser/>
            </CardContent>
        </Card>
    );
}