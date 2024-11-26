import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataService from '../Service/DataService';





const HomeComponent = () => {

    const [data, setData] = useState("");

    const logIn = (e) => {

        DataService.getData().then(
            (response) => {
                console.log(response);
            },
            (error) => {

            }
        )

    }


    return (
        <div>

            <div className="d-flex justify-content-center">
                <Button variant="contained" onClick={(e) => logIn(e)}>
                    <span>Send</span>
                </Button>
            </div>


            <div className="d-flex justify-content-center">
                <div>
                    <Typography sx={{ fontSize: 40 }}>Servo based motion control</Typography>
                </div>
            </div>



            <Box className="d-flex justify-content-center">
                <Box>
                    <Typography sx={{ fontSize: 40 }}>Analog input</Typography>
                </Box>
            </Box>

            <Box className="d-flex justify-content-center">
                <Box>
                    <Typography sx={{ fontSize: 40 }}>OPC-UA communication</Typography>
                </Box>
            </Box>


            <Box className="d-flex justify-content-center">
                <Box>
                    <Typography sx={{ fontSize: 40 }}>HMI</Typography>
                </Box>
            </Box>

        </div>
    );
}

export default HomeComponent;