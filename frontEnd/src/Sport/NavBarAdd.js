import "./nav.css";
import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WebIcon from '@mui/icons-material/Web';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';


const NavBarAdd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nav=[
        {  id:1, title:"View", icon:<WebIcon/>, href:"./ListViewed", },
        {  id:2, title:"Book", icon:<BookmarkIcon/>, href:"./ListBooked", },
        {  id:3, title:"Users", icon:<AccountCircleIcon/>, href:"./ListUsers", },
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
                    <ListItemButton href="./Admin">
                        <ListItemIcon style={{color:'white'}}>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText className='text' primary="Disconnected" />
                    </ListItemButton>
                </List>
                </Container>
            </Offcanvas>
        </div>
    )
}

export default NavBarAdd;