import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
const Admin = () => {
      const route = useNavigate()
      const [user, setUser] = useState('')
      const [password, setPassword] = useState('');
      const [msg, setMsg] = useState('')
      const Login = () => {
          //  user === "Admin" && password === "123" ? sessionStorage.setItem('admin',"true") && route("/Dashboard") : setMsg("كلمة المرور غير صحيحة")
          if (user === "Admin" && password === "123") {
              sessionStorage.setItem('admin', "true")
              route("/ListBooked")
          } else setMsg('the wrong password')
  
      }
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 15, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField required onChange={(e) => { setUser(e.target.value) }} fullWidth id="email" label="Admin" name="Email" autoComplete="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="Password" onChange={(e) => { setPassword(e.target.value); setMsg('') }} label="Password" type="password" id="password" autoComplete="new-password" />
                  </Grid>
                </Grid>
                <Button type="submit" id='btn' onClick={Login} fullWidth sx={{ mt: 3, mb: 2 }} href=''>
                  Entrance
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}
export default Admin;