import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export default function BasicTextFields() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="تست" variant="outlined" />
                <TextField id="filled-basic" label="تست" variant="filled" />
                <TextField id="standard-basic" label="تست" variant="standard" />

            </Box>
            <Typography variant='h1' color="primary.dark">این یک تست است</Typography>
            <Typography variant='h2' color="primary">این یک تست است</Typography>
            <Typography variant='h3' color="primary.light">این یک تست است</Typography>
            <Typography variant='h4'>این یک تست است</Typography>
            <Typography variant='p'>این یک تست است</Typography>


        </>
    );
}