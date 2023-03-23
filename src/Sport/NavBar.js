import "./nav.css";
import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nav=[
        {   
            id:1,
            title:"Home",
            icon:<RoofingRoundedIcon/>,
            href:"./Home",
        },
        {   
            id:2,
            title:"Search",
            icon:<SearchRoundedIcon/>,
            href:"",
        },
        {   
            id:3,
            title:"Card Book",
            icon:<GridViewRoundedIcon/>,
            href:"",
        },
    ];
    const sign=[
        {   
            id:1,
            title:"Sign Up",
            icon:<PersonAddAlt1RoundedIcon/>,
            href:"./SignUp",
        },
        {   
            id:2,
            title:"Sign In",
            icon:<AccountCircleRoundedIcon/>,
            href:"./SignIn",
        },
    ];
    return (
        <div>
            <Navbar className='nav'>
                <Navbar.Brand href="#home" className='bodyNav' onClick={handleShow} style={{color:'white'}} ><MenuIcon className='menu'/> PlayingSports</Navbar.Brand>
            </Navbar>
            <Offcanvas className='sideBar' style={{width:'auto'}} show={show} onHide={handleClose}>
                <Offcanvas.Header className='header'>
                    <IconButton style={{color:'white'}} onClick={handleClose}>
                        <MenuOpenIcon/>
                    </IconButton>
                </Offcanvas.Header>
                <Offcanvas.Body className='body'>
                <List>
                {nav.map((text, index) => (
                    <ListItemButton key={index.id} href={text.href}>
                        <ListItemIcon style={{color:'white'}}>
                        {text.icon}
                        </ListItemIcon>
                        <ListItemText className='text' primary={text.title} />
                    </ListItemButton>
                ))}
                </List>
                </Offcanvas.Body>
                <Container>
                <List  className='footer'>
                {sign.map((text, index) => (
                    <ListItemButton key={index.id} href={text.href}>
                        <ListItemIcon style={{color:'white'}}>
                        {text.icon}
                        </ListItemIcon>
                        <ListItemText className='text' primary={text.title} />
                    </ListItemButton>
                ))}
                </List>
                </Container>
            </Offcanvas>
        </div>
    )
}

export default NavBar;