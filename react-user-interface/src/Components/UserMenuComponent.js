import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import DataService from '../Service/DataService';

const UserMenuComponent = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label={<Link to={"/parcelsending"} className='nav-link'>Manual motion</Link>} />
                <Tab label={<Link to={"/followparcel"} className='nav-link'>Inputs</Link>} />
                <Tab label={<Link to={"/parcellockers"} className='nav-link'>Outputs</Link>} />
                <Tab label={<Link to={"/prices"} className='nav-link'>Measuring results</Link>} />
                <Tab label={<Link to={"/questions"} className='nav-link'>Statistics</Link>} />

            </Tabs>
        </Box>
    );
}

export default UserMenuComponent;