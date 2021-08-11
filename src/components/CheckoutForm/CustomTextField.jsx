import React from 'react';
import { TextField, Grid, InputLabel } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


//react useHook form
const FormInput = ({ name, label}) => {
    const { control } = useFormContext();


    return (
        <Grid item xs={12} sm={6}>
        <InputLabel>{label}</InputLabel>
        <Controller
            render={({ field }) => <TextField {...field} />}
            name={name}
            control={control}
            label={label}
            fullWidth
            
            variant="outlined"
            />
    </Grid>

    );
}

export default FormInput;
