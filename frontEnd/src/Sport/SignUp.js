import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './SignUp.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default class SignUp extends React.Component{ 
  render(){
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
    return (
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
              <PersonAddAltOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="given-name" name="FirstName" required fullWidth id="firstName" label="First Name" autoFocus />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth id="lastName" label="Last Name" name="LastName"autoComplete="family-name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="Number" required fullWidth id="number" label="Number Phone" autoComplete="Number" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth id="email" label="Email Address" name="Email" autoComplete="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="Password" label="Password" type="password" id="password" autoComplete="new-password" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="ConfirmPassword" label="Confirm Password" type="password" id="confirmPassword" autoComplete="new-password" />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
                </Grid>
              </Grid>
              <Button type="submit" id='btn' fullWidth sx={{ mt: 3, mb: 2 }} href=''>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="./SignIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Footer/>
      </ThemeProvider>
    );
  }
  
}
