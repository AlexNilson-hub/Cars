import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Typography from "@mui/material/Typography";
import {Card, CardContent, Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import {useState} from "react";

export default function CardNewCollections() {

    //Счетчик лайков
    const [like, setLike] = useState(0)

    function increment() {
        //Есть 2 варианта написания 1 - это колбэк функция и 2 - внутри-колбэк, ориентируется предыдущего состояния.
        // setLike((prevLike)=> {
        //     return prevLike +1
        // })
        setLike(prev => prev + 1)

    }


    return (
        <Box xs={1} sx={{width: 'auto', height: 'auto', textAlign: 'left', mt: 15, m: 5}}>
            <Typography gutterBottom variant="h5" component="div">
                Сейчас в тренде
            </Typography>
            <ImageList cols={3} gap={12} sx={{width: 'auto', height: 'auto', textAlign: 'left'}}>
                {itemData.map((item) => (
                    <Card key={item.img}>
                        {/*<img*/}
                        {/*    src={`${item.img}?w=370&fit=crop&auto=format`}*/}
                        {/*    srcSet={`${item.img}?w=370&fit=crop&auto=format&dpr=2 2x`}*/}
                        {/*    alt={item.title}*/}
                        {/*    loading="lazy"*/}
                        {/*/>*/}
                        <Skeleton
                            variant="rectangular"
                            width={'auto'}
                            height={470}
                        />
                        <CardContent>
                            <Typography>{item.title}</Typography>
                            <Typography sx={{lineHeight: 2, whiteSpace: 'nowrap', borderBottom: 1}}>
                                {item.description} &ensp; {item.price}</Typography>
                            <Button sx={{borderRadius: 5, mr: 12, mt: 2 }} color="inherit" variant="outlined">
                                Купить</Button>
                            <IconButton  onClick={increment} sx={{mt: 2 }} aria-label="like + 1" color="inherit">
                                <FavoriteTwoToneIcon/><h6>{like}</h6>
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: '',
        title: 'Авто',
        description: 'Серый',
        price: '8 000 000 ₽',
        like: '',
    },
    {
        img: '',
        title: 'Авто',
        description: 'Серый',
        price: '8 000 000 ₽',
        like: '',
    },
    {
        img: '',
        title: 'Авто',
        description: 'Серый',
        price: '8 000 000 ₽',
        like: '',
    },
    {
        img: '',
        title: 'Авто',
        description: 'Серый',
        price: '8 000 000 ₽',
        like: '',
    },
    {
        img: '',
        title: 'Авто',
        description: 'Серый',
        price: '8 000 000 ₽',
        like: '',
    },
    {
        img: '',
        title: 'Авто',
        description: 'Серый',
        price: '8 000 000 ₽',
        like: '',
    },



];

