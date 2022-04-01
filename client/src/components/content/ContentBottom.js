import React from 'react';
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

const ContentBottom = () => {
    // const [type, setType] = useState('users')
    // const [data, setData] = useState([])
    //
    //
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // },[type])
    //
    // useEffect(() => {
    //     console.log('ComponentDitMount')
    // }, [])


    return (
        <Box sx={{mt: 5, mb: 5}}>
            {/*<Grid>*/}
            {/*    <Typography>Ресурс: {type}</Typography>*/}
            {/*    <Button onClick={() => setType('users')} variant="outlined">Пользователи</Button>*/}
            {/*    <Button onClick={() => setType('todos')} variant="outlined">Todos</Button>*/}
            {/*    <Button onClick={() => setType('posts')} variant="outlined">Посты</Button>*/}

            {/*    <pre>{JSON.stringify(data, null,2)}</pre>*/}
            {/*</Grid>*/}

        </Box>
    );
};

export default ContentBottom;
