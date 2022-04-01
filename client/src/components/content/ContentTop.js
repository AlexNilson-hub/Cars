import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import ContentTopCard from "./ContentTopCard";


export default function ContentTop() {
    return (
        <Container fixed>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} sx={{justifyContent: "center", mt: 15,}}>
                    <Grid item xs={6}>
                        <Card elevation={0}>
                            <CardContent sx={{width: 'auto', height: 250}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Открывайте новые горизонты! <br/>
                                    Думайте только о себе, а не о дороге...
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    БМВ 8 серии - это спортивное четырехместное купе премиум класса.
                                    Его габаритные размеры составляют: длина 4851 мм, ширина 1902 мм, высота 1346 мм, а колесная база - 2822 мм.
                                    Величина дорожного просвета зависит от типа двигателя, установленного на автомобиль и варьируется от 121 до 128 миллиметров.
                                    Несмотря на спортивный характер, у модели относительно вместительный багажник.
                                </Typography><br/>
                                <Link href="#" underline="always" color="inherit">
                                    {'Почитать подробнее'}
                                </Link>
                            </CardContent>
                            <CardActions>
                                <Button variant="" color="inherit" size="small">Смотреть коллекции</Button>
                                <Button variant="" color="inherit" size="small">Купить мечту</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid sx={{width: 370, height: 200}}>
                        <ContentTopCard/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}