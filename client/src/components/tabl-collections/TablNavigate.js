import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "@mui/material/Grid"
import TabMenuLeft from "./TabMenuLeft";
import ExportCustomToolbar from "./ExportCustomToolbar";


export default function TablNavigate() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1} sx={{ mt: 15}}>
                <Grid item xs={3}>
                    <TabMenuLeft/>
                </Grid>
                <Grid item xs={9}>
                    <Box sx={{width: '100%', typography: 'body1'}}>
                        <TabContext value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Analyze" value="1"/>
                                    <Tab label="My campaigns" value="2"/>
                                    <Tab label="Configure" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1"><ExportCustomToolbar/></TabPanel>
                            <TabPanel value="2">My campaigns</TabPanel>
                            <TabPanel value="3">Configure</TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
