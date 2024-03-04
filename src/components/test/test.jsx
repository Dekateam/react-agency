import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            <p>این یک تست است</p>
        </>
    );
}