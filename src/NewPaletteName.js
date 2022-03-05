import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NewPaletteName(props) {

    const { handleSubmit, palettes } = props;

    const [pName, setPName] = useState('');

    useEffect(
        () => {
            ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
                palettes.every(
                    ({ paletteName }) =>
                        paletteName.toLowerCase() !== value.toLowerCase()
                )
            );
        },
        [palettes]
    );

    function handleChange(evt) {
        setPName(evt.target.value);
    }

    function savePalette() {
        const newPaletteName = pName;
        handleSubmit(newPaletteName);
    }

    return (
        <ValidatorForm onSubmit={savePalette}>
            <TextValidator
                label='Palette Name'
                fullWidth
                margin='normal'
                value={pName}
                onChange={handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                    'Enter Palette Name',
                    'Palette Name already used'
                ]} />
            <Button
                component={Link}
                to='/'
                onClick={savePalette}
                type='submit'
                variant='contained'
                color='primary'
            >Save Palette</Button>
        </ValidatorForm>
    )
}

export default NewPaletteName