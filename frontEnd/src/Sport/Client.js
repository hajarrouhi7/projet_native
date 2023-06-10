import {React,} from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import './SignUp.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';


const Client = () => {
  const route=useNavigate()
  const[fnam,setFnam]= useState('')
  const[lnam,setLnam]= useState('')
  const[number,setNumber]= useState('')
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const [data,setData] =useState([])
  const [isValid1,setIsValid1] = useState(false)
  const [isValid2,setIsValid2] = useState(false)
  const [isValid3,setIsValid3] = useState(false)
  const [isValid4,setIsValid4] = useState(false)
  const [isValid5,setIsValid5] = useState(false)
  const [isValid6,setIsValid6] = useState(false)
  const [color1,setColor1] = useState("")
  const [color2,setColor2] = useState("")
  const [color3,setColor3] = useState("")
  const [color4,setColor4] = useState("")
  const [color5,setColor5] = useState("")
  const [color6,setColor6] = useState("")
  const [foc,setFoc] = useState(false)
  const handlFirst = (e) =>{
    if ( e.length >=4 ){
      setFoc(true)
      setFnam(e)
      setIsValid1(false)
      setColor1('success')
    }else{
      setFoc(true)
      setIsValid1(true)
      setColor1('')
    }
  }
const handlName=(e)=>{
  if ( e.length >=4 ){
    setFoc(true)
    setLnam(e)
    setIsValid2(false)
    setColor2('success')
  }else{
    setFoc(true)
    setIsValid2(true)
    setColor2('')
  }
}
const handlemail=(e)=>{
  if (e.length >=4 && (/(.+)@(.+){2,}\.(.+){3}/).test(e) ){
    setFoc(true)
    setEmail(e)
    setIsValid3(false)
    setColor3('success')
  }else{
    setFoc(true)
    setIsValid3(true)
    setColor3('')
  }
}
const handlNumber=(e)=>{
  console.log(e);
  if (  e.length >10 ){
    setFoc(true)
    setNumber(e)
    setIsValid4(false)
    setColor4('success')
  }else{
    setFoc(true)
    setIsValid4(true)
    setColor4('')
  }
}
const handlpassword=(e)=>{
  if (e.length >=4 ){
    setFoc(true)
    setPassword(e)
    setIsValid5(false)
    setColor5('success')
  }else{
    setFoc(true)
    setIsValid5(true)
    setColor5('')
  }
}
const handlconfpassword=(e)=>{
  if (e.length >=4 ){
    setFoc(true)
    setPassword(e)
    setIsValid6(false)
    setColor6('success')
  }else{
    setFoc(true)
    setIsValid6(true)
    setColor6('')
  }
}

  const handleSubmit =()=>{
    const obj ={
      "FirstName":fnam,
      "LastName":lnam,
      "NumberPhone":number,
      "EmailAddress":email,
      "Password":password
  
  }

    console.log('data =>',obj);
   axios.post("http://127.0.0.1:8000/api/client",obj).then((response)=>{
     route('/SignIn')
    
    
    })
    
  }

  return (
    <div>

      <NavBar/>
    
      <div className='container d-flex justify-content-center'>
      <div className="d-flex justify-content-center mb-3 me-5 " style={{width:"40vw"}} >
       <div className=' border my-5 p-4'  style={{width:'40vw'}}>
       <div className='text-center '> < PersonAddAlt1Icon  color='success'sx={{ fontSize: 50 }}/></div>
                <Typography component="h1" variant="h4" className='text-center pt-2'>
                  Sign up
                </Typography>
        <div className='d-flex justify-content-around w-100 mt-5 mb-3 '>
           <TextField id="outlined-basic" label="FirstName" variant="outlined" className=' ' focused={foc} color={color1}  error={isValid1} onChange={(e)=>{ handlFirst(e.target.value)} }/> 
          <TextField id="outlined-basic" label="LastName" variant="outlined" className=''focused={foc} color={color2}  error={isValid2}  onChange={(e)=>{handlName(e.target.value)}} />
        </div>
        <div className='d-flex justify-content-around w-250 mb-3 '>
          <TextField id="outlined-basic" label="email" variant="outlined"   className='' focused={foc} color={color3}  error={isValid3}   onChange={(e)=>{handlemail(e.target.value)}}/>
          <TextField id="outlined-basic" label="number" variant="outlined"   className=''focused={foc} color={color4}  error={isValid4}  onChange={(e)=>{handlNumber(e.target.value)}}/></div>
        <div className='d-flex justify-content-around w-250 mb-3'>
          <TextField id="outlined-basic" label="password"type="password" variant="outlined"  className='' focused={foc} color={color5}  error={isValid5}  onChange={(e)=>{handlpassword(e.target.value)}}/>
          <TextField id="outlined-basic" label="Confpassword" type="password" variant="outlined"  className='' focused={foc} color={color6}  error={isValid6}  onChange={(e)=>{handlconfpassword(e.target.value)}}/>
          </div>
            <div className='col-sm-12 mb-3'>
              <Button type="button" id='btn' fullWidth onClick={handleSubmit}>Sign Up</Button>
            </div>
        
      </div>
     
      </div>
      </div>
  
      <Footer/>
      </div>
      
  );
}
export default Client;