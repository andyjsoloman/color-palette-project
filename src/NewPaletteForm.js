import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import NewPaletteName from './NewPaletteName';


const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        height: 'calc(100vh - 64px)',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NewPaletteForm(props) {
    const { palettes } = props;
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });
    });
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorUnique", value => {
            return colors.every(
                ({ color }) => color !== currentColor
            );
        });
    });


    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [colors, setColors] = React.useState([])

    const [currentColor, setColor] = useState();

    const [newColorName, setName] = useState('');

    const changeColor = (newColor) => {
        setColor(newColor.hex)
    };

    function addNewColor() {
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        setColors(oldColors => [...oldColors, newColor]);
        setName('')
    };

    function handleChange(evt) {
        setName(evt.target.value);
    }

    function handleSubmit(newPaletteName) {

        const newPalette = {
            paletteName: newPaletteName,
            id: newColorName.toLowerCase().replace(/ /g, '-'),
            colors: colors
        }
        props.savePalette(newPalette);


    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                    <NewPaletteName handleSubmit={handleSubmit} palettes={palettes} />

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>

                <Divider />
                <Typography variant='h4'>Design Your Palette</Typography>
                <div>
                    <Button variant='contained' color='secondary'>Clear Palette</Button>
                    <Button variant='contained' color='primary'>Random Color</Button>
                </div>
                <ChromePicker color={currentColor} onChange={(newColor) => changeColor(newColor)} disableAlpha={true} />
                <ValidatorForm onSubmit={addNewColor}>
                    <TextValidator label='Color Name' name='newcolorName' value={newColorName} onChange={handleChange} validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['This field is required', 'This name is already taken', 'This color is already present']} />
                    <Button variant='contained' color='primary' style={{ backgroundColor: currentColor }} type='submit'>Add Color</Button>
                </ValidatorForm>

            </Drawer>
            <Main open={open} >
                <DrawerHeader />

                {colors.map(color => (
                    <DraggableColorBox color={color.color} name={color.name} />
                ))}

            </Main>
        </Box>
    );
}