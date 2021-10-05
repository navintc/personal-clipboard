import React from 'react';
import './Home.css';

import { TextField, Button, Stack } from '@mui/material';

const Home = () =>{
    return(
        <div>
            
            <TextField
                id="outlined-multiline-static"
                label="Copy your things here"
                multiline
                rows={4}
                defaultValue=""
            />

            <div className="btn-stack-1">
                <Stack spacing={2} direction="row">
                    <Button variant="outlined">Optional</Button>
                    <Button variant="contained">Paste Snip</Button>
                </Stack>
            </div>
        </div>
    );
}

export default Home;