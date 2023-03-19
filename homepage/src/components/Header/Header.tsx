import *  as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [
        "Home",
        "Profile",
        "Contact"
    ];

    const linkMap: { [name: string]: string } = {
        "Home": "/",
        "Profile": "/profile",
        "Contact": "/contact"
    }


    const ITEM_HEIGHT = 48; 

    return (      
    <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton 
            edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
            onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>

            <Menu
                id="long-menu"
                MenuListProps={
                    {
                        'aria-labelledby': 'long-button',
                    }
                }
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
                }}
            >
                {options.map((option) => (
                    <Link to={linkMap[option]} style={{textDecoration: "none"}}>
                        <MenuItem 
                            key={option} 
                            selected={option === 'Pyxis'} 
                            onClick={handleClose}
                        >
                            <Typography>
                                {option}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </Toolbar>
    </AppBar>
    )
}

export default Header