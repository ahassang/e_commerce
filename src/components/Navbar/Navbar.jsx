import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

//totalItems = cart.total_items (API) which updates after item is chosen
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color="inherit">
                        <img src={logo} alt="Freedombuy.js" height='25px' className={classes.image} />
                    Freedombuy
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar


// Empty react fragment '<>'