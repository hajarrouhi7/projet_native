import React,{useState,useEffect} from "react";
import NavBar from './NavBar';
import axios from "axios";
import Footer from './Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const theme = createTheme();
const CardBook = () => {
    const [reserve,setReserve] =useState([])
    useEffect(() => {
        fetchReserve();
       
    }, []);
    const fetchReserve =async() =>{ // data from database
        await axios.get('http://127.0.0.1:8000/api/Reservation')
        .then(({data})=>{
            setReserve(data) 
        })
    }
    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            {reserve.length > 0 && (
            reserve.map((row,key) =>(
            <Container component="main" maxWidth="sm" style={{marginTop:'20px',marginBottom:'30px',borderRadius:'20px',backgroundColor:'#e9f5db'}}>
              <CssBaseline />
              <Box key={key} sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                  <BookmarkIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Card Book
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                <React.Fragment>
                    <List disablePadding>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Full Name' />
                        <Typography variant="body2">{row.LastName} {row.FirstName}</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Date Booked' />
                        <Typography variant="body2">{row.DateBook}</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Time Booked' />
                        <Typography variant="body2">{row.BookTime}</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Type Stade' />
                        <Typography variant="body2">Football</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Duration' />
                        <Typography variant="body2">{row.Duration} heures</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Price" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {row.Price} MAD
                        </Typography>
                        </ListItem>
                    </List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Stade Location
                        </Typography>
                        <Typography gutterBottom>Stade Ibn Batouta, Tanger</Typography>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Payment details
                        </Typography>
                        <Grid container>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card type</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Visa...</Typography>
                            </Grid>
                            </React.Fragment>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card holder</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Hajar Wiam</Typography>
                            </Grid>
                            </React.Fragment>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card number</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>342 354 xxx xxx</Typography>
                            </Grid>
                            </React.Fragment>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Expiry date</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>2026/03</Typography>
                            </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid>
                </Grid>
                </React.Fragment>
                </Box>
              </Box>
            </Container>
            ))
            )}
            <Footer/>
        </ThemeProvider>
    );
}
export default CardBook;