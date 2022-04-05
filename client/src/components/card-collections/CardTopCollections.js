import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Typography from "@mui/material/Typography";
import {Card, CardContent, Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import IconButton from "@mui/material/IconButton";

export default function CardTopCollections() {
    //Счетчик лайков
    const [like, setLike] = useState(0)

    function increment() {
        setLike(prev => prev + 1)
    }

    return (
        <Box xs={1} sx={{width: 'auto', height: 'auto', textAlign: 'left'}}>
            <Typography gutterBottom variant="h5" component="div">
                Топ коллекций
            </Typography>
            <ImageList cols={3} gap={12} sx={{width: 'auto', height: 'auto', textAlign: 'center'}}>
                {itemData.map((item) => (
                    <Card key={item.img}>
                        {/*<img*/}
                        {/*    src={`${item.img}?w=370&fit=crop&auto=format`}*/}
                        {/*    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                        {/*    alt={item.title}*/}
                        {/*    loading="lazy"*/}
                        {/*/>*/}
                        <Skeleton
                            variant="rectangular"
                            width={'auto'}
                            height={470}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text">
                                {item.description}
                            </Typography>
                            <Typography variant="h6" color="text">
                                {item.price} ₽
                            </Typography>
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
        // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: ' Полосатые коты',
        description: 'Полосатые коты самые классические из всех видов котов, ' +
            'а ещё они громче всех мурлычут.',
        price: '50 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Орхидеи',
        description: 'Приобретите себе в коллекцию прекрасную ' +
            'виртуальную орхидею от знаменитого художника.',
        price: '15 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Красивые пейзажи',
        description: 'Здесь собраны лучшие фото пейзажей, ' +
            'которые я сделал в своих путешествиях по исландии.',
        price: '12 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: ' Полосатые коты',
        description: 'Полосатые коты самые классические из всех видов котов, ' +
            'а ещё они громче всех мурлычут.',
        price: '50 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Орхидеи',
        description: 'Приобретите себе в коллекцию прекрасную ' +
            'виртуальную орхидею от знаменитого художника.',
        price: '15 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Красивые пейзажи',
        description: 'Здесь собраны лучшие фото пейзажей, ' +
            'которые я сделал в своих путешествиях по исландии.',
        price: '12 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: ' Полосатые коты',
        description: 'Полосатые коты самые классические из всех видов котов, ' +
            'а ещё они громче всех мурлычут.',
        price: '50 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Орхидеи',
        description: 'Приобретите себе в коллекцию прекрасную ' +
            'виртуальную орхидею от знаменитого художника.',
        price: '15 000',
    },
    {
        // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Красивые пейзажи',
        description: 'Здесь собраны лучшие фото пейзажей, ' +
            'которые я сделал в своих путешествиях по исландии.',
        price: '12 000',
    },
];