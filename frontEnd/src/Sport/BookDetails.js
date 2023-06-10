import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './SignUp.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer,DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import dayjs from 'dayjs';

const theme = createTheme();

const BookDetails = () => {
  const Client = JSON.parse(sessionStorage.getItem("Client")) 
  const Infos = JSON.parse(sessionStorage.getItem("Infos")) 


// const twoPM = dayjs().set('hour', 7).startOf('hour');
// const threePM = dayjs().set('hour', 22).startOf('hour');
    const route=useNavigate()
    const[FirstName,setfirstName]= useState(Client[0].FirstName)
    const[LastName,setlastName]= useState(Client[0].LastName)
    const[Email,setemail]= useState(Client[0].EmailAddress)
    const[Number,setnumber]= useState(Client[0].NumberPhone)
    const[DateBook,setdateBook]= useState('')
    const[TimeBook,settimeBook]= useState('')
    const[Duration,setduration]= useState('')
    const[TotalPrice,settotalPrice]= useState('')
    const [data,setData] =useState([])
    const [isValid1,setIsValid1] = useState(false)
    const [isValid2,setIsValid2] = useState(false)
    const [isValid3,setIsValid3] = useState(false)
    const [isValid4,setIsValid4] = useState(false)
    const [isValid5,setIsValid5] = useState(false)
    const [isValid6,setIsValid6] = useState(false)
    const [isValid7,setIsValid7] = useState(false)
    const [isValid8,setIsValid8] = useState(false)
    const [color1,setColor1] = useState("")
    const [color2,setColor2] = useState("")
    const [color3,setColor3] = useState("")
    const [color4,setColor4] = useState("")
    const [color5,setColor5] = useState("")
    const [color6,setColor6] = useState("")
    const [color7,setColor7] = useState("")
    const [color8,setColor8] = useState("")
    const [foc,setFoc] = useState(false)
    const time = React.useRef()
    const date = React.useRef()
    const ok = React.useRef('')
   



    const handlfirstName = (e) =>{
        if ( e.length >=4 ){
          setFoc(true)
          setfirstName(e)
          setIsValid1(false)
          setColor1('success')
        }else{
          setFoc(true)
          setIsValid1(true)
          setColor1('')
        }
      }
      const handllastName = (e) =>{
        if ( e.length >=4 ){
          setFoc(true)
          setlastName(e)
          setIsValid2(false)
          setColor2('success')
        }else{
          setFoc(true)
          setIsValid2(true)
          setColor2('')
        }
      }
      const handlemail= (e) =>{
        if ( e.length >=4 && (/(.+)@(.+){2,}\.(.+){3}/).test(e) ){
          setFoc(true)
          setemail(e)
          setIsValid3(false)
          setColor3('success')
        }else{
          setFoc(true)
          setIsValid3(true)
          setColor3('')
        }
      }
      const handlnumber= (e) =>{
        if ( e.length >10 ){
          setFoc(true)
          setnumber(e)
          setIsValid4(false)
          setColor4('success')
        }else{
          setFoc(true)
          setIsValid4(true)
          setColor4('')
        }
      }
      const handldateBook= (e) =>{
        if ( e.length >=4 ){
          setFoc(true)
          setdateBook(e)
          setIsValid5(false)
          setColor5('success')
        }else{
          setFoc(true)
          setIsValid5(true)
          setColor5('')
        }
      }
    const handltimeBook= (e) =>{
      if ( e.length >=4 ){
        setFoc(true)
        settimeBook(e)
        setIsValid6(false)
        setColor6('success')
      }else{
        setFoc(true)
        setIsValid6(true)
        setColor6('')
      }
    }
    const handlduration= (e) =>{
        if ( e.length >=0 ){
          setFoc(true)
          setduration(e)
          setIsValid7(false)
          setColor7('success')
        }else{
          setFoc(true)
          setIsValid7(true)
          setColor7('')
        }
      }
      const handltotalPrice= (e) =>{
        if ( e.length >=4 ){
          setFoc(true)
          settotalPrice(e)
          setIsValid8(false)
          setColor8('success')
        }else{
          setFoc(true)
          setIsValid8(true)
          setColor8('')
        }
      }
      const handleSubmit =()=>{
        const obj = {
          
    "FirstName":"abdou",
    "LastName":"xxx",
    "Email":"xxxx@gmail.com",
    "Number":"0987777777",
    "DateBook":"123",
    "BookTime":"2022-09-11 11:21:00",
    "Duration":"2022-09-11 11:21:00",
    "Price":"123",
            "infoTerrain_id":"3",
            "client_id" : "1"
        }
        const datee = (date.current.value).split('/')
        const obj1 ={
          "FirstName":FirstName.toString(),
          "LastName":LastName.toString(),
          "Email":Email.toString(),
          "Number":Number.toString(),
          "DateBook":date.current.value,
          "BookTime":time.current.value.toString(),
          "Duration":Duration,
          "Price":TotalPrice,
          "infoTerrain_id":Infos[0].id.toString(),
          "client_id" : Client[0].id.toString()
      
      }
      console.log('data =>',obj1);
      axios.post("http://127.0.0.1:8000/api/Reservation ",obj1).then((response)=>{
        route('/Payment')
       
       }) 
     }
    
    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                  <BookmarkAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Book Details
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="FirstName"  defaultValue={FirstName} name="FirstName" fullWidth label="First name" autoComplete="given-name" variant="standard" autoFocus focused={foc} color={color1}  error={isValid1} onChange={(e)=>{handlfirstName(e.target.value)} }/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="LastName"  defaultValue={LastName} name="LastName" label="Last name" fullWidth autoComplete="family-name" variant="standard"autoFocus focused={foc} color={color2}  error={isValid2} onChange={(e)=>{handllastName(e.target.value)} } />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="Email"  defaultValue={Email}  ref={ok} name="Email" label="E-mail" fullWidth autoComplete="email" variant="standard"focused={foc} color={color3}  error={isValid3} onChange={(e)=>{handlemail(e.target.value)} } />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="Number" defaultValue={Number} name="Number" label="Number" fullWidth autoComplete="number" variant="standard" focused={foc} color={color4}  error={isValid4} onChange={(e)=>{handlnumber(e.target.value)} } />
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                            <DemoItem>
                                <DatePicker name="DateBook" label="Date Book" focused={foc} color={color5}  error={isValid5} inputRef={date}  defaultValue={JSON.stringify(new Date())} />
                            </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer name="TimeBook" components={['MobileTimePicker',]}>
                            <DemoItem>
                                <MobileTimePicker label="Book Time" focused={foc} color={color6} inputRef={time}  defaultValue={JSON.stringify(new Date())}      />
                            </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="Duration" name="Duration" label="Duration" fullWidth autoComplete="duration" variant="standard"  focused={foc} color={color7}  error={isValid7} onChange={(e)=>{handlduration(e.target.value)} }/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="TotalPrice" name="TotalPrice" label="Price" fullWidth autoComplete="totalPrice" variant="standard" focused={foc} color={color8}  error={isValid8} onChange={(e)=>{handltotalPrice(e.target.value)} } />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox color="secondary" name="saveAddress" value="yes" />} label="Use this Booked details for payment details"/>
                    </Grid>
                  </Grid>
                  <Button type="button" id='btn' fullWidth  sx={{ mt: 3, mb: 2 }}  onClick={handleSubmit}>
                    Book
                  </Button>
                </Box>
              </Box>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
}
export default BookDetails;